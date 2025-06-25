import React, {Suspense, useState, useEffect, useRef} from 'react';
import { Canvas } from '@react-three/fiber';
import Loader from "../components/Loader.jsx";
import Island from "../models/Island.jsx";
import Sky from "../models/Sky.jsx";
import Bird from "../models/Bird.jsx";
import Plane from "../models/Plane.jsx";
import HomeInfo from "../components/HomeInfo.jsx";

import sakura from "../asset/sakura.mp3";
import {soundon, soundoff} from "../asset/icons/index.js";

const Home = () => {

    const audioRef = useRef(new Audio(sakura));
    audioRef.current.volume = 0.5;
    audioRef.current.loop = true;
    const [isPlayingMusic, setIsPlayingMusic] = useState(false);
    useEffect(() => {
        if(isPlayingMusic) {
            audioRef.current.play();
        }

        return () => {
            audioRef.current.pause();
            audioRef.current.currentTime = 0;
        }
    }, [isPlayingMusic])

    const [isRotating, setIsRotating] = useState(false);
    const [currentStage, setCurrentStage] = useState(1);

    const adjustIslandForScreenSize = () => {
        let screenScale = null
        let screenPosition = [0, -6.5, -43];
        let rotation = [0.1, 4.7, 0];
        if (window.innerWidth < 768) {
            screenScale = [0.9, 0.9, 0.9];
        } else {
            screenScale = [1, 1, 1];
        }

        return [screenScale, screenPosition, rotation];
    }

    const [islandScale, islandPosition, IslandRotation] = adjustIslandForScreenSize();

    // plane

    const adjustPLaneForScreenSize = () => {
        let screenScale, screenPosition;

        if (window.innerWidth < 768) {
            screenScale = [1.5, 1.5, 1.5];
            screenPosition = [0, -1.5, 0];
        } else {
            screenScale = [3, 3, 3];
            screenPosition = [0, -4, -4];
        }

        return [screenScale, screenPosition];
    }

    const [planeScale, planePosition] = adjustPLaneForScreenSize();


    return (
        <section className="w-full h-screen relative">
            <div className="absolute top-28 left-0 right-0 z-10 flex justify-center items-center">
                { currentStage && <HomeInfo currentStage={currentStage} />  }
            </div>

            <Canvas
                className={`w-full h-screen bg-transparent ${isRotating ? "cursor-grabbing" : "cursor-grab"}`}
                camera={{ near: 1, far: 1000 }}
            >
                <Suspense fallback={<Loader />}>
                    <directionalLight position={[1, 1, 1]} intensity={2} />
                    <ambientLight intensity={0.5} />
                    {/*<pointLight />*/}
                    {/*<spotLight />*/}
                    <hemisphereLight skyColor="#b1e1ff" groundColor="#000000" intensity={1} />

                    <Bird />
                    <Sky isRotating={isRotating} />
                    <Island
                        position={islandPosition}
                        scale={islandScale}
                        rotation={IslandRotation}
                        setCurrentStage={setCurrentStage}
                        isRotating={isRotating}
                        setIsRotating={setIsRotating}
                    />
                    <Plane
                        isRotating={isRotating}
                        Position={planePosition}
                        Scale={planeScale}
                        rotation={[0, 20, 0]}
                    />
                </Suspense>
            </Canvas>

            <div className={"absolute bottom-2 left-2 flex items-center gap-2"}>
                <img
                    src={!isPlayingMusic ? soundoff : soundon}
                    alt={"sound icon"}
                    className={"w-10 h-10 object-contain cursor-pointer"}
                    onClick={() => setIsPlayingMusic(!isPlayingMusic)}
                />
                <h5 className={"blue-gradient_text font-semibold drop-shadow"}>Iqra and Mahams Island</h5>
            </div>
        </section>
    )
}

export default Home;