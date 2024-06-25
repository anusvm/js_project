
//global scope
let a= 300

if(true)
    {//block scope
        let a = 30
        const b = 40
        //console.log("inner: ", a);

    }

    //console.log(a);

    //clouser dom document object model

    function one()
    {
        const UserName = "anupriya"

        function two(){

            const website = "youtube"
            console.log(UserName);

        }

     //console.log(website);

     two()
    }

    one()

