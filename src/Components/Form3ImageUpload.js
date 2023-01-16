import axios from 'axios';
import React from 'react';
import { useState } from 'react';
import './Form3ImageUpload.css';

const Form3ImageUpload = ({ text, setText }) => {
    const onChangeText = (name, value) => {
        setText({ ...text, [name]: value })

    }

    return (
        <>
            <input type="file" name='IMAGE' onChange={(e) => onChangeText("IMAGE", e.target.value)} />
        </>
    )
}

export default Form3ImageUpload;
