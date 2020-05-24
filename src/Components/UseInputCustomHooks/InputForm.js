import React from 'react'
import useInput from '../../Hooks/useInput'

function InputForm() {

    const[firstName, bindFirstName, firstNameReset] = useInput()
    const[lastName, bindLastName, lastNameReset] = useInput()

    const submitHandler = (e) => {
        e.preventDefault()
        alert(`Hello ${firstName} ${lastName}`)
        firstNameReset()
        lastNameReset()
    }

    return (
        <div>
            <form onSubmit={submitHandler}>
                <div>
                <label>FirstName</label>
                <input {...bindFirstName} type='text' >
                </input>
                </div>
                <div>
                <label>LastName</label>
                <input {...bindLastName} type='text' >
                </input>
                </div>

                <button>Submit</button>
            </form>
        </div>
    )
}

export default InputForm
