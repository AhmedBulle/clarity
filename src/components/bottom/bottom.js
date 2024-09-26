import React from "react";
import style from "@/styles/bottom.module.css"
import Image from "next/image";
import Link from "next/link";

const Bottom  = () => {
    return (
        <div className={style.main} >
            <div className={style.bottom}>
            <p>© 2023 Clarity </p>
            </div>
                <div className={style.lily}>
                    <p>Terms & Policies Privacy</p>
                    </div>
            <div className={style.footer}>
                <Link href="https://www.tiktok.com/explore" target="_blank">
                <Image src="/tiktok.svg" alt="error" width={20} height={20} />
                </Link>
                <Link href="https://www.linkedin.com/" target="_blank" >
                <Image src="/linked in.svg" alt="error" width={20} height={20} />
                </Link>
                <Link href="https://www.facebook.com/" target="_blank" >
                <Image src="/facebook.svg" alt="error" width={20} height={20} />
                </Link>
                <Link href="https://www.instagram.com/" target="_blank">
                <Image src="/instagram.svg" alt="error" width={20} height={20} />
                </Link>
                <Link href="https://x.com/" target="_blank">
                <Image src="/twiter.png" alt="error" width={20} height={20} />
                </Link>
                
            </div>
         </div>
        
    )
}
export default Bottom;  