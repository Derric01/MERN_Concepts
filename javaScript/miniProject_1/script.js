const users = [
  { name: "derric", age: 22 },
  { name: "sam", age: 24 },
  { name: "jane", age: 20 },
  { name: "john", age: 34 },
  { name: "doe", age: 18 }
];

const cardContainer = document.getElementById("cardContainer");

function renderUsers(userList) {
  cardContainer.innerHTML = ""; // Clear existing cards

  userList.forEach((user) => { // ✅ fixed typo: foreach → forEach
    const card = document.createElement("div");
    card.className = "card";

    const name = document.createElement("h3");
    name.textContent = user.name;

    const age = document.createElement("p");
    age.textContent = `Age: ${user.age}`;

    const clickBtn = document.createElement("button"); // ✅ corrected name
    clickBtn.textContent = "Click me";

    // ✅ Closure to track click count per card
    (function () {
      let count = 0;
      clickBtn.addEventListener("click", () => {
        count++;
        alert(`${user.name} has clicked ${count} times`);
      });
    })();

    // Append elements to the card
    card.appendChild(name);
    card.appendChild(age);
    card.appendChild(clickBtn);

    // Append the card to the container
    cardContainer.appendChild(card);
  });
}

// ✅ Initial render of all users
renderUsers(users);

// ✅ Filter logic
document.getElementById("filterBtn").addEventListener("click", () => {
  const minAge = parseInt(document.getElementById("ageFilter").value, 10); // ✅ fixed .ariaValueMax to .value
  const filteredUsers = users.filter((user) => user.age >= minAge); // ✅ fixed userList.age → user.age
  renderUsers(filteredUsers);
});
