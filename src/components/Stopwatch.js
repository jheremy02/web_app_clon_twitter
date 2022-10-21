import { useEffect ,useReducer ,useRef } from "react";


const initialState = {
    isRunning: false,
    time: 0
  };



function reducer(state, action) {
    switch (action.type) {
      case 'start':
        return { ...state, isRunning: true };
      case 'stop':
        return { ...state, isRunning: false };
      case 'reset':
        return { isRunning: false, time: 0 };
      case 'tick':
        return { ...state, time: state.time + 1 };
      default:
        throw new Error();
    }
  }

const Stopwatch = ()=>{

    const [state,dispatch]=useReducer(reducer,initialState)
    const idRef = useRef(0);
    
    useEffect(()=>{
        if (!state.isRunning) {
            return;
        }

        idRef.current=setInterval(()=>dispatch({type:'tick'}))

        return ()=>{
            clearInterval(idRef.current);
            idRef.current=0;
        }

    },[state.isRunning])

    return (
        <div className="flex gap-4">
          {state.time}s
          <button className="w-20 h-10 rounded-sm bg-emerald-500" onClick={() => dispatch({ type: 'start' })}>
            Start
          </button>
          <button className="w-20 h-10 rounded-sm bg-red-600" onClick={() => dispatch({ type: 'stop' })}>
            Stop
          </button>
          <button className="w-20 h-10 rounded-sm bg-amber-500" onClick={() => dispatch({ type: 'reset' })}>
            Reset
          </button>
        </div>
      );



}

export default Stopwatch