//for 

let array = [1,2, 3, 4]
/*for (let index = 0; index < array.length; index++) {
    const element = console.log(array[index]);
    
}*/

for (let i = 0; i < array.length; i++) {

    for (let index = 0; index < array.length; index++) {
        //const element = console.log(array[index]);
        
    }
    
    
}

//keyword -- break and continue
for (let i = 1; i < 20; i++) {
    // if(i==5)
    //     {
    //         console.log(`5 is detected`);
    //         break;
    //     }
    // if(i==5)
    //     {
    //         console.log(`5 is detected`);
    //         continue;
    //     }
    // console.log(`value of i is ${i}`);
    
}

//while - do while loop
let cnt = 1
while (cnt<=10) {
//   console.log(`the value of cnt : ${cnt}`);  
//   cnt = cnt+2; 
}
let score = 0
do {
    console.log(`score is ${score}`);
    score++
} while (score<=10);