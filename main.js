//Given an array of integers, return a new array with each value doubled.

// For example:

// [1, 2, 3] --> [2, 4, 6]

function maps(x){
    //defines a new array that is empty
    let doubleArr = []
    //creates a for loop that goes through the entire array
    for(let i=0; i<x.length; i++){
        //pushes (adds) an item to the array doubleArr
      doubleArr.push(x[i] * 2)
    }
    return doubleArr
  }