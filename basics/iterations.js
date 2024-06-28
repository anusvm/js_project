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
//for (let i = 1; i < 20; i++) {
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
    
//}

//while - do while loop
let cnt = 1
/*while (cnt<=10) {
//   console.log(`the value of cnt : ${cnt}`);  
//   cnt = cnt+2; 
}*/
// let score = 0
// do {
//     console.log(`score is ${score}`);
//     score++
// } while (score<=10);

//for-of-loop

// let myarr = [ 1,2,3,4,5,6]

// for (const num of myarr) {

//     console.log(num);
    
// }

// const greetings = "Hello World!"
// for (const greets of greetings) {
//     console.log(`each char of greeting : ${greets}`);
    
// }

const map = new Map()
map.set('IN', 'INDIA')
map.set('USA', 'Unitated States of America')
map.set('Fr', 'France')
map.set('CND', 'CANADA')

for (const [key] of map) {
    console.log([key]);
    
}
//map is object that holds key value pairs, remmeber the original insertion order of the keys
