import CountUp from "react-countup"

interface IProps {
    end: number
};

function StatsCounter({ end }: IProps) {
    return (
        <CountUp start={0} end={end} delay={0}>
            {({ countUpRef }) => (
                <p className="text-3xl lg:text-5xl font-semibold text-white mb-4"><span ref={countUpRef as React.RefObject<HTMLDivElement>} />K</p>
            )}
        </CountUp>
    )
}

export default StatsCounter;