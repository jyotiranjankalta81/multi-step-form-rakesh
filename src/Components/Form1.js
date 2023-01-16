import React, { useState } from "react";
import "./Form1.css";
import Form2 from "./Form2";


const Form1 = ({ text, setText }) => {

    const onChangeText = (name, value) => {
        setText({ ...text, [name]: value })

    }

    return (
        <>
            <h1>1</h1>
            <input type="text" placeholder="Firstname" name="FIRSTNAME" autoComplete="off"
                onChange={(e) => onChangeText("FIRSTNAME", e.target.value)}
            />
            <input type="text" placeholder="LASTNAME" name="LASTNAME" autoComplete="off"
                onChange={(e) => onChangeText("LASTNAME", e.target.value)}
            />
            <input type="number" placeholder="Number" name="PHONE" autoComplete="off"
                onChange={(e) => onChangeText("PHONE", e.target.value)}
            />
        </>
    );
};

export default Form1;
