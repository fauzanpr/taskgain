interface IProps {
    text: string;
    theme?: "light" | "normal" | "dark"
}

function Button({ text, theme = "normal" }: IProps) {
    if (theme === "normal") {
        return (
            <button className="flex gap-4 items-center bg-primary hover:bg-primaryHover text-white text-sm px-8 py-3 w-fit rounded-full">{text}</button>
        )
    } else if (theme === "light") {
        return (
            <button className="flex gap-4 items-center bg-white text-black border border-primary hover:bg-primaryHover text-sm px-8 py-3 w-fit rounded-full">{text}</button>
        )
    } else if (theme === "dark") {
        return (
            <button className="flex gap-4 items-center bg-gray-600 text-white text-sm px-8 py-3 w-fit rounded-full">{text}</button>
        )
    }
}

export default Button;