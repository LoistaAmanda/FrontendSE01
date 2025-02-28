//array
const animals = ["Cat", "Dog", "Fish", "Bird"];

//object
const  user = {
    name: "Aufa",
    age : 22,
    major : "Informatika"
};

console.log(user.name, user["age"]);
//pertama memanggil key dan yang kedua memanggil key

//with loop
//for of
for (const animal of animals){
    console.log(`Hewan : ${animal}`);
}
//for in
for (const key in user){
    console.log(`${key} : ${user[key]}`);
}

//without loop
console.log(animals[0], animals[2]);