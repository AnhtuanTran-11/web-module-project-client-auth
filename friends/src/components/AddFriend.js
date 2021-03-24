import React, { useState } from 'react'
import { axiosWithAuth } from '../utils/axiosWithAuth'

const initialState = {
    id: '',
    name: '',
    age: '',
    email: '',
}

export default function AddFriend(props) {
const [formValues, setFormValues] = useState(initialState);

const onSubmit = (e) => {
    e.preventDefault()
    axiosWithAuth()
    .post('/api/friends', formValues)
    .then(res => {
        console.log(res)
    })
    .catch(err => {
        console.log(err)
    })
    setFormValues(initialState)
}

const onChange = (e) => {
    setFormValues({
        ...formValues,
        [e.target.name]: e.target.value
    })
}
    return (
        <div>
            <form onSubmit={onSubmit}>
                <label htmlFor='name'>Name</label>
                <input
                type='text'
                name='name'
                value={formValues.name}
                onChange={onChange}
                />
                <label htmlFor='name'>Age</label>
                <input
                type='text'
                name='age'
                value={formValues.age}
                onChange={onChange}
                />
                <label htmlFor='name'>Email</label>
                <input
                type='email'
                name='email'
                value={formValues.email}
                onChange={onChange}
                />
                <button>Add Friend</button>
            </form>
        </div>
    )
}
