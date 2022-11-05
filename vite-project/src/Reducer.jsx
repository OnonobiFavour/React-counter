import React, { useReducer} from 'react';
import { useNavigate} from 'react-router'


const setValue = (state, action) =>{
    switch(action.type){
      case "INCREMENT":
        return{value: state.value + 1}
      case "DECREMENT":
        return{value: state.value - 1}
      case "Reset":
        return {value: 0}
      default:
        return state;
    }
  }
  
  
  const Reducer = () => {
      const Navigate = useNavigate();
      const handleclick = () =>{
        Navigate('/')
      }
      
    const [state, dispatch] = useReducer(setValue, {value: 0});

    return (
        <section className="reducer">

            <div className='App'>
              <h1 className='H1'>{state.value}</h1>

              <div className="btn-wrapper">

              {/* implementing increment */}
              <button className="btn" onClick={() =>{
        
                dispatch({ type: "INCREMENT"});
        
              }}>+1</button>
        
        
              <button className="btn" onClick={()=>{
        
                dispatch({type: "Reset"})
        
              }}>Reset</button>
        
        
              {/* implementing decrement */}
              <button className="btn" onClick={()=>{
        
                dispatch({type: "DECREMENT"})
        
              }}>-1</button>
              </div>
        
      
              <div className="exit">
              <button className='btn-exit'onClick={handleclick}>&larr; Exit</button>
      
              </div>
            </div>
        </section>
  
      
    )
}

export default Reducer