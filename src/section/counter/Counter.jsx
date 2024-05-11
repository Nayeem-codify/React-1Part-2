import React from 'react'
import "./counter.css"
import counter_shape from "../../assets/images/counter_shape.png"

function Counter() {
  return (
    <section id="counter">
            <div className="container">
                <div className="counter_wrapper">
                    <div className="counter_main">
                        <div className="counter_item">
                            <h3>19<span>+</span> </h3>
                            <p className="paragraph">total top service</p>
                        </div>
                        <div className="counter_item">
                            <h3>27<span>+</span> </h3>
                            <p className="paragraph">total top service</p>
                        </div>
                        <div className="counter_item">
                            <h3>98<span>%</span> </h3>
                            <p className="paragraph">total top service</p>
                        </div>
                        <div className="counter_item">
                            <h3>1,458<span></span> </h3>
                            <p className="paragraph">total top service</p>
                        </div>
                    </div>
                    <div className="counter_content">
                        <h2 className="heading">The hundred of completed works still counting</h2>
                        <p className="paragraph">Through strategy, design, and planning we build brand identities that
                            connect with your Nesi. We then fine-tune a marketing plan that allows us to laser focus and
                            target your audience through the right channels.</p>
                        <a href="#" className="common_btn">more about us</a>
                    </div>
                </div>
            </div>
            <div className="counter_shape">
                <picture>
                    <img src={counter_shape} alt=""/>
                </picture>
            </div>
            <div className="counter_circle"></div>
            <i className="fa-solid fa-circle worksBAll_01"></i>
            <i className="fa-solid fa-circle worksBAll_02"></i>
            <i className="fa-solid fa-circle worksBAll_03"></i>
            <i className="fa-solid fa-xmark cross"></i>
        </section>
  )
}

export default Counter
