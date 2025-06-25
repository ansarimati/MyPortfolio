import React, {Suspense, useRef, useState} from 'react';
import emailjs from "@emailjs/browser";
import {Canvas} from "@react-three/fiber";
import Fox from "../models/Fox.jsx";
import Loader from "../components/Loader.jsx";
import useAlert from "../hooks/useAlert.js";
import Alert from "../components/Alert.jsx";
import { socialLinks } from "../constants/index.jsx";

const Contact = () => {
    const [form, setForm] = useState({name: "", email: "", message: ""});
    const [isLoading, setIsLoading] = useState(false);
    const formRef = useRef(null);
    const [currentAnimation, setCurrentAnimation] = useState('idle');

    const { alert, showAlert, hideAlert } = useAlert();

    const handleChange = (e) => {
        setForm({...form, [e.target.name]: e.target.value});
    };

    const handleFocus = (e) => {
        setCurrentAnimation('walk');
    }

    const handleBlur = () => {
        setCurrentAnimation('idle');
    }
    // console.log(import.meta.env.VITE_EMAILJS_TEMPLATE_ID);

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsLoading(true);
        setCurrentAnimation('hit');

        emailjs.send(
            import.meta.env.VITE_EMAILJS_SERVICE_ID,
            import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
            {
                from_name: form.name,
                to_name: "Ansar! Mat!",
                from_email: form.email,
                to_email: import.meta.env.VITE_APP_MY_EMAIL,
                message: form.message,
            },
            import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY,
        ).then(() => {
            setIsLoading(false);
            showAlert({ show: true, message: "Message Sent Successfully", type: "success" });

            setTimeout(() => {
                hideAlert();
                setCurrentAnimation('idle');
                setForm({name: "", email: "", message: ""});
            }, 2000)

            setForm({name: "", email: "", message: ""});
        }).catch((error) => {
            setIsLoading(false);
            setCurrentAnimation('idle');
            console.log(error);
            showAlert({ show: true, message: "Something went wrong", type: "danger" });
        })
    }
    console.log("ALERT", alert);
    return (
        <section className='relative flex lg:flex-row flex-col max-container'>
            {alert.show && <Alert {...alert} />}

            <div className='flex-1 min-w-[50%] flex flex-col'>
                <h1 className='head-text'>Get in Touch</h1>

                <form
                    ref={formRef}
                    onSubmit={handleSubmit}
                    className='w-full flex flex-col gap-7 mt-14'
                >
                    <label className='text-black-500 font-semibold'>
                        Name
                        <input
                            type='text'
                            name='name'
                            className='input'
                            placeholder='John'
                            required
                            value={form.name}
                            onChange={handleChange}
                            onFocus={handleFocus}
                            onBlur={handleBlur}
                        />
                    </label>
                    <label className='text-black-500 font-semibold'>
                        Email
                        <input
                            type='email'
                            name='email'
                            className='input'
                            placeholder='John@gmail.com'
                            required
                            value={form.email}
                            onChange={handleChange}
                            onFocus={handleFocus}
                            onBlur={handleBlur}
                        />
                    </label>
                    <label className='text-black-500 font-semibold'>
                        Your Message
                        <textarea
                            name='message'
                            rows='4'
                            className='textarea'
                            placeholder='Write your thoughts here...'
                            value={form.message}
                            onChange={handleChange}
                            onFocus={handleFocus}
                            onBlur={handleBlur}
                        />
                    </label>

                    <button
                        type='submit'
                        disabled={isLoading}
                        className='btn'
                        onFocus={handleFocus}
                        onBlur={handleBlur}
                    >
                        {isLoading ? "Sending..." : "Submit"}
                    </button>

                    <div className={ "absolute bottom-5 left-0 w-[50%] mb-[-20px] flex justify-center items-center"}>
                        <div className={ "flex flex-row justify-center items-center gap-2"}>
                            {socialLinks.map((link, index) => (
                                <a key={index} href={link.link} target={"_blank"} rel={"noopenner noreferrer"}>
                                    <img src={link.iconUrl}  />
                                </a>
                            ))}
                        </div>
                    </div>
                </form>


            </div>

            <div className='lg:w-1/2 w-full lg:h-auto md:h-[550px] h-[350px]'>
                <Canvas
                    camera={{
                        position: [0, 0, 5],
                        fov: 75,
                        near: 0.1,
                        far: 1000,
                    }}
                >
                    <directionalLight position={[0, 0, 1]} intensity={2.5} />
                    <ambientLight intensity={1} />
                    <pointLight position={[5, 10, 0]} intensity={2} />
                    <spotLight
                        position={[10, 10, 10]}
                        angle={0.15}
                        penumbra={1}
                        intensity={2}
                    />

                    <Suspense fallback={<Loader />}>
                        <Fox
                            currentAnimation={currentAnimation}
                            position={[0.5, 0.35, 0]}
                            rotation={[12.629, -0.6, 0]}
                            scale={[0.5, 0.5, 0.5]}
                        />
                    </Suspense>
                </Canvas>
            </div>
        </section>
    )
}

export default Contact;

// LINKS
// https://github.com/adrianhajdin/3D_portfolio/tree/main
// https://r3f.docs.pmnd.rs/getting-started/introduction   REACT THREE FIBER
// https://sketchfab.com/3d-models/foxs-islands-163b68e09fcc47618450150be7785907#download SKETCH FAB
// https://gltf.pmnd.rs/        FOR THREE JS MODEL CONVERT
// https://dashboard.emailjs.com/admin/templates/yo20vka/settings  EMAILJS
// https://simpleicons.org/?q=git  ICONS
