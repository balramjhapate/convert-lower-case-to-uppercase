import React,{useState}from 'react'

export default function TextForm(props) {

  function titleCase(str) {
    // Step 1. Lowercase the string
    str = str.toLowerCase();
    // str = "I'm a little tea pot".toLowerCase();
    // str = "i'm a little tea pot";
    
    // Step 2. Split the string into an array of strings
    str = str.split(' ');
    // str = "i'm a little tea pot".split(' ');
    // str = ["i'm", "a", "little", "tea", "pot"];
    
    // Step 3. Create the FOR loop
    for (var i = 0; i < str.length; i++) {
      str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1); 
    /* Here str.length = 5
      1st iteration: str[0] = str[0].charAt(0).toUpperCase() + str[0].slice(1);
                     str[0] = "i'm".charAt(0).toUpperCase()  + "i'm".slice(1);
                     str[0] = "I"                            + "'m";
                     str[0] = "I'm";
      2nd iteration: str[1] = str[1].charAt(0).toUpperCase() + str[1].slice(1);
                     str[1] = "a".charAt(0).toUpperCase()    + "a".slice(1);
                     str[1] = "A"                            + "";
                     str[1] = "A";
      3rd iteration: str[2] = str[2].charAt(0).toUpperCase()   + str[2].slice(1);
                     str[2] = "little".charAt(0).toUpperCase() + "little".slice(1);
                     str[2] = "L"                              + "ittle";
                     str[2] = "Little";
      4th iteration: str[3] = str[3].charAt(0).toUpperCase() + str[3].slice(1);
                     str[3] = "tea".charAt(0).toUpperCase()  + "tea".slice(1);
                     str[3] = "T"                            + "ea";
                     str[3] = "Tea";
      5th iteration: str[4] = str[4].charAt(0).toUpperCase() + str[4].slice(1);
                     str[4] = "pot".charAt(0).toUpperCase() + "pot".slice(1);
                     str[4] = "P"                           + "ot";
                     str[4] = "Pot";                                                         
      End of the FOR Loop*/
    }
    
    // Step 4. Return the output
    return str.join(' '); // ["I'm", "A", "Little", "Tea", "Pot"].join(' ') => "I'm A Little Tea Pot"
  }
  const onCLickTitle= ()=> {
    console.log("title ewas clicked" + text);
    let newText= titleCase(text)
    setText(newText)
  }
  const HTMLCanvasElement= ()=> {
    console.log("Lowercase was clcked" + text);
    let newText=text.toLowerCase()
    setText(newText)

  }
    const handleUpClick= ()=> {
        console.log("Upper case was clicked " + text);
        let newText=text.toUpperCase()
    
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
<button className ="mr-8 btn btn-primary" onClick={handleUpClick}>Convert to Uppercase</button> 


<button className="m-3 -5 btn btn-info"onClick={HTMLCanvasElement}>Convert to LowerCase</button>
<button className="btn btn-success" onClick={onCLickTitle} >Convert to Titles </button>

    </div>
  ) 
}
