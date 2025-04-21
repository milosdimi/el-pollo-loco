class Contact extends Person {
    phone;

    // Constructor of the class
    constructor(firstName, lastName, phone) {
        super(firstName, lastName); 
        this.phone = phone; 
    }

    call() {
        window.location.href = 'tel:' + this.phone; // Call the contact
    }

    printFullName() {
        console.log('Full name: ' + this.firstName + ' ' + this.lastName); // Log the full name of the object
    }
}