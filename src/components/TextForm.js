import React,{useState}from 'react'

export default function TextForm(props) {
    const handleUpClick= ()=> {
        console.log("Upper case was clicked " + text);
        let newText=text.toUpperCase();
        setText(newText)
    }
    const handleOnChange= (event)=> {
        console.log("on change ");
        setText(event.target.value )
    }
    const [text, setText] = useState("enter your text ");

  return (
    <div>
        <h1>{props.heading}</h1>
<div className="mb-3">
  <textarea className="form-control" value={text} onChange={handleOnChange} id="mybox" rows="20"></textarea>
</div>
<button className ="btn btn-primary" onClick={handleUpClick}>Convert to Uppercase</button>
    </div>
  ) 
}
