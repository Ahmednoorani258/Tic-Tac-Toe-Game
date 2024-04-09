
// let boxes = document.querySelectorAll(".box")//selecting 9 boxes from html
// let newgameBtn = document.querySelector(".newgame")
// let resetBtn = document.querySelector("#reset")
// let msgBox = document.querySelector(".msgbox")
// let turn = true //player O , player X
// let msg = document.querySelector("#msg")
// let game = document.querySelector(".fullgame")
// let count = 0

// const winPatterns =[
//     [0 ,1 ,2],
//     [0 ,3 ,6],
//     [0 ,4 ,8],
//     [1 ,4 ,7],
//     [2 ,5 ,8],
//     [2 ,4 ,6],
//     [3 ,4 ,5],
//     [6 ,7 ,8]
// ];
// const resetGame = () => {
//     turn = false;
//     boxes.forEach(box => box.disabled = false)
//     boxes.forEach(box => box.innerText = "" )
//     msgBox.classList.add("hide")
//     game.classList.remove("hide")

// }

// boxes.forEach((box) => {
//     box.addEventListener("click",() => {
//         if (turn) {
//             box.innerText = "O"
//             turn = false
//         }else{
//             box.innerText = "X"
//             turn = true
//         }  
//         count++;     

//         checkpattern()
//     });
// });

// const showWinner =(winner) =>{
//     msg.innerText = `Congratulation,Winner is ${winner}`
//     msgBox.classList.remove("hide")
// }
// // const checkpattern = ()=>{

// //     let winnerFound = false; 
// //     for (const ele of winPatterns) {
// //         let pos1 = boxes[ele[0]].innerText;
// //         let pos2 = boxes[ele[1]].innerText;
// //         let pos3 = boxes[ele[2]].innerText;

// //         if(pos1 != "" && pos2 != "" && pos3 != ""){

// //             if(pos1 === pos2 && pos2 === pos3){
// //                 console.log('winneer');
// //                 showWinner(pos1)
// //                 boxes.forEach(box => box.disabled = true)
// //                 game.classList.add("hide")
// //                 winnerFound = true
// //                 break;
// //             }
// //         }
// //     }
// //     if(!winnerFound && count === 9){

// //         msg.innerText = "Its draw"
// //         game.classList.add("hide")
// //         msgBox.classList.remove("hide")   
// //     }
// // }

// const checkpattern = () => {
//     let winnerFound = false; // Flag to track if a winner is found

//     for (const ele of winPatterns) {
//         let pos1 = boxes[ele[0]].innerText;
//         let pos2 = boxes[ele[1]].innerText;
//         let pos3 = boxes[ele[2]].innerText;

//         if (pos1 !== "" && pos2 !== "" && pos3 !== "") {
//             if (pos1 === pos2 && pos2 === pos3) {
//                 showWinner(pos1);
//                 boxes.forEach(box => box.disabled = true);
//                 game.classList.add("hide");
//                 winnerFound = true; // Set the flag to true
//                 break; // Exit the loop early since we found a winner
//             }
//         }
//     }

//     if (!winnerFound && count === 9) {
//         msg.innerText = "It's a draw";
//         game.classList.add("hide");
//         msgBox.classList.remove("hide");
//     }
// };
// newgameBtn.addEventListener("click",resetGame)
// resetBtn.addEventListener("click",resetGame)


let boxes = document.querySelectorAll(".box")//selecting 9 boxes from html
let newgameBtn = document.querySelector(".newgame")
let resetBtn = document.querySelector("#reset")
let msgBox = document.querySelector(".msgbox")
let turn = true //player O , player X
let msg = document.querySelector("#msg")
let game = document.querySelector(".fullgame")
let count = 0

const winPatterns =[
    [0 ,1 ,2],
    [0 ,3 ,6],
    [0 ,4 ,8],
    [1 ,4 ,7],
    [2 ,5 ,8],
    [2 ,4 ,6],
    [3 ,4 ,5],
    [6 ,7 ,8]
];
const resetGame = () => {
    turn = true;
    boxes.forEach(box => box.disabled = false)
    boxes.forEach(box => box.innerText = "" )
    msgBox.classList.add("hide")
    game.classList.remove("hide")
    count=0;
    checkpattern()
}

boxes.forEach((box) => {
    box.addEventListener("click",() => {
        if (turn) {
            box.innerText = "O"
            turn = false
        }else{
            box.innerText = "X"
            turn = true
        }
        
        if(count === 9){
            msg.innerText = `Draw`
        }
        box.disabled = true;
        count++;

        checkpattern()
    });
});

const showWinner =(winner) =>{
    msg.innerText = `Congratulation,Winner is ${winner}`
    msgBox.classList.remove("hide")
}
const checkpattern = ()=>{
    for (const ele of winPatterns) {
        let pos1 = boxes[ele[0]].innerText;
        let pos2 = boxes[ele[1]].innerText;
        let pos3 = boxes[ele[2]].innerText;

        if(pos1 != "" && pos2 != "" && pos3 != ""){
            if(pos1 === pos2 && pos2 === pos3){
                console.log('winneer');
                showWinner(pos1)
                boxes.forEach(box => box.disabled = true)
                game.classList.add("hide")
            }if(count === 9){
                msg.innerText = "Its draw"
                game.classList.add("hide")
                msgBox.classList.remove("hide")
            }
            
            
        }
    }
}


newgameBtn.addEventListener("click",resetGame)
resetBtn.addEventListener("click",resetGame)