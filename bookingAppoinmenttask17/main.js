// Put DOM elements into variables
const myForm = document.querySelector('#my-form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const msg = document.querySelector('.msg');
const userList = document.querySelector('#users');

// Listen for form submit
myForm.addEventListener('submit', onSubmit);

function onSubmit(e) {
    e.preventDefault();
  // Retrieving data
    const name = document.querySelector('#name').value;
    const email = document.querySelector('#email').value;
  console.log(name);
//   console.log(email);

  // Storing data
//   const user = localStorage.setItem('name', name);
//   const email = localStorage.setItem('email', email);
    const obj = {
        name,
        email
    }

    axios.post("https://crudcrud.com/api/ad2b0166e018472686750eb3f2209fbd/appoinmentData", obj)
        .then((response)=>{
            showUserOnScreen(response.data)
            // console.log(response);
        })
        .catch((err)=>{
            console.log(err);
        })
    // localStorage.setItem(obj.email, JSON.stringify(obj));
    // showUserOnScreen(obj);
}
function showUserOnScreen(obj){
    // Create new list item with user
    const li = document.createElement('li');

    // Add text node with input values
    li.appendChild(document.createTextNode(`${nameInput.value}: ${emailInput.value}`));
    
    // create a input button
  const deleteButton = document.createElement('input');
  deleteButton.id = 'button';
  // deleteButton.setAttribute('type', "button");
  // btn.setAttribute('value', "Delete");
  deleteButton.type = "button";
  deleteButton.value = "Delete";
  deleteButton.onclick = () => {
    localStorage.removeItem(obj.email);
    userList.removeChild(li);
  }

   // create a input editbutton
   const editButton = document.createElement('input');
   editButton.id = 'button';
   // editButton.setAttribute('type', "button");
   // editButton.setAttribute('value', "Edit");
   editButton.type = "button";
   editButton.value = "Edit";
   editButton.onclick = () => {
     localStorage.removeItem(obj.email);
     userList.removeChild(li);
     document.getElementById('name').value = obj.name;
     document.getElementById('email').value = obj.email;
   
   }
  li.appendChild(deleteButton);
  li.appendChild(editButton);
  // Append to ul
  userList.appendChild(li);

  

    // Clear fields
    // nameInput.value = '';
    // emailInput.value = '';
}