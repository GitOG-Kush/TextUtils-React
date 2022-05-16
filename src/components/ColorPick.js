import React, { useState } from 'react';
import { ColorPicker, useColor } from "react-color-palette";
import "react-color-palette/lib/css/styles.css";
import PropTypes from 'prop-types'

export default function ColorPick(props) {
    const [color, setColor] = useColor("hex", "#fff");
    const [showPicker, setShowPicker] = useState(false);
    function showPickerOption() {
        if (showPicker == true) {
            console.log(`Color Picker turned on`);
            setShowPicker(false);
        } else {
            console.log(`Color Picker turned off`);
            setShowPicker(true);
        }
    }

    const mystyle = {
        position: 'absolute',
        marginLeft: 'auto',
        top: '0',
        left: '0',
        zIndex: '1'

    }

    return (
        <>
            <div >
                <button className='btn btn-primary mx-2 dropdown-toggle' onClick={showPickerOption}>Color</button>
                <div className='my-2' style={{mystyle}}>

                    {showPicker &&
                        <ColorPicker className='dropdown-toggle' width={456} height={228} color={color} onChange={setColor} hideHSV hideHEX hideRGB dark />
                    }
                </div>
            </div>
        </>
    );
};