// -----------------------------Bài 1 -----------------------------
// interface User {
//     name: string,
//     age : number,
//     occupation : string,
// }

// const person : User[] = [
//     {
//         name: "Son",
//         age : 20,
//         occupation : 'Student'
//     },
//     {
//         name: "Khanh",
//         age : 23,
//         occupation : 'Student'
//     },
//     {
//         name: "Hien",
//         age : 21,
//         occupation : 'Student'
//     },
// ]
// function logPerson(user: User){
//     console.log(`${user.name}, ${user.age}`)
// }
// console.log('Users:');
// person.forEach(logPerson);
// -----------------------------Bài 2 -----------------------------
// interface User {
//   name: string;
//   age: number;
//   occupation: string;
// }
// interface Admin {
//   name: string;
//   age: number;

//   role: string;
// }
// type Clinets = Admin | User;

// const customs: Clinets[] = [
//   {
//     name: "Son",
//     age: 20,
//     role : "Administrator"
//   },
//   {
//     name: "Khanh",
//     age: 23,
//     occupation: "Student",
//   },
//   {
//     name: "Hien",
//     age: 21,
//     occupation: "Student",
//   },
// ];
// function logClient(client: Clinets){
//     console.log(`${client.name},${client.age} ${'role' in client ? client.role : ""}  ${'occupation' in client ? client.occupation : ""}`)
// }
// customs.forEach(logClient)
// -----------------------------Bài 3 -----------------------------
// interface User {
//     name: string;
//     age: number;
//     occupation: string;
//   }
//   interface Admin {
//     name: string;
//     age: number;

//     role: string;
//   }
//   type Clinets = Admin | User;

//   const customs: Clinets[] = [
//     {
//       name: "Son",
//       age: 20,
//       role : "Administrator"
//     },
//     {
//       name: "Khanh",
//       age: 23,
//       occupation: "Student",
//     },
//     {
//       name: "Hien",
//       age: 21,
//       occupation: "Student",
//     },
//   ];
//   function logClient(client: Clinets){
//          let roleClient : string;
//          if('role' in client){
//             roleClient = client.role
//          } else {
//             roleClient = client.occupation
//          }
//       console.log(`Tao là ${client.name} và tao ${client.age} tuổi vai trò của tao là ${roleClient}`)
//   }
//   customs.forEach(logClient)
// -----------------------------Bài 4 -----------------------------
interface User {
  type: "user";
  name: string;
  age: number;
  occupation: string;
}
interface Admin {
  type: "admin";
  name: string;
  age: number;
  role: string;
}
type Clinets = Admin | User;
const customs: Clinets[] = [
  {
    type: "admin",
    name: "Son",
    age: 20,
    role: "Administrator",
  },
  {
    type: "user",
    name: "Khanh",
    age: 23,
    occupation: "Student",
  },
  {
    type: "user",
    name: "Hien",
    age: 21,
    occupation: "Student",
  },
];
function checkAdmin(custom : Clinets): custom is Admin{
    return custom.type === "admin"
}
function checkUser(custom : Clinets): custom is User{
    return custom.type === "user"
}
  function logClient(client: Clinets){
         let roleClient : string = "";
         if(checkAdmin(client)){
            roleClient = client.role
         } 
         if(checkUser(client)) {
            roleClient = client.occupation
         }
      console.log(`Tao là ${client.name} và tao ${client.age} tuổi vai trò của tao là ${roleClient}`)
  }
customs.filter(checkAdmin).forEach(logClient)
customs.filter(checkUser).forEach(logClient)

function check(n){
  if(n>0){
    return true;
  }
  
}
// function greet() {
//   let greeting = 'Hello, world!';
//   let unusedVar = 'I am not used';
  
// }

const Sum = (a:number)=>{
     if(a>0){
      return true
     }
}

