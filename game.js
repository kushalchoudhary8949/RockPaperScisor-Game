 let userscore = 0;
 let compscore = 0 ;
 const msg= document.getElementById("yourscore");
 const msg2 = document.getElementById("compscore");
 const msg3 = document.getElementById("last");
let showwinner = (userwin,uservalue,getcomptvalue)=>{
   if(userwin){console.log("you are winner");
   userscore++;
   msg.innerText=userscore;
   msg3.innerText=`you win! ${uservalue} beats your ${getcomptvalue}`;
   msg3.style.backgroundColor="green";
   }
   else{
    console.log("you lost");
    compscore++;
    msg2.innerText=compscore
    msg3.innerText=`you lost! ${getcomptvalue} beats your ${uservalue}`;
    msg3.style.backgroundColor="red";
   }
}
const drawgame=()=>{
    msg3.innerText="game is draw"
    msg3.style.backgroundColor = "black";
}

const compvalue=()=>{
    const operation = ["rock","papper","scissor"];
    const randomx=Math.floor(Math.random()*3);
    return operation[randomx];
}
const choices=document.querySelectorAll(".choice");
choices.forEach((choice) => {
    choice.addEventListener("click", ()=>{
    const uservalue = choice.getAttribute("id");
    playgame(uservalue);
    });
});
const playgame= (uservalue)=>{
    console.log("ys",uservalue);
    const getcomptvalue = compvalue();
    console.log("computer value", getcomptvalue);
    if (uservalue===getcomptvalue){
        console.log("draw");
        return drawgame();
    }
    else{
        let userwin = true;
        if(uservalue==="rock"){
           userwin =  getcomptvalue=== "papper"?false:true;
}else if(uservalue === "papper"){
    userwin = getcomptvalue === "scissor"? false:true;
}else{
    userwin= getcomptvalue === "rock"?false:true;
}
    showwinner(userwin,uservalue,getcomptvalue);
    }
 
};
 