interface ScoreTypes {
    score: string;
}

export const Score = (props: { score: ScoreTypes['score'] }) => {
    return (
        <div className="flex justify-center">
            <div className="rounded-full p-10 bg-white text-3xl flex justify-center text-black">{props.score}</div>
        </div>
    );
};