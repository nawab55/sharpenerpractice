// Put DOM elements into variables
const myForm = document.querySelector('#my-form');
const name = document.querySelector('#name');
const email = document.querySelector('#email');
const msg = document.querySelector('.msg');
const listOfUsers = document.querySelector('#listOfUsers');

// Listen for form submit
myForm.addEventListener('submit', onSubmit);

function onSubmit(e) {
    e.preventDefault();
  // Retrieving data
    const name = document.querySelector('#name').value;
    const email= document.querySelector('#email').value;
    console.log(name);
//  console.log(email);

  // Storing data in local storage
    // localStorage.setItem('name', name);
    // localStorage.setItem('email', email);
        const obj = {
            name,
            email,
        }

        axios.post("https://crudcrud.com/api/3305dec849e341d18070ce5d3277b012/appoinmentData", obj)
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

// read data from cloud(crudcrud)
    window.addEventListener("DOMContentLoaded", () => {
        const data = axios.get("https://crudcrud.com/api/3305dec849e341d18070ce5d3277b012/appoinmentData")
            .then((response)=>{
                console.log(response);

                for(var i=0; i<response.data.length; i++){
                    showUserOnScreen(response.data[i]);
                }
            })
            .catch((error) => {
                console.log(error);
            })
        // console.log(data);
    })

// read data from local storage
    // window.addEventListener("DOMContentLoaded", () =>{
    //     const localstorageObj = localStorage;
    //     const localstorageKeys = Object.keys(localstorageObj);

    //     for(var i=0; i<localstorageKeys.length; i++){
    //         const key = localstorageKeys[i];
    //         const userDetailsString = localstorageObj[key];
    //         const userDetailsObj = JSON.parse(userDetailsString);
    //         showUserOnScreen(userDetailsObj);
    //     }
        
    // })

    // function showUserOnScreen(obj){
    //     // Create new list item with user
    //     const li = document.createElement('li');
    
    //     // Add text node with input values
    //     li.appendChild(document.createTextNode(`${name.value}: ${email.value}`));
        
    //     // create a input button
    //     const deleteButton = document.createElement('input');
    //     deleteButton.id = 'button';
    //   // deleteButton.setAttribute('type', "button");
    //   // btn.setAttribute('value', "Delete");
    //     deleteButton.type = "button";
    //     deleteButton.value = "Delete";
    //       deleteButton.onclick = () => {
    //         localStorage.removeItem(obj.email);
    //         listOfUsers.removeChild(li);
    //       }
    
    //    // create a input editbutton
    //    const editButton = document.createElement('input');
    //    editButton.id = 'button';
    //    // editButton.setAttribute('type', "button");
    //    // editButton.setAttribute('value', "Edit");
    //    editButton.type = "button";
    //    editButton.value = "Edit";
    //     editButton.onclick = () => {
    //         localStorage.removeItem(obj.email);
    //         listOfUsers.removeChild(li);
    //         document.getElementById('name').value = obj.name;
    //         document.getElementById('email').value = obj.email;
    //     }
    //     li.appendChild(deleteButton);
    //     li.appendChild(editButton);
    //     // Append to ul
    //     listOfUsers.appendChild(li);
    
    //     // Clear fields
    //     // nameInput.value = '';
    //     // emailInput.value = '';
    // }
    


    function showUserOnScreen(user){
        console.log(user);
            // user = {
            //     _id: '',
            //     name: '',
            //     email: ''
            // }
        parentNode = document.getElementById('listOfUsers');
        childHTML = `<li id=${user._id}> ${user.name}: ${user.email}:
                    <button onclick = deleteUser('${user._id}')>DeleteUser</button>
                    <button onclick = editUserDetails('${user._id}','${user.name}')>EditUser</button>
                </li>`
        parentNode.innerHTML = parentNode.innerHTML + childHTML;
    }

     // Edit User
        function editUserDetails(emailId, name){
            document.getElementById('email').value = emailId;
            document.getElementById('name').value = name;
            // deleteUser(emailId);
        }
        // editUserDetails('email',);

    // deleteuser('abc@gmail.com')
        function deleteUser(userId){
            axios.delete(`https://crudcrud.com/api/3305dec849e341d18070ce5d3277b012/appoinmentData/${userId}`)
                .then((response)=> {
                    removeUserFromScreen(userId);
                })
                .catch((err)=>{
                    console.log(err);
                })
            // console.log(emailId);
            // localStorage.removeItem(emailId);
            // removeUserFromScreen(emailId);
        }

    function removeUserFromScreen(userId){
        const parentNode = document.getElementById('listOfUsers');
        const childNodeToBeDeleted = document.getElementById(userId);
        if(childNodeToBeDeleted){
            parentNode.removeChild(childNodeToBeDeleted);
        }
        
    }

