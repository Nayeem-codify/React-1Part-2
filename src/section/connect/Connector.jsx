import React from 'react'
import "./connector.css"
import connect_img from "../../assets/images/connect_img.jpg"
import connect_shape from "../../assets/images/connect_shape.png"


const Connector = () => {
  return (
    <section id="connect">
            <div className="container">
                <div className="connect_heading">
                    <h3 className="sub_heading">digital experience</h3>
                    <h2 className="heading">connect people in digital life</h2>
                </div>
            </div>
            <div className="connect_wrapper">
                <div className="connect_img">
                    <div className="connectImg_box">
                        <img src={connect_img}alt=""/>
                    </div>
                </div>
                <div className="connect_content">
                    <h3>More than just an ad agency, we harness the tools of traditional and digital.</h3>
                    <p className="paragraph">With over 25 years of experience, we have crafted thousands of strategic
                        discovery process that enables us to peel back the layers which enable us to understand,
                        connect, represent and dominate your market.</p>
                    <a href="#" class="common_btn">more about us</a>
                    <div className="connect_shape">
                        <img src={connect_shape} alt=""/>
                    </div>
                </div>
            </div>
            <div className="bannerCircle_one">
            </div>
            <i className="fa-solid fa-xmark"></i>
        </section>
  )
}

export default Connector
