// Question #1
const myTodo = [
  { id: 1, todo: "Buy groceries" },
  { id: 2, todo: "Finish homework" },
  { id: 3, todo: "Call mom" },
  { id: 4, todo: "Wash dishes" },
];

//1
myTodo.push({id:5,todo:"Walk the dog"})


//2 
myTodo[3].todo = "Go to the gym"

// console.log(myTodo);

//3 
myTodo.pop()

//4
console.log(myTodo);


//5 
console.log(` "Todo id : ${myTodo[3].id} , ${myTodo[3].todo}" `);




