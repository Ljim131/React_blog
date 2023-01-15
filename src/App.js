/* eslint-disable */ //워닝 메시지 없애는 것

import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  let post = '강남우동맛집';
  let [글제목, 글제목변경] = useState(['남자 코트 추천','강남 우동 맛집','파이썬 독학']);
  let [좋아요, 좋아요변경] = useState(0);

   return (
    <div className="App">
      <div className="black-nav">
        <h4 style={ {color : 'red', fontSize : '16px'}}>React Blog</h4>
      </div>

      <button onClick={ () => {
          let copy = [...글제목];
          copy[0] = '여자 코트 추천';
          글제목변경(copy);
        }}>변해라얍</button>

      <div className='list'>
        <h4> { 글제목[0] } <span onClick={ () => { 좋아요변경(좋아요+1) } }>👍</span> {좋아요} </h4>
        <p>1월 15일 발행</p>
      </div>
      <div className='list'>
        <h4> { 글제목[1] } </h4>
        <p>1월 15일 발행</p>
      </div>
      <div className='list'>
        <h4> { 글제목[2] } </h4>
        <p>1월 15일 발행</p>
      </div>
    </div>
  );
}

export default App;
