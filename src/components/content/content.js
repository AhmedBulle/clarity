import React from "react";
import style from "@/styles/content.module.css"

const Content = () => {
    return (
        <>
        <div className={style.container} >
            <div className={style.wrapper}> 
            <p className={style.win}>Live & Win <br/> </p>
            <p className={style.life}>Life Gamified</p>
            <div className={style.join}>
                <a href="//">Join now</a>
            </div>
            </div>
        </div>
        </>
  )
}
export default Content; 