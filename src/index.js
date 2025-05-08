// HTML ELEMENTS
const buttonAddRandom = document.querySelector("#btn-add-random");
const tableBody = document.querySelector("tbody#contacts");

// ITERATION 0 | Example Row
// Splice 1 element from the contacts array at the random index

const randomIndex = Math.floor(Math.random() * contacts.length);
const splicedArr = contacts.splice(randomIndex, 1);

// Get the element from the spliced array
const randomContact = splicedArr[0];

const exampleRow = document.createElement("tr");
exampleRow.innerHTML = `
  <td>
    <img src="${randomContact.pictureUrl}" />
  </td>
  <td> ${randomContact.name} </td>
  <td> ${randomContact.popularity.toFixed(2)} </td>
  <td>
    <button class="btn-delete">Delete</button>
  </td>
  <td>
    <button class="btn-like">
      <img src="./images/icon.png" alt="like" />
    </button>
  </td>
`;

tableBody.appendChild(exampleRow);

// ITERATION 1 - Display 3 contacts
// Get the first 3 contacts from the 'contacts' array.

const threeContacts = contacts.splice(0, 3);

// I used forEach method to itarate for the 3 contacts i need.

threeContacts.forEach((contact) => {
  const newRow = document.createElement("tr");
  newRow.innerHTML = `
    <td>
      <img src="${contact.pictureUrl}" />
    </td>
    <td> ${contact.name} </td>
    <td> ${contact.popularity.toFixed(2)} </td>
    <td>
      <button class="btn-delete">Delete</button>
    </td>
    <td>
      <button class="btn-like">
        <img src="./images/icon.png" alt="like" />
      </button>
    </td>
  `;
  tableBody.appendChild(newRow);

  // ITERATION 2 - Delete Buttons


  const deleteBtn = newRow.querySelector(".btn-delete");

  deleteBtn.addEventListener("click", () => {
    newRow.remove()
  });

  // ITERATION 3 - Like Buttons


  const likeBtn = newRow.querySelector(".btn-like");

  likeBtn.addEventListener("click", () => {
    likeBtn.classList.toggle("selected")
  });

  // Bonus: ITERATION 4 - Add Random Contacts


  buttonAddRandom.addEventListener("click", () => {
    if (contacts.length === 0) return;  

    const randomIndex = Math.floor(Math.random() * contacts.length);
    const randomContact = contacts.splice(randomIndex, 1)[0]; // [0] to show that if array is empty it won't run

    const newRow = document.createElement("tr")
    newRow.innerHTML = `
    <td><img src="${randomContact.pictureUrl}" alt="${
      randomContact.name
    }" /></td>
    <td>${randomContact.name}</td>
    <td>${randomContact.popularity.toFixed(2)}</td>
    <td><button class="btn-delete">Delete</button></td>
    <td><button class="btn-like"><img src="./images/icon.png" alt="like" /></button></td>
  `

    tableBody.appendChild(newRow);

    // To make the like and delete button work for the new Contacts that is added after the "Add random contact"
    //  i need to rewrite them under my code , if i dont they wont 
    // be deleted or liked for the new added contacts
    

    const deleteBtn = newRow.querySelector(".btn-delete");
    deleteBtn.addEventListener("click", () => {
      newRow.remove(); // i have to put it again or the new added contacts won't be deleted
    })

    // i have to rewrite the eventListener for likebtn in order to be working for the New contacts
    const likeBtn = newRow.querySelector(".btn-like");
    likeBtn.addEventListener("click", () => {
      likeBtn.classList.toggle("selected");
    })
  })
})
