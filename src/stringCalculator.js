const add = (numbers) => {
    if(numbers === "") return 0
    numbers = numbers.replace(/\n/g, ",")
    return numbers.split(",").reduce((sum, num) => sum + Number(num), 0)
}

module.exports = { add }