var contactList = [];
function add(contact) {
    // Check if the contact has a name and email
    if (!contact.name || !contact.email) {
        console.log("Error: Missing fields");
        return;
    }
    // Check if there is already a contact with the same email
    var duplicate = contactList.find(function (c) { return c.email === contact.email; });
    if (duplicate) {
        console.log("Error: Duplicate was found");
        return;
    }
    // Add contact to list
    contactList.push(contact);
    console.log("".concat(contact.name, " was added"));
}
function remove(email) {
    var index = contactList.findIndex(function (c) { return c.email === email; });
    if (index === -1) {
        console.log("Error: Contact not found");
        return;
    }
    var removed = contactList.splice(index, 1)[0];
    console.log("".concat(removed.name, " was removed"));
}
function edit(email, newData) {
    var contact = contactList.find(function (c) { return c.email === email; });
    if (!contact) {
        console.log("Error: Contact not found");
        return;
    }
    Object.assign(contact, newData);
    console.log("".concat(contact.name, " was updated"));
}
function get(email) {
    var contact = contactList.find(function (c) { return c.email === email; });
    if (!contact) {
        console.log("Error: Contact not found");
        return;
    }
    console.log("name: ".concat(contact.name, "\nEmail: ").concat(contact.email, "\nPhone number: ").concat(contact.phoneNumber || "N/A", "\nCompany: ").concat(contact.company || "N/A"));
}
function listAll() {
    if (contactList.length === 0) {
        console.log("No contacts available");
        return;
    }
    var list = contactList.map(function (c) { return "".concat(c.name, " ").concat(c.email); }).join(", ");
    console.log(list);
}
function clear() {
    contactList.length = 0;
    console.log("The contact list was cleared");
}
