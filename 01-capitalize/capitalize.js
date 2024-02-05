
function capitalize(word) {
    // 0. check if word is string
    if (typeof word !== 'string') {
        return 'Word must contain alphabetical characters only.'
    }

    // let firstLetter = word[0]

    // 1. check if first letter is upper-cased then return word
    // if (firstLetter.toUpperCase) return word


    // 1. capitalize word's first character
    return word.charAt(0).toUpperCase() + word.slice(1)
}

module.exports = capitalize

// console.log(capitalize('James'));
// console.log(capitalize(James))
// console.log(capitalize('omusiani'));
// console.log(capitalize('pomusiani'));
// console.log(capitalize('romusiani'));
// console.log(capitalize('qomusiani'));
// console.log(capitalize('tomusiani'));
// console.log(capitalize('somusiani'));
