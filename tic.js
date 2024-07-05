let box = document.querySelectorAll(".boxes");
let reset=document.querySelector(".re");
let turnO=true;

 const checkwinner = () => {
    for(pattern of winPattern){
        let pos0=box[pattern[0]].innerHTML;
        let pos1=box[pattern[1]].innerHTML;
        let pos2=box[pattern[2]].innerHTML;
        if(pos0!="" && pos1!="" && pos2!=""){
            if(pos0===pos1 && pos1===pos2){
                console.log("Winner");
                alert("Winner " +"is " + pos0);
                disableboxes();
            }

        }
    }
 }
 const Resetgame =(boxes) =>{
    let turnO=true;
    enableboxes();
   
    

 }
 const enableboxes =()=>{
    for(let boxes of box){
        boxes.disabled=false;
        boxes.innerHTML="";
    }
 }
 reset.addEventListener("click", ()=>{
    console.log("Reset is clicked");
    Resetgame();
 })

 
box.forEach((boxes)=>{
    boxes.addEventListener("click", () => {
        console.log("Box is clicked");
        if(turnO){
            boxes.innerHTML="O";
            turnO=false;
        }
        else{
        boxes.innerHTML="X";
    turnO=true;
        }
        boxes.disabled=true;
        checkwinner ();
      
        
    });
    
    

});
const disableboxes =()=>{
    for(let boxes of box){
        boxes.disabled=true;
    }
 }

const winPattern=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],

];

