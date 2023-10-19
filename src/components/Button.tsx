interface IProps {
    text: string;
}

function Button({ text }: IProps) {
    return (
        <button className="flex gap-4 items-center bg-gray-400 text-white text-sm px-8 py-3 w-fit rounded-full">{text}</button>
    )
}

export default Button;