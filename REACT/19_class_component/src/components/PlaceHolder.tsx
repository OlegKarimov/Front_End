import React, { useEffect, useState } from "react";
const baseUrl = "https://jsonplaceholder.typicode.com/";

interface IUsers {
    id: number,
    name:    string,
    username: string,
    email: string,
    address: Object
  }
       
const PlaceHolder: React.FC = () => {
    
    const [users, setUsers] = useState<IUsers[]>([]);

    useEffect(() => {
        
    fetch(`${baseUrl}users`)
    .then((res) => res.json())
    .then((users) => {
        const userList = document.getElementById("userList");
        users.forEach((user: IUsers) => {
            const li = document.createElement("li");
            li.innerText = user.name;            
            userList?.append(li);
        });

    })
    .catch((error) => {
        console.log("Error fetching user", error);
    });
}, []);

return (
    <>
        <h1>User List</h1>
        <ol id="userList"></ol>

    </>
)
}

export default PlaceHolder;