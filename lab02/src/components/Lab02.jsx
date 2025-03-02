import { useState } from 'react';

export default function Lab02() {
    const [a, setA] = useState('0');
    const [b, setB] = useState('0');
    const [result, setResult] = useState('0');
    const [operator, setOperator] = useState('');

    function handleClick() {
        const numA = parseFloat(a);
        const numB = parseFloat(b);

        if (operator === '+') {
            setResult(numA + numB);
        } else if (operator === '-') {
            setResult(numA - numB);
        } else if (operator === '*') {
            setResult(numA * numB);
        } else if (operator === '/') {
            setResult(numA / numB);
        }
    }

    function handleChange(e) {
        setOperator(e.target.value);
    }

    function handleChangeA(e) {
        setA(e.target.value);
    }

    function handleChangeB(e) {
        setB(e.target.value);
    }

    return (
        <div className="calculator">
            <input onChange={handleChangeA} placeholder="Input A" type="text" value={a} />
            <input onChange={handleChangeB} placeholder="Input B" type="text" value={b} />
            
            <div className="operators">
                <label>
                    <input onChange={handleChange} type="radio" value="+" name="operator" />
                    <span>+</span>
                </label>
                <label>
                    <input onChange={handleChange} type="radio" value="-" name="operator" />
                    <span>-</span>
                </label>
                <label>
                    <input onChange={handleChange} type="radio" value="*" name="operator" />
                    <span>*</span>
                </label>
                <label>
                    <input onChange={handleChange} type="radio" value="/" name="operator" />
                    <span>/</span>
                </label>
            </div>

            <button onClick={handleClick}>Calculate</button>
            <div className="result">Result: {result}</div>
        </div>
    );
}