import React, {useState} from 'react'

export const TextForm = (props) => {
    const handleUpClick = () =>{
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to UpperCase","success");
    }
    const handleLoClick = () =>{
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to LowerCase","success");
    }
    const handleClearClick = () =>{
        let newText = "";
        setText(newText);
        props.showAlert("Text Cleared","success");
    }
    const handleCopy = () =>{
        navigator.clipboard.writeText(text);
        props.showAlert("Text Copied to Clipboard","success");
    }
    const handleVowelClick = () =>{
        let count=0;
        let text1 = text.toLowerCase();
        const vowels = ["a","e","i","o","u"];
        for(let i=0;i<text1.length;i++){
            if(vowels.includes(text1[i])){
                count++;
            }
        }
        return count
    }
    const handlespaces =()=>{
    let newtext = text.split(/[ ]+/);
    setText(newtext.join(" "));
    props.showAlert("Text Trimmed","success");
    };
    const handleReverse = (event) => {
        let strArr = text.split("");
        strArr = strArr.reverse();
        let newText = strArr.join("");
        setText(newText);
        props.showAlert("Text Reversed","success");
    };
    function capitalized(){
        var arr = text.split(" ")
        var c = arr.length
        var temp = ""
        while(c!==0){
            temp = arr[c-1].charAt(0).toUpperCase()+arr[c-1].substring(1).toLowerCase()+" "+temp
            c--;
        }

        setText(temp);
        props.showAlert("Text Capitalized","success");
    }
    
    const handleOnChange = (e) =>{
        setText(e.target.value)
    }
    const [text,setText] = useState(""); 
  return (
    <>
    <div className="container my-3" style={{color: props.mode==='dark'?'white':'black'}} >
        <h1>{props.text}</h1>
        <div className="mb-3">
        <textarea className="form-control bg-body-tertiary" style={{backgroundColor: props.mode==='dark'?'white':'black',color:props.mode==='dark'?'black':'black' }} value={text} onChange={handleOnChange} id="mybox" rows="8" placeholder='Enter your Text...'></textarea>
        </div>
        <button className="btn btn-primary mx-1 my-1" disabled={text.length===0}  onClick={handleUpClick}>Convert to Uppercase</button>
        <button className="btn btn-primary mx-1 my-1" disabled={text.length===0}  onClick={handleLoClick}>Convert to Lowercase</button>
        <button className="btn btn-danger mx-1 my-1" disabled={text.length===0}  onClick={handleClearClick}>Clear Text</button>
        {/* <button className="btn btn-success mx-1" onClick={handleVowelClick}>Count Vowels</button> */}
        <button className="btn btn-secondary mx-1 my-1" disabled={text.length===0}  onClick={handleReverse}>Reverse</button>
        <button className="btn btn-secondary mx-1 my-1" disabled={text.length===0}  onClick={handleCopy}>Copy Text</button>
        <button className="btn btn-secondary mx-1 my-1" disabled={text.length===0}  onClick={capitalized}>Capitalize</button>
        <button className="btn btn-secondary mx-1 my-1" disabled={text.length===0}  onClick={handlespaces}>Trim</button>
    </div>
    <div className="container my-3" style={{color: props.mode==='dark'?'white':'black'}} >
        <h2>Text Summary</h2>
        <p>{text.trim().split(/\s+/).filter((e)=>{return e.length!==0}).length} words and {text.length} characters</p>
        <p>{0.008 * text.split(/\s+/).filter((e)=>{return e.length!==0}).length} minutes to read this content</p>
        <p>Vowels = { handleVowelClick()}</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Enter Something in the Textbox to Preview it Here..."}</p>
    </div>
    </>
  )
}
