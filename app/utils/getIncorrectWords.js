export const getIncorrectWords = (targetText, inputText) => {
    const targetTextWithoutPunctuation = targetText.replace(/[^\w\s\']|_/g, "")
    .replace(/\s+/g, " ");
    const targetTextArray = targetTextWithoutPunctuation.split(' ')
    const inputTextArray = inputText.split(' ')
    let wrongWords = []
    for (let i in targetTextArray) {
        if (targetTextArray[i].toLowerCase() !== inputTextArray[i].toLowerCase()) {
            wrongWords.push(i)
        }
    }
    return wrongWords
}