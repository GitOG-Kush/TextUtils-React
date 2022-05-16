import { React, useState } from 'react'
import PropTypes from 'prop-types'
import { ColorPicker, useColor } from "react-color-palette";
import "react-color-palette/lib/css/styles.css";
// import {Link} from 'react-router-dom';

export default function Navbar(props) {
    let mode = props.mode;
    if (mode == 'light') {
        mode = 'Dark';
    }
    else {
        mode = 'Light';
    }

    const mystyle = {
        position: 'absolute',
        top: '0',
        left: '0'
    }

    const [color, setColor] = useColor("hex", "#212529");
    const [showPicker, setShowPicker] = useState(false);

    props.getColor(color);

    function showPickerOption() {
        if (showPicker == true) {
            console.log(`Color Picker turned off`);
            setShowPicker(false);
        } else {
            console.log(`Color Picker turned on`);
            setShowPicker(true);
        }
    }

    return (
        <nav className={`navbar navbar-expand-lg navbar-${props.mode}`} style={props.mode == 'light' ? { color: 'red', backgroundColor: 'rgb(251 251 251)', borderBottom: '1px solid rgba(0,0,0,0.1)' } : { color: '#fff', backgroundColor: 'rgba(0,0,0,0.4)', borderBottom: '1px solid rgba(0,0,0,0.1)' }}>
            <div className="container-fluid">
                <a className="navbar-brand" href="#" style={{ color: '#72b900' }}>{props.title}</a>
                <button className="navbar-toggler" type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse"
                    id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#">Home</a>
                        </li>
                        {/* <li className="nav-item">
                            <Link className="nav-link" to="/about">{props.aboutText}</Link>
                            
                        </li> */}
                    </ul>

                    {/* ColorPicker  */}
                    <div >
                        {props.mode == 'dark' && <button className='btn btn-primary mx-2 dropdown-toggle' onClick={showPickerOption}>Color</button>
                        }
                        {showPicker &&
                            <div>
                                <ColorPicker className='dropdown-toggle' width={456} height={228} color={color} onChange={setColor} hideHSV hideRGB dark />
                                {/* document.body.style.backgroundColor = '{color}'; */}
                            </div>
                        }

                    </div>
                        

                    {/* Dark Mode Button */}
                    <div className="form-check form-switch" style={props.mode == 'light' ? { color: 'rgba(0,0,0,0.8)' } : { color: '#fff' }}>
                        <input className="form-check-input" onClick={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault" />
                        <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable {mode} Mode</label>
                    </div>
                </div>
            </div>
        </nav >
    )
}
Navbar.propTypes = {
    title: PropTypes.string.isRequired,
    aboutText: PropTypes.string.isRequired
};

Navbar.defaultProps = {
    // title: 'Set Title Here',
    aboutText: 'About'
};

