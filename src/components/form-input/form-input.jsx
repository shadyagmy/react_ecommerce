import React from 'react';
import "./form-input.scss";

export default function FormInput({handelChange, label, id, ...otherProps}) {
  
    return (
        <div className="group">
            <input className="form-input" onChange={handelChange} {...otherProps}/>
            {
                label ?
                (
                <label className={`${otherProps.value.length ? "shrink": ''} form-input-label`} htmlFor={id}>{label}</label>
                )
                : null
            }
        </div>
    )
}
