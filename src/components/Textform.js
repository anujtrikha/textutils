import React,{useState} from "react";
import { useNavigate } from "react-router-dom";

export default function Textform(props) {
    const[text,setText] = useState('Enter Text here');
    const navigate = useNavigate();
    function textAreaOnChnage(event){
      setText(event.target.value);

    }
    function convertUpperCase(){
        setText(text.toLocaleUpperCase());
        if(text.length<=0){
            props.showAlerts('warning','Text is empty');
        }
        else{
        props.showAlerts('success','Text converted to upper Case');}
        
    }
    function convertLowerCase(){
        setText(text.toLocaleLowerCase());
        if(text.length<=0){
            props.showAlerts('warning','Text is empty');
        }
        else{
        props.showAlerts('success','Text converted to Lower Case');}
    }
    function clear(){
        setText('');
        if(text.length<=0){
            props.showAlerts('warning','Text is empty');
        }
        else{
        props.showAlerts('success','Text cleared');}
    }
    function handleCopy() {
           let textarea = document.getElementById('mybox');
           textarea.select();
           if(text.length<=0){
            props.showAlerts('warning','Text is empty');
        }
        else{
           props.showAlerts('success','Text copied to clipboard');}
           navigator.clipboard.writeText(textarea.value);
    }
    let removeExtraSpace =()=> {
        let arr = text.split(/[ ]+/);
        setText(arr.join(" "));
        if(text.length<=0){
            props.showAlerts('warning','Text is empty');
        }
        else{
        props.showAlerts('success','Extra spaces removed');}
        
    };
    let calculateWords=()=>{
    let words;
    if(text.length==0){
        words=0;
    }
    else{
        let a = text.split(' ');
        words=a.length;
    }
    return(words);
    }
    let formText =(props.mode==='light'?'dark':'light');
    let gotToContact =()=>{
       navigate('/contact-us',{state:{phn:'+91 9888765736'}})
    }
  return(
  <>
    <div className={`container text-${formText}`} >
       <div className="mb-3 my-3" >
           <h2>{props.heading}</h2>
           <textarea className={`form-control text-${formText}`} value ={text} onChange={textAreaOnChnage} id="mybox" rows="8"></textarea>
           <div className="container my-2"> 
           <button className="btn btn-primary" onClick={convertUpperCase}>Convert to Upper Case</button>
           <button className="btn btn-primary mx-2" onClick={convertLowerCase}>Convert to Lower Case</button>
           <button className="btn btn-primary mx-2" onClick={clear}>Clear Text</button>
           <button className="btn btn-primary mx-2" onClick={handleCopy}>Copy Text</button>
           <button className="btn btn-primary mx-2" onClick={removeExtraSpace}>Remove Extra Spaces</button>
           </div>
           <div className="container my-2">
            <h3>Your Text Summary</h3>
            <p>Your Text has {calculateWords()} words and {text.length} characters.Time for reading the text {text.split(" ").length * 0.008} minutes.</p>
           </div>
           <div className="container my-2">
            <h3>Preview</h3>
            <p>{text}</p>
           </div>
           <button onClick={gotToContact}>Contact US</button>
       </div>
    </div>
  </>
   
  ) 
}
