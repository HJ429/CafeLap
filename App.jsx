import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './main.css'

function App() {
  return (
    <>
     <header>
        <div class="cafelap">
            <h2 class="logo">CAGE LAP</h2>
            <a href="" class="LOGIN">LOGIN</a>
        </div>
    </header>
    <div class="container">
        <div class="cafe">
            <h3>카페정보</h3>
            <button onclick="">이모지 넣든 하기</button>
        </div>
        <div class="comm">
            <h3>커뮤니티</h3>
            <button class="btn" onclick="">이모지</button>
        </div>
    </div>
<footer>
    @CafeLap
</footer>
    </>
  )
}

export default App
