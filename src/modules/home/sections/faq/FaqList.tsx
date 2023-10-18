import Accordion from "@components/Accordion"
import { useState } from "react"
import { faqContent } from "src/utils/constant"

function FaqList() {
    const [open, setOpen] = useState(-1);
    return (
        <>
            {faqContent.map((faq) => <Accordion key={faq.id} open={open} setOpen={setOpen} id={faq.id} description={faq.description} title={faq.title} />)}
        </>
    )
}

export default FaqList