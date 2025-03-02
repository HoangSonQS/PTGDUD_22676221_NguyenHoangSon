import { useState } from 'react';

export default function Lab01() {
    const [text, setText] = useState('');
    const [displayText, setDisplayText] = useState('');
    function handleClick() {
        setDisplayText(text);
    }
    function handleChange(e) {
        setText(e.target.value);
    }
    

    return (
        <div className='container'>
            <input type="text" value={text} onChange={handleChange} placeholder='Nhap ND'/>
            <button onClick={handleClick}>Click</button>
            <p>{displayText}</p>
        </div>
        
    );
}