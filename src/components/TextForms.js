import React, { useState } from 'react';

export default function TextForms(props) {
    const handleUpClick = () => {
        // console.log("UpperCase was Clicked");
        let newText = text.toUpperCase();
        setText(newText)
    }
    const handleLoClick = () => {
        // console.log("UpperCase was Clicked");
        let newText = text.toLowerCase();
        setText(newText)
    }

    const handleOnChange = (event)=>{
        setText(event.target.value)
    }
    const handleClearClick = () =>{
        let newText = "";
        setText(newText);
    }

    const handleCopyClick = () =>{
        console.log("I am Copy");
        var text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
    }
    const handleExSpaceClick = () =>{
        let newText = text.split(/[ ]+/);
        
    }
    const [text, setText] = useState('');
    // text ="New Text";
    return (
        <>
        <div>
            <div className="mb-3">
                <h5>{props.heading}</h5>
                {/* <label for="exampleFormControlInput1" className="form-label">Email address</label>
                <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
                </div>
                <div className="mb-3"> */}
                {/* <label for="myBox" className="form-label">Text Area</label> */}
                <textarea className="form-control"  value={text} onChange={handleOnChange} id="myBox" rows="10"></textarea>
            </div>
            <button className="btn btn-primary mx-1" onClick ={handleUpClick}>Convert to UpperCase</button>
            <button className="btn btn-primary mx-1" onClick ={handleLoClick}>Convert to LowerCase</button>
            <button className="btn btn-primary mx-1" onClick ={handleClearClick}>Clear Text</button>
            <button className="btn btn-primary mx-1" onClick ={handleCopyClick}>Copy Text</button>
            <button className="btn btn-primary mx-1" onClick ={handleExSpaceClick}>Remove Extra Space</button>
        </div>
        <div className="container my-3">
            <h3>Your Text Summary</h3>
            <p>{text.split(" ").length} Words and {text.length} Characters</p>
            <p>{0.004 * text.split(" ").length} Minutes Read</p>
            <h4>Preview</h4>
            <p>{text}</p>
        </div>
    </>
    )
}
