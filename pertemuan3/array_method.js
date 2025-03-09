const names = ["Michael", "Jhon", "Hannah", "Johans"];

//panggil iteration method foreach

names.forEach(function(name){ //strukturforeach
    console.log(`Name ${name}`);
})

const formatedName = names.map(function(name){
    return `Mr/Mrs. ${name}`;
})
console.log(formatedName);