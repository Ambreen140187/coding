// This guess the number game is a short TypeScript/Node.js.
import inquirer from "inquirer";

type ansType={userGuess:number
} 
const systemGenaratedNo=Math.floor(Math.random()*10);
const answer:ansType=await inquirer.prompt([
    {
        type:"number",
        name:"userGuess",
        message:"write your guess:b/w 1 to 10."

    }

])
const {userGuess}=answer;
console.log(userGuess,"userGuess",systemGenaratedNo,"sys")
if(userGuess===systemGenaratedNo){
    console.log("yessss your number is correct ./n you win! ")
}else{
    console.log("please try again")
}


