import React from "react";
import style from "@/styles/footer.module.css"
import Image from "next/image";

const Footer = () => {
    return (
        <div className={style.footer}>
            <div className={style.wrapper}>
            <div className={style.touch}>
                <p>Get in touch</p>
                <Image src="/twiter.png" alt="error" width={26} height={26} />
            </div>
            <div className={style.flag}>
                <p>Nairobi</p>
                <Image src="/ken.png" alt="error" width={26} height={26} />
                <p>Berlin</p>
                <Image src="/Ber.png" alt="error" width={26} height={26} />
                <p>Nassau</p>
                <Image src="/nas.png" alt="error" width={26} height={26} />
         
         </div>
        </div>
        </div>
    )
}
export default Footer;