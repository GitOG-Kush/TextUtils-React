import React, { useState } from 'react';
import PropTypes from 'prop-types'

export default function TextForm(props) {
    const [text, setText] = useState("");
    const [email, setMails] = useState("");
    function textUpdate(e) {
        // console.log(`text updated`);
        setText(e.target.value);
    }

    function toUpper() {
        let newText = text.toUpperCase();
        setText(newText);
    }

    function toLower() {
        let newText = text.toLowerCase();
        setText(newText);
    }

    // function toToggle() {
    //     let newText = "";
    //     for (let i = 0; i < text.length; i++) {
    //         let ch = text.charCodeAt(i);
    //         if(ch >= 65 && ch <= 90){
    //             newText += String.fromCharCode(ch+32);
    //         }
    //         else if(ch >= 97 && ch <= 122){
    //             newText += String.fromCharCode(ch-32);
    //         }
    //         else if(text[i] === " "||text[i] === ""){
    //             newText += text[i];
    //         }
            
    //     }
    //     setText(newText);
    //     // console.log(newText);
    // }

    function copyText(){
        let copied = document.getElementById('mybox');
        copied.select();
        navigator.clipboard.writeText(copied.value);
    }

    function fetchMail() {
        const regExp = /[a-zA-Z0-9]+(\.[a-zA-Z0-9]+)?@[a-zA-Z]+(.[a-z]{1,3})(\.[a-zA-Z]+)?(\s)?/g;
        let newMail = text.match(regExp);
        setMails(newMail);
        console.log(newMail);
    }

    function wordCount() {
        let words = text.split(' ');
        let count = 0;
        for (let index = 0; index < words.length; index++) {
            
            if(words[index] !== '' ){
                count += 1;
            }   
        }
        return count; 
    }

    function removeSpaces() {
        let newString = text.replace(/\s+/g, ' ').trim();
        setText(newString);
    }

    // function emailUpdate(e) {
    //     setMails(e.target.value);
    // }

    return (
        <div>
            <h2 style={props.mode=='light'?{color:'rgba(0,0,0,0.8)'}:{color:'#fff'}} className='text-center'>{props.heading}</h2>
            <div className="mb-3" >
                <textarea className="form-control" id="mybox" rows="8" value={text} onChange={textUpdate} placeholder="Enter your text" style={props.mode=='dark'?{color:'#fff',backgroundColor:'rgba(0,0,0,0.2)'}:{backgroundColor:'#fff'}}></textarea>
            </div>

            <div className="mb-3 d-flex justify-content-evenly">
                <button className="btn btn-primary" onClick={toUpper}>Convert to Uppercase</button>
                <button className="btn btn-primary mx-2" onClick={toLower}>Convert to Lowercase</button>
                <button className="btn btn-primary mx-2" onClick={removeSpaces}>Remove Extra Spaces</button>
                <button className="btn btn-primary mx-2" onClick={copyText}>Copy</button>
                <button className="btn btn-primary mx-2" onClick={fetchMail}>Fetch Mails</button>
            </div>
        
            <div className="mb-3" style={props.mode=='light'?{color:'rgba(0,0,0,.9)'}:{color:'#fff'}}>
                <p className='text-center'>Entered text has {wordCount()} words and {text.length} characters</p>
                <h4 className='text-center'>Entered Text has following emails</h4>
                <p>{email} </p>
                <h2 className='text-center'>Your Text Preview</h2>
                <p>{text} </p>
            </div>
        </div >

    )
}
