import React, { useState, useEffect } from 'react';


const Users = ({title}) => {
    // Default states for the users array
    const [usersList, setUsersList] = useState([]);
    // State for the search value
    const [searchValue, setSearchValue] = useState('');
    // State for the filterd users array
    const [filteredUsers, setFilteredUsers] = useState(usersList);
    
    // This useEffect will called once when component will mount because it has empty depedencies array
    useEffect(() =>{
        console.log("API UseEffect fired!!!")
        fetch("https://jsonplaceholder.typicode.com/users")
        .then(response => response.json())
        .then((data) => {
            setUsersList(data);
        })
    }, [])

    // This useEffect will called when the origional usersList will change(i.e. execauted about API called) annd when we type some text search value
    useEffect(() => {
        const newFilterUsers = usersList.filter((user) => {
            return user.name.toLocaleLowerCase().includes(searchValue)
        })
        setFilteredUsers(newFilterUsers);
    }, [usersList, searchValue])
    
    // This is to handle the on key up for the input field. It store the every key stroke value in to the searchValue state.
    const handleChange = (e) => {
        let newSearchValue = e.target.value.toLowerCase();
        setSearchValue(newSearchValue);

    }

    return (
        <div>
            <h1>{title}</h1>
            <input 
            type="text"
            defaultValue={searchValue} 
            onKeyUp={handleChange} 
            />
            <ul>
                {
                    filteredUsers.map(user => {
                        return <li key={user.id}>{user.name}</li>
                    })
                }
            </ul>
        </div>
    )
}

Users.defaultProps = { title: "Default Users page title here"}
export default Users;
