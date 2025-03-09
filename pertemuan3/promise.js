function download() {
    return new Promise((resolve, reject)=> {
        setTimeout(()=> {
            resolve("Downloading");
        }, 3000);
    });
}

function verify() {
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve("Verity File");
        }, 2000);
    });
}

function notify() {
console.log("Download Complete");
}

download()
.then((results)=> {
    console.log(results);
    return verify();
})
.then((results)=>{
    console.log(results);
    notify();
})
.catch((error)=>{
    console.log(error);
})