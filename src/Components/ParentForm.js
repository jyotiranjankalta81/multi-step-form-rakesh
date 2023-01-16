import React, { useState } from 'react'
import Form1 from './Form1'
import Form2 from './Form2';
import Form3ImageUpload from './Form3ImageUpload'
import Form4ShowData from './Form4ShowData'

const ParentForm = () => {
    const [page, setPage] = useState(0);

    const [text, setText] = useState({
        FIRSTNAME: '',
        LASTNAME: '',
        PHONE: '',
        GENDER: '',
        EMAIL: '',
        IMAGE: '',
    })
    const submitHandler = (e) => {
        e.preventDefault();
        if (text.FIRSTNAME == "") {
            alert("Enter FirstName")
            return false;
        } else if (text.LASTNAME == "") {
            alert("Enter Lastname")
            return false
        }
        else if (text.PHONE == "") {
            alert("Enter PHONE")
            return false
        }
        else if (text.GENDER == "") {
            alert("Enter GENDER")
            return false
        }
        else if (text.EMAIL == "") {
            alert("Enter EMAIL")
            return false
        }
        else if (text.IMAGE == "") {
            alert("Enter IMAGE")
            return false
        }

        const formdata = new FormData();
        formdata.append("FIRSTNAME", text.FIRSTNAME);
        formdata.append("LASTNAME", text.LASTNAME);
        formdata.append("PHONE", text.PHONE);
        formdata.append("GENDER", text.GENDER)
        formdata.append("EMAIL", text.EMAIL);
        formdata.append("IMAGE", text.IMAGE);
    }

    const PageDisplay = () => {
        if (page === 0) {
            return <Form1 text={text} setText={setText} />
        } else if (page === 1) {
            return <Form2 text={text} setText={setText} />
        }
        else if (page === 2) {
            return <Form3ImageUpload text={text} setText={setText} />
        }
        else if (page === 3) {
            return <Form4ShowData data={text} />
        }
    }

    const formsubmitHandleClick = () => {
        if (page === 2) {
            setPage((currPage) => currPage + 1)
            submitHandler();

        } else {
            setPage((currPage) => currPage + 1);
        }
    };





    return (
        <>
            <div className='parent_container'>
                <div className='form_container'>
                    <h3>Form Data Collection</h3>
                    <div className='body'>{PageDisplay()}</div>
                    <div className='footer'>
                        <button disabled={page === 0}
                            style={{ display: page === 3 ? "none" : "block" }}
                            onClick={() => {
                                setPage((currPage) => currPage - 1);
                            }}>Prev</button>
                        <button onClick={formsubmitHandleClick} style={{ display: page === 3 ? "none" : "block" }}>{page === 3 ? "DONE" : "Next"}</button>
                    </div>

                </div>

            </div>

        </>
    )
}

export default ParentForm
