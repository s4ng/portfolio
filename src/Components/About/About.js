import React, { Component } from 'react';
import  './About.css';

class About extends Component {

  render() {
    return (
   
      <div className="about_me" id="a" >
   <div className="about_me_title">
       <h1 className="hedding">About Me</h1>
       
   </div>
   <div className="about_me_content">
   <h1>계속 성장하는 개발자</h1>
   <section className="about_me_section">
      <p>초등학교 저학년 부터 컴퓨터 프로그래머가 되는것을 꿈으로 생각하였습니다. 
        아버지를 졸라 컴퓨터에 COBOL을 설치하였고, 당연히 아무것도 몰랐지만 프로그래머가 된 
        기분에 빠져 며칠을 지냈던 기억이 납니다. 그 이후 대학교 1학년 시절에 Unity로 첫 모바일 게임을
        만들어 보았으며 현재는 Javascript를 주력으로 공부하고 있습니다.
           </p>

          <p> 훌륭한 소프트웨어 개발자가 되기 위해서는 꾸준한 공부가 가장 중요하다고 생각합니다.
            끊임없이 새로운 기술이 등장하는 시대에서, 저는 배움과 공부를 즐기는 개발자가 되고싶습니다.
           </p>
        </section>
   </div>
   </div>
 
    );
  }
}


export default About;