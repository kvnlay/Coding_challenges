// Beautiful days

function beautifulDays(i, j, k) {
    let numOfDays = 0;
    for (let b = i; b <= j; b++){
        let reversedNum = parseInt(b.toString().split('').reverse().join(''));
        if (Math.abs(b - reversedNum) % k === 0) {
            numOfDays++;
        }
    }
    return numOfDays;
}

// Minimum Distances
function minimumDistances(a) {
let minDistanceArray = []
    for (let i = 0; i < a.length; i++){
        for (let j = 1; j < a.length ; j++){
            if (i !== j && a[i] == a[j]) {
                console.log('this is j: ' + j + 'this is i:' + i);
                minDistanceArray.push(Math.abs(j-i));
            }
        }
    }
    if (minDistanceArray.length > 0) {
        return Math.min(...minDistanceArray);
    } else {
        return -1;
}
}
