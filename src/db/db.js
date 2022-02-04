const people = [
  {
    name: 'Jonas',
    surname: 'Jonaitis',
    sex: 'male',
    age: 26,
    income: 1200,
    married: false,
    hasCar: false,
    id: 1,
  },
  {
    name: 'Severija',
    surname: 'Piktutytė',
    sex: 'female',
    age: 26,
    income: 1300,
    married: false,
    hasCar: true,
    id: 2,
  },
  {
    name: 'Valdas',
    surname: 'Vilktorinas',
    sex: 'male',
    age: 16,
    income: 0,
    married: false,
    hasCar: false,
    id: 3,
  },
  {
    name: 'Virginijus',
    surname: 'Uostauskas',
    sex: 'male',
    age: 32,
    income: 2400,
    married: true,
    hasCar: true,
    id: 4,
  },
  {
    name: 'Samanta',
    surname: 'Uostauskienė',
    sex: 'female',
    age: 28,
    income: 1200,
    married: true,
    hasCar: true,
    id: 5,
  },
  {
    name: 'Janina',
    surname: 'Stalautinskienė',
    sex: 'female',
    age: 72,
    income: 364,
    married: false,
    hasCar: false,
    id: 6,
  },
];
const numbers = [1, 15, 9, -9, -8, -7, 2, 8, 51, 6, 5];

module.exports = {
  people,
  numbers,
};

// const peopleWithId = people.map((person, idx) => {
//   // pakeisdami orginalo objekto
//   // person.id = idx + 1;
//   // return person;
//   // nepakeisdami orginalo objekto
//   return {
//     id: idx + 1,
//     ...person,
//   };
// });
