import React from 'react';
import movie from './image/movieapp.png';
import todo from './image/todoapp.png';
import ubd from './image/ubd계산기.png';
import github from './image/github-logo.svg';
import lotto from './image/lottocap.png';
import lolchess from './image/lolchess.png';
import  './Row.css';

const Row = () => (
  <div className="Row">
    <div className="Box">
      <div className="Box_image">
      <a href="https://s4ng.github.io/React_movie_app/"> <img src={movie} alt="movie" className="image"></img></a>
      </div>
      <div className="Box_info">
      <h1 className="Box_title">React Movie app</h1>
     
      <h2 className="name">개발기간 :2019.05.01~ 2019.05.22</h2>
      <p className="Box_content">React + Ajax를 이용하여
         영화 공유 API의 정보를 불러와 가장 인기있게 다운되어 지는 영화들을 보여줍니다.
      </p>
      <ul className="Box_ul">   
      <li  className="Box_li">#Javascript</li>  
      <li  className="Box_li">#React</li>  
       <li className="Box_li">#Ajax</li>  
      </ul>
      <ul className="Box_ul">
      <li className="Box_li">
      <a href="https://github.com/s4ng/React_movie_app" alt="github"> <img src={github} alt="github" className="icon_image"/></a>
       </li>
      </ul>
            </div>
    </div>
    
     <div className="Box">
      <div className="Box_image">
      <a href="https://s4ng.github.io/TodoList"> <img src={todo} alt="todo" className="image"></img></a>
      </div>
      <div className="Box_info">
      <h1 className="Box_title">To do List</h1>

      <h2 className="name">개발기간 :2019.05.19~2019.05.25</h2>
      <p className="Box_content">React를 이용하여 오늘 할 일 리스트 웹 어플리케이션을 만들어
            state의 조작과 컴포넌트간의 데이터 주고받기에 대하여 알아보았습니다.
      </p>
      <ul className="Box_ul">   
      <li  className="Box_li">#Javascript</li> 
      <li  className="Box_li">#React</li> 
      </ul>
      <ul className="Box_ul">
      <li className="Box_li">
      <a href="https://github.com/s4ng/TodoList" alt="github"> <img src={github} alt="github" className="icon_image"/></a>
       </li>
      </ul>
            </div>
    </div>

    <div className="Box">
      <div className="Box_image">
      <a href="https://s4ng.github.io/UBD_Calculator/"> <img src={ubd} alt="ubd" className="image"></img></a>
      </div>
      <div className="Box_info">
      <h1 className="Box_title">UBD Calculator</h1>
     
      <h2 className="name">개발기간 :2019.05.01~ 2019.06.01</h2>
      <p className="Box_content">
            숫자를 입력하면 영화 "자전차왕 엄복동"의 관객수 지수인 UBD로 변환하여 줍니다.
      </p>
      <ul className="Box_ul">   
      <li  className="Box_li">#Javascript</li>  
       <li className="Box_li">#React</li>  
      </ul>
      <ul className="Box_ul">
      <li className="Box_li">
      <a href="https://github.com/s4ng/UBD_Calculator" alt="github"> <img src={github} alt="github" className="icon_image"/></a>
       </li>
      </ul>
            </div>
    </div>
    <div className="Box">
      <div className="Box_image">
      <a href="https://s4ng.github.io/lotto/"> <img src={lotto} alt="lotto" className="image"></img></a>
      </div>
      <div className="Box_info">
      <h1 className="Box_title">로또번호 생성기</h1>
     
      <h2 className="name">개발기간 :2019.07.23~ 2019.07.62</h2>
      <p className="Box_content">React hooks를 이용하여 함수형 컴포넌트만을 이용한 로또번호 생성기 앱
      </p>
      <ul className="Box_ul">   
      <li  className="Box_li">#Javascript</li>  
      <li  className="Box_li">#React</li>  
       <li className="Box_li">#hooks</li>  
      </ul>
      <ul className="Box_ul">
      <li className="Box_li">
      <a href="https://github.com/s4ng/lotto" alt="github"> <img src={github} alt="github" className="icon_image"/></a>
       </li>
      </ul>
            </div>
    </div>
    <div className="Box">
      <div className="Box_image">
      <a href="https://s4ng.github.io/lolchess/"> <img src={lolchess} alt="lolchess" className="image"></img></a>
      </div>
      <div className="Box_info">
      <h1 className="Box_title">전략적 팀 전투 전적검색</h1>
     
      <h2 className="name">개발기간 :2019.08.17~ 2019.08.30</h2>
      <p className="Box_content">Riot api를 이용한 전적검색 및 아이템 조합표 앱
      </p>
      <ul className="Box_ul">   
      <li  className="Box_li">#Javascript</li>  
      <li  className="Box_li">#React</li>  
       <li className="Box_li">#nodejs</li>
       <li className="Box_li">#Riot-API</li>  
      </ul>
      <ul className="Box_ul">
      <li className="Box_li">
      <a href="https://github.com/s4ng/lolchess/" alt="github"> <img src={github} alt="github" className="icon_image"/></a>
       </li>
      </ul>
            </div>
    </div>

    </div>
);


export default Row;