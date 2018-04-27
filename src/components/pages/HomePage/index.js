// https://github.com/diegohaz/arc/wiki/Atomic-Design
import React from 'react'

const HomePage = () => {
  return (
<div className="wrapper">
  <div id="work" className="main-boxes">
    <h1>Work</h1>
  </div>
  <div id="life" className="main-boxes">
    <h1>Life</h1>
  </div>
  <div id="play" className="main-boxes">
    <h1>Play</h1>
  </div>
</div>

  )
}

export default HomePage
