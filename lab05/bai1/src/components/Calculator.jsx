import React, { useReducer, useState } from 'react';
import './Calculator.css';

const reducer = (state, action) => {
    switch (action.type) {
        case 'ADD': return { result: action.payload.num1 + action.payload.num2 };
        case 'SUBTRACT': return { result: action.payload.num1 - action.payload.num2 };
        default: return state;
    }
};

const Calculator = () => {
    const [state, dispatch] = useReducer(reducer, {result: 0});
    const [input1, setInput1] = useState(0);
    const [input2, setInput2] = useState(0);
    return (
    <div className='content'>
        <h1>Calculator</h1>
        <div>
            <input type="number" onChange={(e) => setInput1(Number(e.target.value))}/>
            <input type="number" onChange={(e) => setInput2(Number(e.target.value))}/>
        </div>
        <div>
            <button onClick={() => dispatch({ type: 'ADD', payload: { num1: input1, num2: input2 } })}>+</button>
            <button onClick={() => dispatch({ type: 'SUBTRACT', payload: { num1: input1, num2: input2 } })}>-</button>
        </div>
        <input type="number" value={state.result} readOnly/></div>);
};

export default Calculator;