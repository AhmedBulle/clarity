import React from "react";
import style from "@/styles/logo.module.css"
import Image from "next/image";

const Logo = () => {
    return (
        <div className={style.navbar}>
            <div className={style.wrapper}>
            <div className={style.logo}>
            <h1>Clarity</h1>
        </div>
            <div className={style.image} >
            {/* <Image src="/all.png" alt="error" width={400} height={200}/> */}
            <a href="//">Join Now</a>
            </div>
            </div>
        </div>
    )
}
export default Logo;