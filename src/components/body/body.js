import React from "react";
import style from "@/styles/body.module.css";
import Image from "next/image";

const Body = () => {
  return (
    <>
      <div className={style.container}>
        <div className={style.wrapper}>
          <div className={style.navbar}>
            <Image src="/navbar.png" alt="error" width={353} height={79} />
          </div>
          <div className={style.content}>
            <h>
              Streamlining Property <br />
              Listing and Matching
            </h>
            <p className={style.paragraf}>
              For Developers Property owners Agents Buyers
            </p>
          </div>
          <div className={style.bottom}>
            <Image src="/bottomlogo.svg" alt="error" width={127} height={29} />
            <Image src="/social.png" alt="error" width={105} height={22} />
          </div>

          <div className={style.copyright} >
          <p>© 2023 Brokerbox. All rights reserved.</p>
          
          </div>
        </div>
      </div>
    </>
  );
};

export default Body;
