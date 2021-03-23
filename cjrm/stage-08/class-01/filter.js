//Example one
const randomNumbers = ["73", "62", "12", "24", "38", "44"];

const numbersGreaterThan35 = randomNumbers.filter((number) => number > 35);
// console.log(numbersGreaterThan35)

//Example two
const users = [
  { name: "Ada Lovelace", premium: true },
  { name: "Grace Hopper", premium: false },
  { name: "Alan Turing", premium: true },
  { name: "Linus Torvalds", premium: false },
  { name: "Margaret Hamilton", premium: true },
];

const usersPremium = users.filter((user) => user.premium);
// console.log(usersPremium);
// console.log(users);
