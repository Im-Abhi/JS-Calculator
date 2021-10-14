import React, { useState, useEffect } from 'react';
import Display from './Display';

const endsWithOperator = /[x+‑/]$/;

export default function Buttons(){
    const [ input, setInput ] = useState(0);
  const [ expression, setExpression ] = useState('');
  const [ operand, setOperand ] = useState('');
  useEffect(()=>{
    if(/\D\D\D/g.test(expression)){
        setExpression(expression.replace(/\D\D\D/g,operand));
    }
  },[expression,operand,input]);
  function handleclick(e){
    let cur = e.target.value;
    // Evaluation Case
    if(cur === '='){
      cur = eval(expression);
      setInput(cur);
      setExpression(cur);
      setOperand('=');
    // Clear Case
    }else if(cur === 'AC'){
      setOperand('');
      setInput(0);
      setExpression("");
    }
    else{
      if((operand === '=') && (/\d+/.test(cur))){
        setInput(cur);
        setExpression(cur);
        return;
      }
      else if(/[*+-/=]/.test(cur)){
        setOperand(cur);     
      }
      // Check for same operators
      if(operand === cur){
        return;
      }
      // Multi digit number Case
      else if(!endsWithOperator.test(expression)){
        if(input === 0){
          if(cur!=='0')
            setInput(''+cur);
        }else{
          setInput(input + cur);          
        }
      }else{
        setInput(cur);        
      }
      setExpression( expression + cur );
    }
    }
    return (
        <div className="grid">
            <Display input={input}/>
            <button className="clear" onClick={handleclick} value="AC">AC</button>
            <button className="divide" onClick={handleclick} value="/">/</button>
            <button className="multiply" onClick={handleclick} value="*">X</button>
            <button className="seven" onClick={handleclick} value="7">7</button>
            <button className="eight" onClick={handleclick} value="8">8</button>
            <button className="nine" onClick={handleclick} value="9">9</button>
            <button className="add" onClick={handleclick} value="+">+</button>
            <button className="four"onClick={handleclick}  value="4">4</button>
            <button className="five" onClick={handleclick} value="5">5</button>
            <button className="six" onClick={handleclick} value="6">6</button>
            <button className="subtract" onClick={handleclick} value="-">-</button>
            <button className="one" onClick={handleclick} value="1">1</button>
            <button className="two" onClick={handleclick} value="2">2</button>
            <button className="three" onClick={handleclick} value="3">3</button>
            <button className="equals" onClick={handleclick} value="=">=</button>
            <button className="zero" onClick={handleclick} value="0">0</button>
            <button className="decimal" onClick={handleclick} value=".">.</button>
        </div>
    )
}