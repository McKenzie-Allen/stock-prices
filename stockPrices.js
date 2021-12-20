function best(numArr) {
    let sell = Math.max(...numArr)
    let buy = Math.min(...numArr)
    if (numArr.indexOf(buy) < numArr.indexOf(sell)) {
        return "There is no profit!"
    } else if (numArr.indexOf(sell) < numArr.indexOf(buy)) {
        return `buy at $${buy}, sell at $${sell} and $${sell - buy} would be your profit`
    } else {
        return "There is no profit!"
    }
}

console.log(best([15, 10, 20, 22, 1, 9]))
console.log(best([1, 9]))
console.log(best([9, 1]))
console.log(best([100]))