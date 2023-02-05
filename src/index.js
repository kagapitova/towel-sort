// You should implement your task here.
module.exports = function towelSort(arr) {
    let arr2 = [];
    if (arr === undefined) {
        return []
    }
    for (let i = 0; i < arr.length; i++) {
        if(i%2!==0){
            arr2 = arr2.concat(arr[i].reverse())
        } else {
            arr2 = arr2.concat(arr[i])
        }

    }
    return arr2;
};
