import Marquee from "react-fast-marquee";
import IntegratedCard from "./IntegratedCard";
import { integratedCardContent, integratedCardContentBottom } from "@utils/constant";
function IntegratedMarquee() {
    return (
        <div className="flex flex-col gap-16">
            <Marquee direction="left">
                {integratedCardContent.map(content => <IntegratedCard key={content.id} title={content.title} description={content.description} image={content.image} install={content.install} rate={content.rate} />)}
            </Marquee>
            <Marquee direction="right">
                {integratedCardContentBottom.map(content => <IntegratedCard key={content.id} title={content.title} description={content.description} image={content.image} install={content.install} rate={content.rate} />)}
            </Marquee>
        </div>
    )
}

export default IntegratedMarquee;