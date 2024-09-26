import React from "react";
import style from "@/styles/navbar.module.css";
import Image from "next/image";


const Navbar = () => {
    return (
        <>
        <div className={style.navbar}>
            <div className={style.wrapper}>
                <Image src="/logo.png" alt="logo" width={148} height={91} />
            </div>
        </div>
        </>
    )
}

export default Navbar;