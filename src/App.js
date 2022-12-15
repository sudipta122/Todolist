import React from 'react'
import Input from './component/Input'
import "./style/Box.css"
import "./style/Container.css"

const App = () => {
  return (
    // <div>App</div>
    <>
      <div className="box">

        <Input heading={<h1>To do List</h1>} />
      </div>
    </>
  )
}

export default App