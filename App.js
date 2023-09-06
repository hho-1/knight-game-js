

let initialPointK1 = 100;
let initialPointK2 = 100;
let initialPointK3 = 100;
let initialPointK4 = 100;
let initialPointK5 = 100;
let initialPointK6 = 100;
let initialPointK7 = 100;

let k1 = document.querySelector(".k1")
let k2 = document.querySelector(".k2")
let k3 = document.querySelector(".k3")
let k4 = document.querySelector(".k4")
let k5 = document.querySelector(".k5")
let k6 = document.querySelector(".k6")
let k7 = document.querySelector(".k7")
let start = document.querySelector(".start")

/* const randomDamageCreator = () => {
    Math.floor(Math.random() * 7 + 1);
} */

let knightArray = [
    {name: k1.innerHTML, val: initialPointK1}, 
    {name: k2.innerHTML, val: initialPointK2}, 
    {name: k3.innerHTML, val: initialPointK3}, 
    {name: k4.innerHTML, val: initialPointK4}, 
    {name: k5.innerHTML, val: initialPointK5}, 
    {name: k6.innerHTML, val: initialPointK6}, 
    {name: k7.innerHTML, val: initialPointK7}, 
]
//console.log(knightArray);
let knightArrayValues = [100, 100, 100, 100, 100, 100, 100]



const hitFunction = () => {
    do{
        knightArray.filter((item) => item.val > 0).map((knight) => {
            let damagePoint = Math.floor(Math.random() * 7 + 1);
            const index = knightArray.indexOf(knight)

            if(knightArray.length === 1){
                console.log(`${knightArray[0].name} won the game with ${knightArray[0].val} points`);
                knightArray[0].val -= 100;
                knightArray.splice(0, 1)
            }
            else{

                knight.val -= damagePoint;
                if(index === knightArray.length-1){
                
                    console.log(`${knight.name} hit ${knightArray[0].name} with ${damagePoint} damage points`);
                    if(knightArray[0].val <= 0){
                        console.log(`${knightArray[0].name} tükendi.`);
                    
                        knightArray.splice(0, 1)
                    }
                
                }
                else {
                    console.log(`${knight.name} hit ${knightArray[index+1].name} with ${damagePoint} damage points`);
                    if(knightArray[index+1].val <= 0){
                        console.log(`${knightArray[index+1].name} tükendi.`);
                    
                        knightArray.splice(index+1, 1)
                    }
                
                }
            }
            
        })
    }while(knightArray.length > 0)
    
}



start.addEventListener('click', hitFunction)

