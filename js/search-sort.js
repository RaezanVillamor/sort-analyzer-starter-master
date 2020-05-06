// Library of Search & Sort Functions

// Use Bubble Sort algorithm to sort array argument
function bubbleSort(anArray) {
    //loopthrough the entire array in order to compare stuff
    for(let i = 0; i<anArray.length; i++) {

        for (let r = 0; r < anArray.length; r++) {
            //comparing adjacents and swapping if needed
            if (anArray[r] > anArray[r+1]) {
                //set index temporarily to the left one
                let index = anArray[r];
                //This says "hey if im smaller than this number move me to the left"
                anArray[r] = anArray[r + 1];
                //Then a new index is assigned
                anArray[r+1] = index;

            }
        }
    }
}

// Use Selection Sort algorithm to sort array argument
function selectionSort(anArray) {
//looooooooop :)
    for (let i = 0; i < anArray.length; i++) {
        //set min position to fill slot
        let min = i;

        for (let r = i + 1; r < anArray.length; r++ ) {
            //if min vaal is > than the right of min do the stuff im about to type
            if (anArray[min] > anArray[r]) {
                //set min pos. to the pos. of the current
                min = r;
            }
        }
         //set index to min
         let index = anArray[i];
         anArray[i] = anArray[min];
         anArray[min] = index;
    }
       
}

// Use Insertion Sort algorithm to sort array argument
function insertionSort(anArray) {
//more loops yay.
    for (let i = 1; i <anArray.length; i++) {
        //insert value
        let r = i-1

        //temporary postion for insert
        let index = anArray[i];

        ////move valie in index
        while ( r >= 0 && anArray[r] > index) {
            anArray[r+1] = anArray[r];
            r--;

        }
        anArray[r + 1] = index;
    }
}