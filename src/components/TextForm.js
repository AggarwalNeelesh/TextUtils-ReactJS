import React, {useState} from 'react'
import PropTypes from 'prop-types'

export default function TextForm(props) {
  // text is a variable, and inside it ('enter text here') is stored and it is updated to setText 
  const [text, setText] = useState('');
  // text = "Hellow Neelesh" // Wrong way to change the state
  //setText("Hellow Neelesh"); //Correct way to change the state

  const handleUpClick = ()=>{
    props.showAlert("Text Converted to Upper Case", "success");
    console.log("Upper Case is running"+ text);
    setText(text.toUpperCase());
  }
  const handleLoClick = ()=>{
    props.showAlert("Text Converted to Lower Case", "success");
    console.log("Lower Case is running"+ text);
    setText(text.toLowerCase());
  }
  const handleExtraSpaces = () =>{
    props.showAlert("Extra spaces have been removed successfully", "success");
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
  }
  const handleCFLClick = (event)=>{
    props.showAlert("First letter of every word has been capitalized", "success");
    console.log("CFLClick is running");
    var x = text.charAt(0).toUpperCase();
    for(var i=1;i<text.length;i++){
      if(text.charAt(i-1) === ' ')x = x + text.charAt(i).toUpperCase();
      else x = x + text.charAt(i).toLowerCase();
    }
    setText(x);
  }
  const handleOnChange = (event)=>{
    console.log("OnChange is running");
    setText(event.target.value);
  }
  return (
    <>
    <div className='container' style={{color : props.mode==='dark'?'white':'#042743'}}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
           <textarea className="form-control" value = {text} onChange={handleOnChange} style={{backgroundColor : props.mode==='dark'?'#042743':"white", color : props.mode==='dark'?'white':'black'}} id="myBox" cols="30" rows="3"></textarea>
        </div>
        <button type="submit" onClick={handleUpClick} className="btn btn-primary mx-2">Convert to uppercase</button>
        <button type="submit" onClick={handleLoClick} className="btn btn-primary mx-2">Convert to lowercase</button>
        <button type="submit" onClick={handleCFLClick} className="btn btn-primary mx-2">Caps first letter</button>
        <button type="submit" onClick={handleExtraSpaces} className="btn btn-primary mx-2">Remove Extra Spaces</button>
    </div>
    <div className="container my-3" style={{color : props.mode==='dark'?'white':'black'}}>
      <h1>Your Text Summary</h1>
      <p>{text===''?0:text.split(" ").length} words and  {text.length} characters</p>
      <p>{parseInt((1.0/150)*(text===''?0:text.split(" ").length), 10)} Minutes {Math.round(((60.0/150) * (text===''?0:text.split(" ").length)%60)*100)/100} seconds read</p>
      <h2>Preview</h2>
      <p>{text.length>0?text:"Enter Text to Preview"}</p>
    </div>
    </>
  )
}
TextForm.propTypes = {
    heading : PropTypes.string.isRequired
}
TextForm.defaultProps = {
    heading : "Hello , Type here"
  }
