import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './main.css'

function App() {
  return (
    <>
     <header>
        <div className="cafelap">
            <h2 className="logo">CAGE LAP</h2>
            <a href="" className="LOGIN">LOGIN</a>
        </div>
    </header>
    <div className="container">
        <div className="cafe">
            <h3>카페정보</h3>
            <button onClick={""}>이모지 넣든 하기</button>
        </div>
        <div className="comm">
            <h3>커뮤니티</h3>
            <button className="btn" onClick={""}>이모지</button>
        </div>
    </div>
<footer>
    @CafeLap
</footer>
    </>
  )
}

export default App

