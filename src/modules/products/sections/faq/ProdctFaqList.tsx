import Accordion from "@components/Accordion"
import { productFaqContentLeft, productFaqContentRight } from "@utils/constant";
import { useState } from "react"

export default function ProdctFaqList() {
    const [open, setOpen] = useState(-1);
    return (
        <div className="flex gap-8">
            <div className="w-1/2 flex flex-col gap-4">
                {productFaqContentLeft.map(content => <Accordion key={content.id} type="fill" id={content.id} open={open} setOpen={setOpen} description={content.description} title={content.title} />)}
            </div>
            <div className="w-1/2 flex flex-col gap-4">
                {productFaqContentRight.map(content => <Accordion key={content.id} type="fill" id={content.id} open={open} setOpen={setOpen} description={content.description} title={content.title} />)}
            </div>
        </div>
    )
}
