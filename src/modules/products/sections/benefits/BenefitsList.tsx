import { useState } from "react"
import { benefitValues } from "@utils/constant";
import BenefitItem from "./BenefitItem";

function BenefitsList() {
    const [open, setOpen] = useState("");
    return (
        <>
            {benefitValues.map(benefitValue => <BenefitItem key={benefitValue.id} id={benefitValue.id} title={benefitValue.title} description={benefitValue.description} open={open} setOpen={setOpen} />)}
        </>
    )
}

export default BenefitsList