import React from "react";
import './form-input.scss';

const FormInput = ({type, placeholder}) => (
    <React.Fragment>
        <input
            className="form-input"
            type={type}
            placeholder={placeholder}
        />
        <p className="form-input__subtitle">{placeholder}</p>
    </React.Fragment>
)

export default FormInput;