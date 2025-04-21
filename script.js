let contacts = [
    // JSON = JavaScript Object Notation
    new Contact('Max', 'Musterman', '06642178313'), // Create a new object and add it to the array
    new Friend('erika', 'moldova') // Create a new object and add it to the array
];
function addContact(firstName, lastName) {
    let myContact = new Contact(firstName, lastName); // Create a new object
    contacts.push(myContact); // Add the object to the array

}

addContact('John', 'Doe', '06642178313'); // Call the function to add a new contact
addContact('Jane', 'Dse', '06642178313'); // Call the function to add a new contact    
addContact('Maxi', 'Mustermann', '06642178313'); // Call the function to add a new contact