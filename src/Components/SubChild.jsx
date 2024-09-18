import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Increment, userIncrement } from '../feature/useSlice'
function SubChild() {

  let dispatch = useDispatch()

  let HandleOnClick = () =>{dispatch(Increment())}  
  
    let data = useSelector((c) =>{
      return c.show.value
    })

  let handleOnSubmit = (e) => {
    e.preventDefault();
    console.log(typeof(e.target[0].value));
    
    dispatch(userIncrement(Number(e.target[0].value)))
  }

  return (
 <>
  <h2>hello new Number : {data}</h2>
    <button onClick={HandleOnClick}>Click</button>
    <div className="liitleForm">
      <form onSubmit={handleOnSubmit}>
        <input type="number" />
        <button type='submit'>Submit</button>
      </form>
    </div>
 </>
  )
}

export default SubChild