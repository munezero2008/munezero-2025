function game(player){
    const rand=Math.random();
    let computermove;
    if (rand>=0 && rand<1/3) {
computermove="rock"  
    }
   else if(rand>=1/3 && rand<2/3){
    computermove="paper"
   }
   else if(rand >= 2/3 &&  rand<1){
computermove="scissor"
}
let result;
if(player=="rock"){
    if(computermove=="rock"){
        result="tie"
    }
    else if(computermove=="paper"){
        result=" your lose"
    }
    else if(computermove=="scissor"){
        result="your win"
    }
    
alert(`you pick ${player} and computer pick ${computermove}. ${result}`)

}
if(player=="paper"){
    if(computermove=="paper"){

   
        result="tie"
    }
    else if(computermove=="rock"){
        result="your win"
    }
    else if(computermove=="scissor"){
        result="your lose"
    }
    alert(`you pick ${player} and computer pick ${computermove}. ${result}`)
}
if(player=="scissor"){
   if(computermove=="scissor"){
        result="tie"
    }
else if(computermove=="rock"){
    result="your lose"
}
else if(computermovemove=="paper"){
    result="your win"
}
alert(`you pick ${player} and computer pick ${computermove}. ${result}`)   

}




}