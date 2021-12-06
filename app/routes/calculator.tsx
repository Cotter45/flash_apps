import type { LinksFunction } from "remix";
import { useState, useEffect } from 'react';

import calcStylesUrl from '~/styles/calculator.css';

export let links: LinksFunction = () => {
  return [
    { rel: "stylesheet", href: calcStylesUrl },
  ];
};



export default function Calculator() {

    const [value, setValue] = useState('');

    const handleClick = (e: any) => {
        const operators = ['+', '-', 'X', '/', '+/-', 'C', '%'];
        const numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];


        if (numbers.includes(e.target.innerText)) {
            setValue(value + e.target.innerText);
        } else {
            setValue(value + ' ' + e.target.innerText + ' ');
        }
        if (e.target.innerText === 'C') {
            setValue('');
        }
    }

    const calculate = () => {
        
    }

  return (
    <div className='main-container'>
        <h1 className='calc-header'>Calculator</h1>
        <div className='calc-container'>
            <div className='calc-shell'>
                <div className='calc-display'>
                    <div className='calc-display-text'>
                        <span>{value}</span>
                    </div>
                </div>
                <div className='calc-keypad'>
                    <div onClick={handleClick} className='calc-key top-row'>+/-</div>
                    <div onClick={handleClick} className='calc-key top-row'>C</div>
                    <div onClick={handleClick} className='calc-key top-row'>%</div>
                    <div onClick={handleClick} className='calc-key operator'>/</div>
                    <div onClick={handleClick} className='calc-key'>7</div>
                    <div onClick={handleClick} className='calc-key'>8</div>
                    <div onClick={handleClick} className='calc-key'>9</div>
                    <div onClick={handleClick} className='calc-key operator'>X</div>
                    <div onClick={handleClick} className='calc-key'>4</div>
                    <div onClick={handleClick} className='calc-key'>5</div>
                    <div onClick={handleClick} className='calc-key'>6</div>
                    <div onClick={handleClick} className='calc-key operator'>-</div>
                    <div onClick={handleClick} className='calc-key'>1</div>
                    <div onClick={handleClick} className='calc-key'>2</div>
                    <div onClick={handleClick} className='calc-key'>3</div>
                    <div onClick={handleClick} className='calc-key operator'>+</div>
                    <div onClick={handleClick} className='calc-key double'>0</div>
                    <div onClick={handleClick} className='calc-key space'></div>
                    <div onClick={handleClick} className='calc-key'>.</div>
                    <div onClick={calculate} className='calc-key operator'>=</div>
                </div>
            </div>
        </div>
    </div>
    );
}
