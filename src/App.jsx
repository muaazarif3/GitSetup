import React from 'react'
import { useSelector } from 'react-redux'
import SubChild from './Components/SubChild';

function App() {
let Data = useSelector((c) => {
  return c.show.value
})

  return (
    <>
    <h2>Hello number : {Data}</h2>
    <SubChild />
    </>
  )
}

export default App