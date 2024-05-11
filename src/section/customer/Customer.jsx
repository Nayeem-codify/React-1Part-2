import React from 'react'
import "./customer.css"
import customer_one from "../../assets/images/customer_one.jpg"
import customer_two from "../../assets/images/customer_two.jpg"
import customer_three from "../../assets/images/customer_three.jpg"
import customer_four from "../../assets/images/customer_four.jpg"
import customer_img from "../../assets/images/customer_img.jpg"

const Customer = () => {
    
  return (
    
    <section id="customer">
            <div className="container">
                <div className="customer_wrapper">
                    <div className="customer_content">
                        <div className="customer_heading">
                            <h2 className="heading">Our customer say</h2>
                        </div>
                        <div className="customer_main">
                            <div className="customer_item">
                                <picture>
                                    <img src={customer_one} alt="not found"/>
                                </picture>
                            </div>
                            <div className="customer_item">
                                <picture>
                                    <img src={customer_two} alt="not found"/>
                                </picture>
                            </div>
                            <div className="customer_item">
                                <picture>
                                    <img src={customer_three} alt="not found"/>
                                </picture>
                            </div>
                            <div className="customer_item">
                                <picture>
                                    <img src={customer_four} alt="not found"/>
                                </picture>
                            </div>
                        </div>
                        <article>
                            <p class="paragraph">As a leading digital platform in Paris, we look to engage with our
                                clients
                                beyond the conventional design and development agency relationship, becoming a partner
                                to
                                the people and companies we work with.</p>
                        </article>
                        <div className="customer_name">
                               <h4>Nayeem</h4>
                        </div>
                    </div>
                    <div className="customer_img">
                        <picture>
                            <img src={customer_img} alt="Not found"/>
                        </picture>
                    </div>
                </div>
            </div>

            <i className="fa-solid fa-circle customerShape_01"></i>
            <i className="fa-solid fa-xmark customerShape_02"></i>
            <i className="fa-solid fa-xmark customerShape_03"></i>

        </section>
  )
}

export default Customer
