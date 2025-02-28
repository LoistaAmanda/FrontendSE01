//contoh deklarasi variabel
const name = "Aufa Billah";
const bod = 2001;
const major = "Informatika";

//template literals
const greeting =`
Hello, My name is ${name}.
Umur Saya ${2022 - bod}
`;

//kondisional
const result = 85;
if(result > 90){
    console.log("Grade : A");
} else if (result > 80){
    console.log("Grade : B")
} else if (result > 70){
    console.log("Grade : C")
}else{
    console.log("Grade D");
}

//ternary
const age = 23;
age > 21 ? console.log("Dewasa") : console.log("Belum Dewasa");

//looping for
console.log("Perulangan 1");
console.log("Perulangan 2");
for(let i = 1; i < 11; i++){
    console.log(`Perulangan ke - ${i} `);
}

//Looping While
let i = 1;
while(i < 11){
    console.log(`Perulangan While ke - ${i}`);
    i++;
}

//fungsi deklarasi
function umur(bod){
    //parameter adalah variebel sementara didalam fungsi
    //yang suatu saat nanti dapat diberikan nilai atau value
    const year = 2022;
    const age = 2022 - bod;
    //return age
    return age;
}

//fungsi ekspresi
const eksAge = function (bod1 = 2022){
    const years = 2022;
    const age1 = years - bod1;
    return age1;
}

//arrow function
const arrAge = (bod2) => 2022 - bod2;

console.log(arrAge(2000));
console.log(arrAge(1998));

console.log(eksAge());
console.log(eksAge(1998));

console.log(umur(1997));
console.log(umur(2000));



console.log(greeting);

console.log(name, major);

