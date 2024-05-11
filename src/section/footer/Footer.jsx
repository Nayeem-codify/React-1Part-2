import React from 'react'
import "./footer.css"
import logo from "../../assets/images/logo.png"

const Footer = () => {
  return (
    <footer>
        <div class="container">
            <div class="footer_wrapper">
                <div class="footer_content">
                    <picture>
                        <img src={logo} alt=""/>
                    </picture>
                    <article>
                        <p class="paragraph">Install any demo or template with a single click. You can mix and match all
                            the demos & templates. Every demo can be turned into one or multi-page.</p>
                    </article>
                </div>
                <div class="footerList_wrapper">
                    <div class="footer_features">
                        <h5 class="list_heading">Features</h5>
                        <ul class="footerList_item">
                            <li><a href="#">home</a></li>
                            <li><a href="#">about</a></li>
                            <li><a href="#">Benifit</a></li>
                            <li><a href="#">Pricing</a></li>
                            <li><a href="#">Blog</a></li>
                        </ul>
                    </div>
                    <div class="footer_products">
                        <h5 class="list_heading">Features</h5>
                        <ul class="footerList_item">
                            <li><a href="#">Task Management</a></li>
                            <li><a href="#">Company growth</a></li>
                            <li><a href="#">Time tracking</a></li>
                        </ul>
                    </div>
                    <div class="footer_support">
                        <h5 class="list_heading">Features</h5>
                        <ul class="footerList_item">
                            <li><a href="#">Customer service</a></li>
                            <li><a href="#">Accessibility</a></li>
                            <li><a href="#">Contact us</a></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="copyright_wrapper">
                <div class="rights">
                    <p class="paragraph">@20201 Innovate.All rights reserved.</p>
                </div>
                <div class="policy">
                    <p class="paragraph">Privacy policy</p>
                    <p class="paragraph">Terms & condition</p>
                </div>
            </div>
        </div>
    </footer>

    
  )
}

export default Footer
