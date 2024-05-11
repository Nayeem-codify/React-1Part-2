import React from 'react'
import "./works.css"
import worksImg_one from "../../assets/images/worksImg_one.jpg"
import worksImg_two from "../../assets/images/worksImg_two.jpg"
import worksImg_three from "../../assets/images/worksImg_three.jpg"
import worksImg_four from "../../assets/images/worksImg_four.jpg"
import works_shape from "../../assets/images/works_shape.png"

const Works = () => {
  return (
   <section id="works">
            <div className="container">
                <div className="works_heading">
                    <div>
                        <h3 className="sub_heading">digital experience</h3>
                        <h2 className="heading">The hundred of completed works still counting</h2>
                    </div>
                    <a href="#" className="common_btn">view all</a>
                </div>
                <div className="works_wrapper">
                    <div className="works_item">
                        <div className="works_img">
                            <div className="worksImg_box">
                                <picture>
                                    <img src={worksImg_one} alt=""/>
                                </picture>
                            </div>
                        </div>
                        <div className="works_content">
                            <h3 className="title">mobile app</h3>
                            <a href="" className="paragraph">read more</a>
                        </div>
                    </div>
                    <div className="works_item">
                        <div className="works_img">
                            <div className="worksImg_box">
                                <picture>
                                    <img src={worksImg_two} alt=""/>
                                </picture>
                            </div>
                        </div>
                        <div className="works_content">
                            <h3 className="title">eCommerce Solution</h3>
                            <a href="" className="paragraph">read more</a>
                        </div>
                    </div>
                    <div className="works_item">
                        <div className="works_img">
                            <div className="worksImg_box">
                                <picture>
                                    <img src={worksImg_three} alt=""/>
                                </picture>
                            </div>
                        </div>
                        <div className="works_content">
                            <h3 className="title">eCommerce Solution</h3>
                            <a href="" className="paragraph">read more</a>
                        </div>
                    </div>
                    <div className="works_item">
                        <div className="works_img">
                            <div className="worksImg_box">
                                <picture>
                                    <img src={worksImg_four} alt=""/>
                                </picture>
                            </div>
                        </div>
                        <div className="works_content">
                            <h3 className="title">mobile app</h3>
                            <a href="" className="paragraph">read more</a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="works_shape">
                <picture>
                    <img src={works_shape} alt=""/>
                </picture>
            </div>
            <i className="fa-solid fa-xmark"></i>
        </section>
  )
}

export default Works
