
import React ,{useState} from 'react'


export default function Textformn(props) {
    const [text,setText]=useState('Enter text here');
    const upper=()=>{
        console.log("upper clicked");
        let newtxt=text.toLocaleUpperCase();
        setText(newtxt);
        props.showalert("upeercased","success");

    }
    const bolding=()=>{
        
      var txt=document.getElementById("box");
      txt.select();
      navigator.clipboard.writeText(txt.value);

    }
    const handleonchange=(event)=>{
        console.log("hanler for change");
        setText(event.target.value);

    }

  return (
    <>
    <div className='container'>
        <h1>{props.heading}</h1>
        <div className="mb-3" style={{color:props.mode==='dark'?'white':'black'}}>
       
        <textarea className="form-control" value={text}  style={{backgroundColor:props.mode==='dark'?'grey':'white',color:props.mode==='dark'?'white':'black'}}onChange={handleonchange} id="box" rows="10"></textarea>
        </div>
        <button className="btn btn-primary" onClick={upper}>Uppercase</button>
        <button className="btn btn-danger mx-2" onClick={bolding}>SLICE</button>
      
    </div>
    <div className="container my-3" style={{color:props.mode==='dark'?'white':'black'}}>
        <h1>text summary</h1>
        <p> words are{text.split(" ").length} and characters-{text.length} </p>
        <h2>Preview</h2>
        <p>{text}</p>
    </div>
    </>
  )
}
