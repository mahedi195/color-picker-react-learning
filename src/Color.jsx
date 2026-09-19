import { useState } from "react";



function MyComponent() {

    const [color, updateColor] = useState("#FFA500")

    function colorChange(event) {
        updateColor(event.target.value);
    }


    return (
        <div className="color_picker">
            <h1>Color Picker</h1>


            <div className="choose_color">
                <label>Select a color: </label>
                <input
                    type="color"
                    value={color}
                    onChange={colorChange}

                />


            </div>

            <div className="selected_color"
            
            style={{backgroundColor:color}}
            
            >
                Selected color: {color}
            </div>






        </div>

    );
}

export default MyComponent;