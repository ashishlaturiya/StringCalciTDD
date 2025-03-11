const add = (numbers) => {
    if (numbers === "") return 0

    let delimiter = /,|\n/ // Default delimiters: comma (`,`) or newline (`\n`)

    if (numbers.startsWith("//")) {
        const delimiterLine = numbers.split("\n")[0]
        delimiter = delimiterLine.substring(2) // Extract delimiter
        numbers = numbers.slice(delimiterLine.length + 1) // Remove delimiter line
    }

    const numArray = numbers.split(new RegExp(delimiter)).map(Number)
    const negativeNumbers = numArray.filter(num => num < 0)

    if (negativeNumbers.length > 0) {
        throw new Error(`negative numbers not allowed ${negativeNumbers.join(",")}`)
    }

    return numArray.reduce((sum, num) => sum + num, 0)
}

module.exports = { add }