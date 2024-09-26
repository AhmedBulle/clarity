import React from "react";
import style from "@/styles/heading.module.css"


const Heading = () => {
    return (
        <div className={style.container}>
            <div className={style.wrapper}>
            <div className={style.text}>
            <h>
                Tech-focused <br />
                Investment in <br />
                the Global South </h>
            </div>
        </div>
        </div>
    )
}
export default Heading;