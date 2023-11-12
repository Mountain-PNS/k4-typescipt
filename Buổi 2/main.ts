const myName = "Mountain";
console.log("Hello", myName) 

// var a = undefined;
// a.length;
// let b = '';
// b.toLocaleLowerCase() 

type Student = {
    id: number,
    name: string,
    age: number,
};

// const student : Student = {id: 1, name: "son", age: 20};
const studentName: Partial<Student> = {name: "khanh"}
console.log(studentName)