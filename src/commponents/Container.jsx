import React, { useState } from 'react';
import CalcResult from './CalcResult';


function Container() {
    const [input, setInput] = useState("");
    const [first, setFirst] = useState("");
    const [operator, setOperator] = useState("");

    const handleInput = (event) => {
        let char = event.target.name;
        if (char === '+' || char === '-' || char === '±' || char === '÷' || char === '×') {
            setFirst(input);
            setOperator(event.target.name);
            setInput('');
            console.log(first);
            return;
        }
        if (char === '.' && input.includes('.')) {
            return;
        }
        if (char === '=') {
            setInput(CalcResult(first, operator, input));
            setFirst("");
            setOperator("");
        }
        else {
            setInput(prev => prev + event.target.name);
        }

        //console.log(input);
    }

    const deleteAll = () => {
        setInput("");
    }
    const deleteOne = () => {
        setInput(prev => prev.substring(0, prev.length - 1));
    }

    return (
        <div id='container'>
            <input type="text" value={input} placeholder='0' disabled></input>
            <div>
                <table>
                    <tbody>
                        <tr>
                            <td><button onClick={deleteAll}>AC</button></td>
                            <td><button name='±' onClick={handleInput}>±</button></td>
                            <td><button onClick={deleteOne}>C</button></td>
                            <td><button name='÷' onClick={handleInput}>÷</button></td>
                        </tr>
                        <tr>
                            <td><button name='7' onClick={handleInput}>7</button></td>
                            <td><button name='8' onClick={handleInput}>8</button></td>
                            <td><button name='9' onClick={handleInput}>9</button></td>
                            <td><button name='×' onClick={handleInput}>×</button></td>
                        </tr>
                        <tr>
                            <td><button name='4' onClick={handleInput}>4</button></td>
                            <td><button name='5' onClick={handleInput}>5</button></td>
                            <td><button name='6' onClick={handleInput}>6</button></td>
                            <td><button name='-' onClick={handleInput}>-</button></td>
                        </tr>
                        <tr>
                            <td><button name='1' onClick={handleInput}>1</button></td>
                            <td><button name='2' onClick={handleInput}>2</button></td>
                            <td><button name='3' onClick={handleInput}>3</button></td>
                            <td><button name='+' onClick={handleInput}>+</button></td>
                        </tr>
                        <tr>
                            <td><button name='0' onClick={handleInput}>0</button></td>
                            <td><button name='.' onClick={handleInput}>.</button></td>
                            <td colSpan="2"><button name='=' onClick={handleInput}>=</button></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Container
