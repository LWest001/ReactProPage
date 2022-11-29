import React from "react";
import './Hero.css'
import html5 from './assets/html5.svg'
import css3 from './assets/css3.svg'
import js from './assets/js.svg'
import vite from './assets/vite.svg'
import react from './assets/react.svg'
import jest from "./assets/jest.svg";
import git from "./assets/git.svg";
import github from "./assets/github.svg";
import mocha from "./assets/mocha.svg";
import npm from "./assets/npm.svg";

export const Hero = () => {
    const technologies = () => {
        const technologiesArray = [html5, css3, js, react, vite, jest, mocha, git, github, npm]
        return (
            technologiesArray.map(tech => {
                return <img src={tech} className={`logo`}></img>
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