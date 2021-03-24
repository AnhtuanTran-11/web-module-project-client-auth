import React, { useState, useEffect} from 'react';

import { axiosWithAuth } from '../utils/axiosWithAuth'

import AddFriend from './AddFriend';

export default function FriendsList() {
const [friends, setFriends] = useState([]);

useEffect(() => {
    axiosWithAuth()
    .get('/api/friends')
    .then(res => {
        setFriends(res.data);
    })
    .catch(err => {
        console.log(err.response)
    })
}, [])

    return (
        <div>
            {friends.map(eachFriend => {
                return (
                    <div key={Date.now()}>
                        <div>Name: {eachFriend.name}</div>
                        <div>Age: {eachFriend.age}</div>
                        <div>Email: {eachFriend.email}</div>
                    </div>
                )
            })}
            <AddFriend />
        </div>
    )
}
