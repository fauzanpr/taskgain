interface IProps {
    text: string;
    theme?: "light" | "dark"
}

function Button({ text, theme = "dark" }: IProps) {
    if (theme === "dark") {
        return (
            <button className="flex gap-4 items-center bg-gray-400 text-white text-sm px-8 py-3 w-fit rounded-full">{text}</button>
        )
    } else if (theme === "light") {
        return (
            <button className="flex gap-4 items-center bg-white text-black border border-gray-500 text-sm px-8 py-3 w-fit rounded-full">{text}</button>
        )
    }
}

export default Button;