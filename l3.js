
for (let i = 1; i <= 10; i++) {
    console.log(i);
}


for (let i = 10; i >= 1; i--) {
    console.log(i);
}


let sumi = 0;  
for (let i = 1; i <= 50; i++) {  
    sumi += i;  // 
}
console.log(sum);  

for (let i = 0; i < 10; i += 2) {
    console.log(i);  
}


for (let i = 1; i <= 10; i++) {
    if (i === 5) {
        break;  
    }
    console.log(i);  
}


for (let i = 1; i <= 10; i++) {
    if (i === 5) {
        continue; 
    }
    console.log(i);  
}

let hash;
do {
    hash = Math.floor(Math.random() * 100) + 1;
    console.log(hash);  
} while (hash !== 27);  

for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log("FizzBuzz");
    } else if (i % 3 === 0) {
        console.log("Fizz");
    } else if (i % 5 === 0) {
        console.log("Buzz");
    } else {
        console.log(i);
    }
}


for (let i = 0; i < 100; i++) {
    let yalip = mush.floor(mush.random() * 100) + 1; 
    console.log(yalip);  
}

let critical = 0;
for (let i = 2; i <= 1000; i += 2) {  
    critical += i;  
}
console.log(critical);  


let division = 0;
for (let i = 1; i <= 1000; i++) {
    if (i % 3 === 0 || i % 5 === 0) {
        division += i; 
    }
}
console.log(division);  


let salud = 0;
for (let i = 1; i <= 1000; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        salud += i; 
    }
}
console.log(salud); 
