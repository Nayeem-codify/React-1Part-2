import React from 'react'
import "./project.css"
import project_shape from "../../assets/images/project_shape.png"

const Project = () => {
  return (
    <section id="project">
            <div className="container">
                <div classNamee="project_wrapper">
                    <div>
                        <h3 className="sub_heading">Lets talk</h3>
                        <h2 className="heading">Got a project?</h2>
                    </div>
                    <a href="#" className="common_btn">view all</a>
                </div>
                <article>
                    <p className="paragraph">As a leading digital platform in Paris, we look to engage with our clients
                        beyond the conventional design and development agency relationship, becoming a partner to the
                        people and companies we work with.</p>
                </article>
            </div>
            <div className="project_shape">
                <picture>
                    <img src={project_shape} alt=""/>
                </picture>
            </div>
        </section>
  )
}

export default Project
