const prompts = require('../prompts.json')

export const getPrompt = () => {
    const randomInt = Math.floor(Math.random() * 10)
    return prompts.exercises[randomInt].sentence
}