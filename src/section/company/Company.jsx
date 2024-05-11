import React from 'react'
import "./company.css"
import company_one from "../../assets/images/company_one.png"
import company_two from "../../assets/images/company_two.png"
import company_three from "../../assets/images/company_three.png"
import company_four from "../../assets/images/company_four.png"
import company_five from "../../assets/images/company_five.png"
import company_six from "../../assets/images/company_six.png"


const Company = () => {
  return (
    
 <section id="company">
            <div class="container">
                <div class="company_heading">
                    <h2 class="heading">Trusted by top global companies And orginizations</h2>
                </div>
                <div class="company_wrapper">
                    <div class="company_item">
                        <picture>
                            <img src={company_one} alt=""/>
                        </picture>
                    </div>
                    <div class="company_item">
                        <picture>
                            <img src={company_two} alt=""/>
                        </picture>
                    </div>
                    <div class="company_item">
                        <picture>
                            <img src={company_three} alt=""/>
                        </picture>
                    </div>
                    <div class="company_item">
                        <picture>
                            <img src={company_four} alt=""/>
                        </picture>
                    </div>
                    <div class="company_item">
                        <picture>
                            <img src={company_five} alt=""/>
                        </picture>
                    </div>
                    <div class="company_item">
                        <picture>
                            <img src={company_six}alt=""/>
                        </picture>
                    </div>
                </div>
            </div>
        </section>
  )
}

export default Company
