const add = (numbers) => {
    if (numbers === "") return 0
  
    let delimiter = /,|\n/

    if (numbers.startsWith("//")) {
      const delimiterLine = numbers.split("\n")[0]
      delimiter = delimiterLine.substring(2)
      numbers = numbers.slice(delimiterLine.length + 1)
    }
  
    return numbers
        .split(new RegExp(delimiter))
        .reduce((sum, num) => sum + Number(num), 0)
  };
  
module.exports = { add }