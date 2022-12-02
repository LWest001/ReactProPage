import React from "react";
import './Hero.css'
import HTML from './assets/HTML.svg'
import CSS from './assets/CSS.svg'
import JavaScript from './assets/JavaScript.svg'
import Vite from './assets/Vite.svg'
import Reactjs from './assets/Reactjs.svg'
import Jest from "./assets/Jest.svg";
import Git from "./assets/Git.svg";
import GitHub from "./assets/GitHub.svg";
import Mocha from "./assets/Mocha.svg";
import npm from "./assets/npm.svg";

export const Hero = () => {
    const handleOnMouseOver = e => {
        const className = e.target.className
        document.querySelector(`p.logo.${className}`).style.visibility="visible"
    }
    const handleOnMouseLeave = e => {
        const className = e.target.className
        document.querySelector(`p.logo.${className}`).style.visibility="hidden"
    }
    const technologies = () => {
        const technologiesArray = [HTML, CSS, JavaScript, Reactjs, Vite, Jest, Mocha, Git, GitHub, npm]
        const regex = /(?<=assets\/)\w*/
        return (
            technologiesArray.map(tech => {
                const techName = tech.match(regex)[0]
                return (
                <div className={`logoContainer ${techName}`} key={techName}>
                    <img src={tech} 
                    onMouseOver={handleOnMouseOver} 
                    onMouseLeave={handleOnMouseLeave} 
                    className={`${techName}`} 
                    key={techName} 
                    alt={`${techName} logo`}/>
                    <p className={`logo ${techName}`} style={{visibility: 'hidden'}} >{techName}</p>
                </div>
                )
            })
        )
    }
    return (
        <div className="hero">
            <div className="technologies">
                {technologies()}
                
            </div>
        </div>
    )
}