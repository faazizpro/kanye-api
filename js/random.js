const loadUsers = () => {
    fetch('https://randomuser.me/api/?results=10')
    .then (res => res.json())
    .then (data => displayUsers(data.results));
}

const displayUsers = users => {
    const usersContainer = document.getElementById('users-container');
    for( const user of users){
        const userDiv = document.createElement('div');
        userDiv.classList.add('user');
        userDiv.innerHTML = `
        <h3>User Name: ${user.name.first}</h3>
        <h3>User Gender: ${user.gender}</h3>
        <h3>User Info: ${user.location.city}</h3>
        `;
        usersContainer.appendChild(userDiv);
    }
}

loadUsers();