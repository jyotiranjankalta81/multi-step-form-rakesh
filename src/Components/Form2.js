import React, { useState } from "react";
import "./Form1.css";
import './Form2.css';


const Form2 = ({ text, setText }) => {
    const onChangeText = (name, value) => {
        setText({ ...text, [name]: value })

    }


    return (
        <>
            <h1>2</h1>
            <input type="email" placeholder="Enter your email" name="EMAIL" autoComplete="off"
                onChange={(e) => onChangeText("EMAIL", e.target.value)}
            />

            <div className="gender" onChange={(e) => onChangeText("GENDER", e.target.value)}>

                <label>Male</label><input type="radio" value='Male' name='GENDER' />
                <label>Female</label><input type="radio" value='Female' name='GENDER' />
            </div>
        </>
    );
};

export default Form2;
