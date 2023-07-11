interface PromptTypes {
    randomPrompt: string;
}

export const Prompt = (props: { randomPrompt: PromptTypes['randomPrompt'] }) => {
    return (
        <div className="m-6 p-2 bg-white text-black">{props.randomPrompt}</div>
    );
};