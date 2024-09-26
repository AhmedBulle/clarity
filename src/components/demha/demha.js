import React from "react";
import style from "@/styles/demha.module.css"
import Image from "next/image";

const Demha = () => {
    return(
        <>
        <div className={style.container}>
            <div className={style.wrapper}>
                <div className={style.navbar}>
                    <Image src="/image 1.png" alt="error" width={148} height={91} />
                </div>
                <div className={style.content}>
                    <p>Tech-focused Investments in The Global South</p>
                </div>
                <div className={style.footer}>
                    <div className={style.touch}>
                        <p>Get In Touch</p>
                        <Image src="/Vector.png" alt="error" width={26} height={26} /> 
                    </div>
                    <div className={style.country}>
                        
                        <p>Nairobi</p>
                        <Image src="/kenya.png" alt="error" width={26} height={26} />
                        <p>Berlin</p>
                        <Image src="/Berlin.png" alt="error" width={26} height={26} />
                        <p>Nassau</p> 
                        <Image src="/Nassau.png" alt="error" width={26} height={26} />
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default Demha;