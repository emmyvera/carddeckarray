var cards = ["Queen", 9,"Queen", 7, "Queen", 3,"King",  5, "King", 4, "Jack", "King", 6, 1, "Jack", 3]


function sortArrays(arr){ 

    // Finding  length of array 'arr'
    let length = arr.length;

    // Sorting using a single loop

    for (let j = 0; j < length - 1; j++) {
        // Checking the condition for two

        // simultaneous elements of the array

        // This Code Convert the officiers Jack, Queen and King to 11,12,13 Respectively
        if(arr[j]==="Jack"){
            arr[j] = 11
        }

        if(arr[j+1]==="Jack" ){
            arr[j+1] = 11
        }
        
        if(arr[j]==="Queen" ){
            arr[j] = 12
        }

        if(arr[j+1]==="Queen" ){
            arr[j+1] = 12
        }

        if(arr[j]==="King" ){
            arr[j] = 13
        }

        if(arr[j+1]==="King" ){
            arr[j+1] = 13
        }
        

        if (arr[j] > arr[j + 1]) {



            // Swapping the elements.
            

            let temp = arr[j];

            arr[j] = arr[j + 1];
            
            arr[j + 1] = temp;


            // updating the value of j = -1

            // so after getting updated for j++

            // in the loop it becomes 0 and

            // the loop begins from the start.

            j = -1;

        }
        
        // This Code Convert the ranked officiers from 11,12,13 to Jack, Queen and King Respectively
        if (arr[j]=== 11) {
            arr[j]='Jack'
        }
        
        if (arr[j]=== 12) {
            arr[j]='Queen'
        }
        
        if (arr[j]=== 13) {
            arr[j]='King'
        }

        if (arr[j+1]=== 11) {
            arr[j+1]='Jack'
        }
        
        if (arr[j+1]=== 12) {
            arr[j+1]='Queen'
        }
        
        if (arr[j+1]=== 13) {
            arr[j+1]='King'
        }
                    
    }
    return arr;
}
console.log(sortArrays(cards))
