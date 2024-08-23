function greet(user){
    for(let i= 0; i<user.length;i++){
        let prefix="";
        let vote = ""
        if(user[i].gender=='male'){
        prefix = 'Mr. '
        }
        else if (user[i].gender=='female'){
            prefix = 'Mrs. '
        }
        if(user[i].age>=18){
            vote = 'Yes, you are eligible to vote'
        }
        else{
            vote = 'No, you are not eligible to vote'
        }

        
        console.log("hi "+prefix +user[i].name+", your age is "+user[i].age+". "+vote)
    }   
}

let user =[
    {
        name:"kirat",
        age:18,
        gender:"male"
    },

    {
        name:'gg',
        age:5,
        gender:"female"
    },
    {
        name:'neutral',
        age:30,
        gender:"others"
    }

]

greet(user)