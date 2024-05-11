import React from 'react'
import "./service.css"
import serviceIcon_one from "../../assets/images/serviceIcon_one.png"
import serviceIcon_two from "../../assets/images/serviceIcon_two.png"
import serviceIcon_three from "../../assets/images/serviceIcon_three.png"

const Service = () => {
  return (
    <section id="service">
            <div class="container">
                <div class="service_wrapper">
                    <div class="service_item">
                        <picture>
                            <img src={serviceIcon_one} alt=""/>
                        </picture>
                        <h3 class="title">Grow your business</h3>
                        <p class="paragraph">Nam libero tempore, cum soluta nobis est eligendi optio cumque </p>
                    </div>
                    <div class="service_item">
                        <picture>
                            <img src={serviceIcon_two} alt=""/>
                        </picture>
                        <h3 class="title">Grow your business</h3>
                        <p class="paragraph">Nam libero tempore, cum soluta nobis est eligendi optio cumque </p>
                    </div>
                    <div class="service_item">
                        <picture>
                            <img src={serviceIcon_three}alt=""/>
                        </picture>
                        <h3 class="title">Grow your business</h3>
                        <p class="paragraph">Nam libero tempore, cum soluta nobis est eligendi optio cumque </p>
                    </div>
                </div>
            </div>
        </section>
  )
}

export default Service
