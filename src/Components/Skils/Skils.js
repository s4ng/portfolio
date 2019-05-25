import React from 'react';
import './Skils.css';
import Python from './logo/600px-Python-logo-notext.svg.png';
import react from './logo/react-1.svg';
import Javascript from './logo/900px-JavaScript-logo.png';
import Typescript from './logo/ts.png';
import Android from './logo/android.png';
import CPP from './logo/cpppp-490x490.png';
import css from './logo/css.png';
import github from './logo/github-logo.png';
import html from './logo/html-5.png';
import CS from './logo/C-Sharp-01.png';
import nodejs from './logo/icons8-nodejs-500.png';
import java from './logo/java.png';
import mysql from './logo/mysql.png';
import Redux from './logo/Redux.png';
import Linux from './logo/Tux.png';
import Window_logo from './logo/Windows-Logo.png';
import unity from './logo/unity.png';


const Skils = () => (


  <div className="Skill" id="s">
    <h1 className="Skill_Heeding"> Skils </h1>
    <div className="Skill_Content">
    <h2 className="Skill_Title"> Launage</h2>
    <span className="Skill_Content">
    <div className="SKill_box">
    <div className="Skill_image_container" style={{backgroundImage: `url(${CS})`}}><div className="Skill_label">Basic</div></div>
    <div className="Skill_image_container" style={{backgroundImage: `url(${CPP})`}}><div className="Skill_label">Basic</div></div>
    <div className="Skill_image_container" style={{backgroundImage: `url(${java})`}}><div className="Skill_label">Intermediate</div></div>
    <div className="Skill_image_container" style={{backgroundImage: `url(${Javascript})`}}><div className="Skill_label">Intermediate</div></div>
    <div className="Skill_image_container" style={{backgroundImage: `url(${Typescript})`}}><div className="Skill_label">Basic</div></div>
    <div className="Skill_image_container" style={{backgroundImage: `url(${Python})`}}><div className="Skill_label">Basic</div></div>
     </div>
    </span>
     <h2 className="Skill_Title"> Web Skils</h2>
    <span className="Skill_Content">
    <div className="Skill_image_container" style={{backgroundImage: `url(${html})`}}><div className="Skill_label">Intermediate</div></div>
    <div className="Skill_image_container" style={{backgroundImage: `url(${css})`}}><div className="Skill_label">Intermediate</div></div>
    <div className="Skill_image_container" style={{backgroundImage: `url(${Javascript})`}}><div className="Skill_label">Intermediate</div></div>
    <div className="Skill_image_container" style={{backgroundImage: `url(${Typescript})`}}><div className="Skill_label">Basic</div></div>
    
    </span>
    <h2 className="Skill_Title">FrameWork & Library</h2>
    <span className="Skill_Content">
    <div className="Skill_image_container" style={{backgroundImage: `url(${react})`}}><div className="Skill_label">Intermediate</div></div>
    <div className="Skill_image_container" style={{backgroundImage: `url(${nodejs})`}}><div className="Skill_label">basic</div></div>
    <div className="Skill_image_container" style={{backgroundImage: `url(${Android})`}}><div className="Skill_label">Basic</div></div>
    </span>

    <h2 className="Skill_Title">DataBase</h2>
    <span className="Skill_Content">
    <div className="Skill_image_container" style={{backgroundImage: `url(${mysql})`}}><div className="Skill_label">Intermediate</div></div>
    </span>
    
    
    <h2 className="Skill_Title">Operating System</h2>
    <span className="Skill_Content">
    <div className="Skill_image_container" style={{backgroundImage: `url(${Window_logo})`}}><div className="Skill_label">Intermediate</div></div>
    <div className="Skill_image_container" style={{backgroundImage: `url(${Linux})`}}><div className="Skill_label">Basic</div></div>
    </span>
    
    <h2 className="Skill_Title">Etc</h2>
    <span className="Skill_Content">
    <div className="Skill_image_container" style={{backgroundImage: `url(${github})`}}><div className="Skill_label">Intermediate</div></div>
    <div className="Skill_image_container" style={{backgroundImage: `url(${Redux})`}}><div className="Skill_label">Basic</div></div>
    <div className="Skill_image_container" style={{backgroundImage: `url(${unity})`}}><div className="Skill_label">Basic</div></div>
    </span>
    </div>
  </div>
);


export default Skils;