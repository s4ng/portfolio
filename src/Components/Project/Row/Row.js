import React from 'react';
import movie from './image/movieapp.png';
import todo from './image/todoapp.png';
import github from './image/github-logo.svg';
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
      <a href="https://github.com/s4ng/TodoList"> <img src={todo} alt="todo" className="image"></img></a>
      </div>
      <div className="Box_info">
      <h1 className="Box_title">To do List</h1>

      <h2 className="name">개발기간 :2019.05.19~2019.05.25</h2>
      <p className="Box_content">React를 이용하여 오늘 할 일 리스트 웹 어플리케이션을 만들어
            state의 조작과 컴포넌트간의 데이터 주고받기에 대하여 알아보았습니다.
      </p>
      <ul className="Box_ul">   
      <li  className="Box_li">#React</li>  
      </ul>
      <ul className="Box_ul">
      <li className="Box_li">
      <a href="https://s4ng.github.io/TodoList" alt="github"> <img src={github} alt="github" className="icon_image"/></a>
       </li>
      </ul>
            </div>
    </div>
    </div>
);


export default Row;