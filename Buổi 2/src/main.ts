// const myName = "Mountain";
// console.log("Hello", myName);

type Student = {
  id: number;
  name: string;
  age: number;
};
// const student : Student = {id: 1, name: "son", age: 20};
const studentName: Partial<Student> = { name: "khanh" };
console.log(studentName);

function sum(a , b){
   console.log('Tổng = ', a+b)
} 
sum(3,4)

type Teacher = {
  id: string,
  name : string
}
type Studens = {
  id : number,
  age : number
}
type Person<T> = {
  school: string,
  data:T
}

const student: Person<Teacher> = {
  school : 'FPT',
  data: {
    id : "Teacher1",
    name : "Sơn"
  }
}

const student2: Person<Studens> = {
  school : "FPT",
  data: {
    id : 1,
    age :20
  }
}

type Hocsinh = {
  id : number,
  name : string,
  age: number
}
const keyOfStudent: keyof Hocsinh = 'age';
type MapType2 = {
  [Key in keyof Hocsinh]: number
}