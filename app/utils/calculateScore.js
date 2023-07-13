export const calculateScore = (targetText, inputText) => {
    const targetTextWithoutPunctuation = targetText.replace(/[^\w\s\']|_/g, "")
    .replace(/\s+/g, " ");
    const targetTextArray = targetTextWithoutPunctuation.split(' ')
    const inputTextArray = inputText.split(' ')
    let score = 0
    let totalWords = targetTextArray.length
    for (let i in targetTextArray) {
        console.log(targetTextArray[i].toLowerCase())
        console.log(inputTextArray[i].toLowerCase())
        if (targetTextArray[i].toLowerCase() === inputTextArray[i].toLowerCase()) {
            score ++
        }
    }
    console.log(`${score}/${totalWords}`)
    return `${score}/${totalWords}`
}