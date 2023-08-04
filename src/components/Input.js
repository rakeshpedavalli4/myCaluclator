import React, { useState } from 'react'
import './Input.css';

function Input(){

    const[Result, setResult] = useState("");
    const[Count,setCount] = useState(0);
    const[Oper,setOper] = useState("+");
    const[input1, setinput1] = useState("");
    const[input2, setinput2] = useState("");

    const handlenum1change = (event)=>{
        setinput1(event.target.value);
    };
    const handlenum2change =(event) =>{
        setinput2(event.target.value);
    };
    const handleAdd =()=>{
        const sum = parseFloat(input1)+parseFloat(input2);
        setResult(sum);
        setCount(Count+1);
    };
    const handlesub =()=>{
        const sub = parseFloat(input1) - parseFloat(input2);
        setResult(sub);
        setCount(Count+1);
    };
    const handlemul = ()=>{
        const mul = parseFloat(input1) * parseFloat(input2);
        setResult(mul);
        setCount(Count+1);
    };
    const handlediv =()=>{
        const div = parseFloat(input1) / parseFloat(input2);
        setResult(div);
        setCount(Count+1);
    };
    const handleChan =(change)=>{
        setOper(change);
    };
    const handlereset =()=>{
        setResult('');
        setOper('+');
        setinput1("");
        setinput2("");
    };
    return (
        <div className='input_1'>
            <div className='count'>
                <h2>Total operations :{Count} </h2>
            </div>
            <div className='First_input'>
            <input type="text" value={input1} onChange={handlenum1change} placeholder='First input'></input>
            </div>
            <div classname="Change_oper">
                <h1>{Oper}</h1>
            </div>
            <div className='Second_input'>
            <input type="text" value= {input2} onChange={handlenum2change} placeholder='Secondinput'></input>
            </div>
            <div className="operator">
                <button onClick={() =>{handleAdd(); handleChan("+");}} >+</button>
                <button onClick={() =>{handlesub(); handleChan("-");}}>-</button>
                <button onClick={() =>{handlemul(); handleChan("*");}}>*</button>
                <button onClick={() =>{handlediv(); handleChan("/");}}>/</button>
            </div>
            <div className='reset'>
                <button onClick={handlereset}>Reset</button>
                <h1>Result: {Result}</h1>
            </div>
        </div>
        
    );
}



export default Input;