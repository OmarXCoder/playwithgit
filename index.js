import contacts from "./contacts.js";

const listEl = document.getElementById("contact-list");

const renderContact = (contact) => {
  // listEl
  const card = document.createElement("DIV");

  card.className = "contact-card";
  card.innerHTML = `<h4>${contact.name}</h4><p>${contact.email}</p>`;

  card.style.borderColor = contact.color;

  listEl.appendChild(card);
};

contacts.forEach((contact) => {
  renderContact(contact);
});

const formEl = document.getElementById("contact-form");

formEl.addEventListener("submit", (e) => {
  e.preventDefault();
  const nameEl = document.getElementById("name");
  const emailEl = document.getElementById("email");
  const colorEl = document.getElementById("color");

  renderContact({
    id: new Date().getTime(),
    name: nameEl.value,
    email: emailEl.value,
    color: colorEl.value,
  });
});
