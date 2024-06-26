import { useState } from "react";

function ColorPicker(){
    const [color, setColor] = useState('#FFFFFF')

    function handleChange(e){
        setColor(e.target.value)
    }
    return(
    <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <h1>color picker
            <p>{color}</p>
        </h1>
        <input type="color" value={color} onChange={handleChange}/>
    </div>
    );
}

export default ColorPicker