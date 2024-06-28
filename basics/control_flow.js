const isloggrdIn = true;

if(isloggrdIn){

    console.log(`yes, i am logged in`);

}

//=== triple equal check data type of variable  !
//short hand notation
//short cut - shift + alt +downarrow  to make copy
//switchCase
const month = 3
switch (month) {
    case 1:
        console.log("january");
        break;
    case 2:
        console.log("feb");
        break;
    case 3:
        console.log("march");
        break;

    default:
        console.log("default case match");
        break;
}

//in js if we dont use break then execute all the cases except the defalt case
//in new language like swift it does not happen