const url = "https://jsonplaceholder.typicode.com/users";

fetch(url)
    .then((res) => res.json())
    .then((users) => {
        const userList = document.getElementById("userList");
        users.forEach((user) => {
            const li = document.createElement("li");
            li.innerText = user.name;
            userList.append(li);
        });
    })
    .catch((err) => console.log(err));

const userList2 = document.getElementById("userList2");
const userDetailsDiv = document.getElementById("userDetails");
const searchInput = document.getElementById("searchInput");
let users = [];

fetch(url)
    .then((res) => res.json())
    .then((users) => {
        let filteredUsers = users;
        displayUsers(filteredUsers);

        searchInput.addEventListener("input", () => {
            const searchTerm = searchInput.value.toLowerCase();
            filteredUsers = users.filter((user) =>
                user.name.toLowerCase().includes(searchTerm));
            displayUsers(filteredUsers);
        });
        
        userList2.addEventListener('click', (e) => {

            choiseName = e.target.textContent;
            findUser = users.filter((user) => user.name === choiseName);
            displayUsersDetails(findUser[0]);

        });



        function displayUsers(users) {
            userList2.innerHTML = "";
        
            users.forEach((user) => {
                const li = document.createElement("li");
                li.classList.add("liButton");
                li.innerText = user.name;
                userList2.append(li);
            });
        }

    })
    .catch((error) => {
        console.log("Error fetching user", error);
    });


function displayUsersDetails(user) {
    userDetailsDiv.innerHTML = '';
    
    const nameHeading = document.createElement('h2');
    console.log(user.name);
    nameHeading.innerHTML = user.name;
    userDetailsDiv.append(nameHeading);

    const nickName = document.createElement('p');
    nickName.innerHTML = `<strong>Username: </strong> ${user.username}`;
    userDetailsDiv.append(nickName);

    const email = document.createElement('p');
    email.innerHTML = `<strong>Email: </strong> ${user.email}`;
    userDetailsDiv.append(email);

    const phone = document.createElement('p');
    phone.innerHTML = `<strong>Phone: </strong> ${user.phone}`;
    userDetailsDiv.append(phone);


}

"Hello world".includes("llo"); // true, ищет в строке совпадения на подстроку