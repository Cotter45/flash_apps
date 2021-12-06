import type { LinksFunction } from "remix";
import { useState } from 'react';

import calcStylesUrl from '~/styles/calculator.css';

export let links: LinksFunction = () => {
  return [
    { rel: "stylesheet", href: calcStylesUrl },
  ];
};


export default function Calculator() {
    
    const operators = ['+', '-', 'X', '/', '+/-', 'C', '%'];
    const numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

    const [value, setValue] = useState('');

    const handleClick = (e: any) => {

        if (numbers.includes(e.target.innerText)) {
            setValue(value + parseInt(e.target.innerText, 10));
        } else if (e.target.innerText === '+/-') {
            let vals = value.split(' ');
            let val: any = vals.pop();
            if (val) {
                val = parseInt(val, 10) * -1;
                vals.push(val);
                setValue(vals.join(' '));
            }
        } else {
            setValue(value + ' ' + e.target.innerText + ' ');
        }
        if (e.target.innerText === 'C') {
            setValue('');
        }
    }

    const calculate = () => {
        let calc = value.split(' ');
        let result = 0;
        let temp = 0;
        let operator = '';

        let multiples = calc.indexOf('X') > -1 ? calc.splice(calc.indexOf('X') - 1, 3): [];
        let divisors = calc.indexOf('/') > -1 ? calc.splice(calc.indexOf('/') - 1, 3): [];
        let mods = calc.indexOf('%') > -1 ? calc.splice(calc.indexOf('%') - 1, 3): [];
        
        if (multiples.length > 0) {
            result += parseInt(multiples[0], 10) * parseInt(multiples[2], 10);
        }
        if (divisors.length > 0) {
            result += parseInt(divisors[0], 10) / parseInt(divisors[2], 10);
        }
        if (mods.length > 0) {
            result += parseInt(mods[0], 10) % parseInt(mods[2], 10);
        }

        for (let i = 0; i < calc.length; i++) {
            
            if (operators.includes(calc[i])) {
                operator = calc[i];
                continue;
            } else {
                temp = parseInt(calc[i], 10);
            }

            if (operator === '+') {
                result = result + temp;
            } else if (operator === '-') {
                result = result - temp;
            } else if (operator === '') {
                result += temp;
            }
        }

        setValue(`${result}`);
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
