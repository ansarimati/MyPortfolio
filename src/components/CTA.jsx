import React from "react";
import {Link} from "react-router-dom";

const CTA = () => {
    return (
        <section className={"cta"}>
            <p className={"cta-text"}>
                Have a project in mind? <br className={"sm:block hidden"} />
                lets build it together.
            </p>
            <Link to={"/contact"} className={"btn"}>Connect</Link>
        </section>
    )
}

export default CTA;