import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  let post = '강남우동맛집';
  let [글제목, b] = useState('남자 코트 추천');

  return (
    <div className="App">
      <div className="black-nav">
        <h4 style={ {color : 'red', fontSize : '16px'}}>블로그임</h4>
      </div>
      <div className='list'>
        <h4> { 글제목 } </h4>
        <p>1월 15일 발행</p>
      </div>
    </div>
  );
}

export default App;
