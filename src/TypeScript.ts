type Contact = {
    name: string;
    email: string;
    phoneNumber?: string;
    company?: string;
};

const contactList: Contact[] = [];

function add(contact: Contact): void {
    // Check if the contact has a name and email
    if (!contact.name || !contact.email) {
        console.log("Error: Missing fields");
        return;
    }

    // Check if there is already a contact with the same email
    const duplicate = contactList.find(c => c.email === contact.email);
    if (duplicate) {
        console.log("Error: Duplicate was found");
        return;
    }

    // Add contact to list
    contactList.push(contact);
    console.log(`${contact.name} was added`);
}

function remove(email: string): void {
    const index = contactList.findIndex((c) => c.email === email);
    
    if (index === -1) {
      console.log("Error: Contact not found");
      return;
    }
    
    const removed = contactList.splice(index, 1)[0];
    console.log(`${removed.name} was removed`);
  }

  function edit(email: string, newData: Partial<Contact>): void {
    const contact = contactList.find((c) => c.email === email);
    
    if (!contact) {
      console.log("Error: Contact not found");
      return;
    }
    
    Object.assign(contact, newData);
    console.log(`${contact.name} was updated`);
  }
  
  function get(email: string): void {
    const contact = contactList.find((c) => c.email === email);
    
    if (!contact) {
      console.log("Error: Contact not found");
      return;
    }
    
    console.log(`name: ${contact.name}\nEmail: ${contact.email}\nPhone number: ${contact.phoneNumber || "N/A"}\nCompany: ${contact.company || "N/A"}`);
  }
  
  function listAll(): void {
    if (contactList.length === 0) {
      console.log("No contacts available");
      return;
    }
    
    const list = contactList.map((c) => `${c.name} ${c.email}`).join(", ");
    console.log(list);
  }
  
  function clear(): void {
    contactList.length = 0;
    console.log("The contact list was cleared");
  }
  

  

