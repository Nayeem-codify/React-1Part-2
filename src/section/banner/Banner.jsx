import React from 'react'
import "./banner.css"
import bannerShape_one from "../../assets/images/bannerShape_one.png"
import bannerShape_two from "../../assets/images/bannerShape_two.png"
import bannerShape_three from "../../assets/images/bannerShape_three.png"
import bannerShape_four from "../../assets/images/bannerShape_four.png"
import bannerShape_five from "../../assets/images/bannerShape_five.png"
import bannerShape_six from "../../assets/images/bannerShape_six.png"
import bannerShape_seven from "../../assets/images/bannerShape_seven.png"
import bannerCircle_three from "../../assets/images/bannerCircle_three.png"
import bannerSide_shape from "../../assets/images/bannerSide_shape.png"

const Banner = () => {
  return (
     <section id="banner">
            <div className="container">
                <div className="bannerCircle_one">
                </div>
                <div className="banner_content">
                    <h1>We are a full range design agency</h1>
                    <p className="paragraph">Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit
                        quo minus id quod
                        maxime.</p>
                    <div className="banner_btn">
                        <a href="#" className="common_btn">Contact us</a>
                        <a href="#" className="common_btn">showcase</a>
                    </div>
                </div>
            </div>
            <div className="bannerShape_one">
                <img src={bannerShape_one} alt=""/>
            </div>
            <div className="bannershape_two">
                <img src={bannerShape_two} alt=""/>
            </div>
            <div className="bannerShape_three">
                <img src={bannerShape_three}alt=""/>
            </div>
            <div className="bannerShape_four">
                <img src={bannerShape_four} alt=""/>
            </div>
            <div className="bannerShape_five">
                <img src={bannerShape_five} alt=""/>
            </div>
            <div className="bannerShape_six">
                <img src={bannerShape_six} alt=""/>
            </div>
            <div className="bannerShape_seven">
                <img src={bannerShape_seven} alt=""/>
            </div>
            <div className="bannerCircle_two">
            </div>
            <div className="bannerCircle_three">
                <img src={bannerCircle_three} alt=""/>
            </div>

            <i className="fa-solid fa-xmark bannerCross_01"></i>
            <i className="fa-solid fa-xmark bannerCross_02"></i>
            <i className="fa-solid fa-xmark bannerCross_03"></i>
            <i className="fa-solid fa-xmark bannerCross_04"></i>
            <i className="fa-solid fa-xmark bannerCross_05"></i>

            <i className="fa-solid fa-circle bannerBall_01"></i>
            <i className="fa-solid fa-circle bannerBall_02"></i>
            <i className="fa-solid fa-circle bannerBall_03"></i>
            <i className="fa-solid fa-circle bannerBall_04"></i>
            <i className="fa-solid fa-circle bannerBall_05"></i>
            <i className="fa-solid fa-circle bannerBall_06"></i>

            <div className="bannerSide_content">
                <div className="language">
                    <p>ge.</p>
                    <p>fr.</p>
                    <p>en.</p>
                </div>
                <p>contact@innovate.com</p>
                <div className="scroll">
                    <p>scroll</p>
                    <picture>
                        <img src={bannerSide_shape} alt=""/>
                    </picture>
                </div>
            </div>
        </section>
  )
}

export default Banner
