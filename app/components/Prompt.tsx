interface PromptTypes {
    randomPrompt: string;
    incorrectWords: Array<any>;
}

export const Prompt = (props: PromptTypes ) => {
    const splitPrompt = props.randomPrompt?.split(' ')
    console.log(props.incorrectWords)
    return (
        <div className="flex m-3">
            {
                splitPrompt.map((word, i) => {
                    return <div className={`text-black ${props.incorrectWords.includes(i.toLocaleString()) ? "bg-red-300" : "bg-white"} p-1`}>{word}</div>
                })
            }
        </div>
        // <div className="m-6 p-2 bg-white text-black">{props.randomPrompt}</div>
    );
};