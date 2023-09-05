

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

const randomDamageCreator = () => {
    Math.floor(Math.random() * 7 + 1);
}

let knightArray = [k1, k2, k3, k4, k5, k6, k7]
console.log(knightArray.values);
//let knightArrayValues = [100, 100, 100, 100, 100, 100, 100]

 const hitFunction = () => {
    
    do{
        
        for(let i = 1; i <= knightArray.length; i++){
        
            switch (i){
                case 1: 
                    {
                        
                        let damagePoint = Math.floor(Math.random() * 7 + 1);
                        console.log(`k${i} hit k${i+1}, caused ${damagePoint} points damage.`);
                        initialPointK2 -= damagePoint; 
                        k2.innerHTML = `k${i+1} = ${initialPointK2}`;
                        if(initialPointK2 <= 0){
                            console.log(`k${i+1} tükendi`);
                            knightArray.splice(2,1)
                        }
                        break;}
                case 2: 
                    {
                        
                        let damagePoint = Math.floor(Math.random() * 7 + 1);
                        console.log(`k${i} hit k${i+1}, caused ${damagePoint} points damage.`);
                        initialPointK3 -= damagePoint; 
                        k3.innerHTML = `k${i+1} = ${initialPointK3}`;
                        if(initialPointK3 <= 0){
                            console.log(`k${i+1} tükendi`);
                            knightArray.splice(3,1)
                        }
                        break;}
                case 3: 
                    {
                        
                        let damagePoint = Math.floor(Math.random() * 7 + 1);
                        console.log(`k${i} hit k${i+1}, caused ${damagePoint} points damage.`);
                        initialPointK4 -= damagePoint; 
                        k4.innerHTML = `k${i+1} = ${initialPointK4}`;
                        if(initialPointK4 <= 0){
                            console.log(`k${i+1} tükendi`);
                            knightArray.splice(4,1)
                        }
                    break;}
                case 4: 
                    {
                        
                        let damagePoint = Math.floor(Math.random() * 7 + 1);
                        console.log(`k${i} hit k${i+1}, caused ${damagePoint} points damage.`);
                        initialPointK5 -= damagePoint; 
                        k5.innerHTML = `k${i+1} = ${initialPointK5}`;
                        if(initialPointK5 <= 0){
                            console.log(`k${i+1} tükendi`);
                            knightArray.splice(5,1)
                        }
                        break;}
                case 5: 
                    {
                        
                        let damagePoint = Math.floor(Math.random() * 7 + 1);
                        console.log(`k${i} hit k${i+1}, caused ${damagePoint} points damage.`);
                        initialPointK6 -= damagePoint; 
                        k6.innerHTML = `k${i+1} = ${initialPointK6}`;
                        if(initialPointK6 <= 0){
                            console.log(`k${i+1} tükendi`);
                            knightArray.splice(6,1)
                        }
                        break;}
                case 6: 
                    {
                        
                        let damagePoint = Math.floor(Math.random() * 7 + 1);
                        console.log(`k${i} hit k${i+1}, caused ${damagePoint} points damage.`);
                        initialPointK7 -= damagePoint; 
                        k7.innerHTML = `k${i+1} = ${initialPointK7}`;
                        if(initialPointK7 <= 0){
                            console.log(`k${i+1} tükendi`);
                            knightArray.splice(7,1)
                        }
                        break;}
                case 7: 
                    {
                        let damagePoint = Math.floor(Math.random() * 7 + 1);
                        console.log(`k${i} hit k1, caused ${damagePoint} points damage.`);
                        initialPointK1 -= damagePoint; 
                        k1.innerHTML = `k1 = ${initialPointK1}`;
                        if(initialPointK1 <= 0){
                            console.log(`k1 tükendi`);
                            knightArray.splice(1,1)
                        }
                        break;
                        
                    }
                    
            }
            
             
        }
    }while((initialPointK1 > 0) || (initialPointK2 > 0) || (initialPointK3 > 0) || (initialPointK4 > 0) || (initialPointK5 > 0) || (initialPointK6 > 0) || (initialPointK7 > 0))

    /* setTimeout(() => {
        
    }, 2000); */
    
 }


start.addEventListener('click', hitFunction())



/*  
            */
