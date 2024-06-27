import { useState, useEffect } from "react";

function ColorPicker(){
    const [color, setColor] = useState('#063328')

    function handleChange(e){
        setColor(e.target.value);
    }
    // useEffect(
    //     document.getElementsByClassName('gosal').style.backgroundColor = color
    // )

    return(
    <div className="max-w-max p-6 bg-white border border-gray-200 rounded-2xl m-5 shadow-md" style={{backgroundColor: color}}>
        <h1 className="text-slate-950">Color Picker
          <hr className="border-2"/><p>{color}</p>
        </h1>
        <input className="p-2" type="color" value={color} onChange={handleChange}/>
    </div>
    );
}

export default ColorPicker