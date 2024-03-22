const groupItems = document.getElementById('group-items');
const userClick = document.getElementById('userClick');
const searchInput = document.getElementById('searchInput');

let users = [];

const fetchUserByApi = () => {
  fetch('https://gorest.co.in/public/v2/users')
    .then(response => response.json())
    .then(data => {
      users = data;
      renderUserItems(users);
    });
};

const renderUserItems = (data) => {
  let userItems = "";
  data.forEach(item => {
    userItems += `<div class="box-item" id="user-${item.id}">${item.name} - ${item.email}</div>`
  });
  groupItems.innerHTML = userItems;

  data.forEach(item => {
    document.getElementById(`user-${item.id}`).addEventListener('click', () => {
      userClick.innerHTML = item.name;
    })
  });
};

searchInput.addEventListener('keyup', (e) => {
  const searchValue = e.target.value;
  let filterUsers = users.filter(item => item.name.toUpperCase().indexOf(searchValue.toUpperCase()) !== -1);
  renderUserItems(filterUsers);
});

fetchUserByApi();


