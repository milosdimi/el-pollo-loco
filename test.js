let zoo = [
    {
      'firstName': 'Lion',
      'lastName': 'Panthera leo',
    }
  ]
  
  class Zebra {
      firstName;
      lastName; 
  }
  function addZebra(firstName, lastName) {
      let myAnimal = new Zebra();
      myAnimal['firstName'] = firstName;
      myAnimal['lastName'] = lastName;
      zoo.push(myAnimal);
  }