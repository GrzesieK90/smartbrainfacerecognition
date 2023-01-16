import React from "react";
import './ImgLinkForm.css'

const ImgLinkForm = ({ onInputChange, onPictureSubmit }) => {
    return (
        <div>
            <p className="text">
                {'This Smart Brain will detect face on your photo. Give it a try!'}
            </p>
            <div className="center">
                <div className="style1">
                    <input className="inp" type='text' onChange={onInputChange} />
                    <button 
                    className="btn" 
                    onClick={onPictureSubmit}
                    >DETECT</button>
                </div>
            </div>
        </div>
    )
}

export default ImgLinkForm