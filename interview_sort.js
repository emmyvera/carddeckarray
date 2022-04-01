var cards = ['Jack', 8, 2, 6, 5, 3]

// Implemented a Bubble Sort Algorithm
function cardSort(arr){

    for(let a=0; a < arr.length; a++){
        // Ranked the Officials Numerically
        if (arr[a] === 'Jack'){
            arr[a] = 11
        }

        if (arr[a] === 'Queen'){
            arr[a] = 12
        }

        if (arr[a] === 'King'){
            arr[a] = 13
        }
    } 

    for (let i=0; i < arr.length; i++){        

        for (let j = 0; j < (arr.length - i -1); j++){
            
            if(arr[j+1] < arr[j]){
                // Swapping
                var temp = arr[j]
                arr[j] = arr[j+1]
                arr[j+1] = temp
            }
        }
    }

    // // // Ranked the Officials Back to it original form
    for (let k=0; k < arr.length; k++){
        if (arr[k] === 11){
            arr[k] = 'Jack'
        }
    
        if (arr[k] === 12){
            arr[k] = 'Queen'
        }
    
        if (arr[k] === 13){
            arr[k] = 'King'
        }
    }
    
    return arr;
}

console.log(cardSort(cards))