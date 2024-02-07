function reverseString(string) {
    // 0. check if word has one character
    // if (string.length = 1) return string

    let revStr = ""
    for (let i = string.length - 1; i >= 0; i--) {
        revStr += string[i]
    }
    return revStr
}

module.exports = reverseString

