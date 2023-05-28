const phoneBook = {
    contactsList: [], // массив контактов, каждый контакт - объект
    addContact(contact) {
        if (contact.userName) {
            this.contactsList.push(contact);
            alert("Contact added");
        }
        this.updateContactList();
    },
    changeContact(updatedContact) {
        const selectedContactName =
            document.getElementById("changeContactName").value;

        const index = this.contactsList.findIndex(
            (contact) => contact.userName === selectedContactName
        );
        this.contactsList[index] = updatedContact;
        this.updateContactList();
    },
    updateContactList() {
        const contactList = document.getElementById("contactList");
        contactList.innerHTML = "";

        this.contactsList.forEach((contact) => {
            const li = document.createElement("li");
            li.innerHTML = `
                <strong>Name: </strong> ${contact.userName}
                <strong>Email: </strong> ${contact.email}
                <strong>Phone Number: </strong> ${contact.phoneNumber}
                <strong>Company: </strong> ${contact.company}
                <strong>Address: </strong> ${contact.address}
            `;
            contactList.append(li);
        });
    },
};

const contactName = document.getElementById("contactName");
const contactEmail = document.getElementById("contactEmail");
const contactPhone = document.getElementById("contactPhone");
const contactCompany = document.getElementById("contactCompany");
const contactAddress = document.getElementById("contactAddress");

const addContactForm = document.getElementById("addContactForm");
addContactForm.addEventListener("submit", addContactHandler);

function addContactHandler(event) {
    event.preventDefault(); // Метод отменяет дефолтное поведение тэга

    const contactNameValue = contactName.value.trim();
    const contactEmailValue = contactEmail.value.trim();
    const contactPhoneValue = contactPhone.value.trim();
    const contactCompanyValue = contactCompany.value.trim();
    const contactAddressValue = contactAddress.value.trim();

    const newContact = {
        userName: contactNameValue,
        email: contactEmailValue,
        phoneNumber: contactPhoneValue,
        company: contactCompanyValue,
        address: contactAddressValue
    }

    phoneBook.addContact(newContact);
    addContactForm.reset()
    populateChangeContactForm();
}

const changeContactName = document.getElementById("changeContactName");
const changeContactEmail = document.getElementById("changeContactEmail");
const changeContactPhone = document.getElementById("changeContactPhone");
const changeContactCompany = document.getElementById("changeContactCompany");
const changeContactAddress = document.getElementById("changeContactAddress");

const changeContactForm = document.getElementById("changeContactForm");
changeContactForm.addEventListener("submit", changeContactHandler);

function changeContactHandler(event) {
    event.preventDefault();

    const changeContactNameValue = changeContactName.value.trim();
    const changeContactEmailValue = changeContactEmail.value.trim();
    const changeContactPhoneValue = changeContactPhone.value.trim();
    const changeContactCompanyValue = changeContactCompany.value.trim();
    const changeContactAddressValue = changeContactAddress.value.trim();

    const newContact = {
        userName: changeContactNameValue,
        email: changeContactEmailValue,
        phoneNumber: changeContactPhoneValue,
        company: changeContactCompanyValue,
        address: changeContactAddressValue
    }

    phoneBook.changeContact(newContact);
    changeContactForm.reset();
}

function populateChangeContactForm() {
    changeContactName.innerHTML = '';

    phoneBook.contactsList.forEach(contact => {
        const option = document.createElement('option');
        option.value = contact.userName;
        option.textContent = contact.userName;
        changeContactName.append(option);
    })
} 
