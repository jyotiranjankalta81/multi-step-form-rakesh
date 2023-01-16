import React from 'react'

const Form4ShowData = (props) => {
    console.log(props)
    return (
        <div>
            <h1>Here we will show all the data we have filled !</h1>
            <div className='form_data'>
                <p>First Name:</p>
                <p>{props.data.FIRSTNAME}</p>
                <p>Last Name:</p>
                <p>{props.data.LASTNAME}</p>
                <p>Email:</p>
                <p>{props.data.EMAIL}</p>
                <p>Phone:</p>
                <p>{props.data.PHONE}</p>
                <p>Gender:</p>
                <p>{props.data.GENDER}</p>
                <p>Image:</p>
                <p>{props.data.IMAGE}</p>
            </div>
        </div>
    )
}

export default Form4ShowData
