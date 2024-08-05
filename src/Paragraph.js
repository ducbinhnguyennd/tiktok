import { useContext } from "react";
import { ThemeContext } from "./ThemeContext";

function Paragraph() {
    const context = useContext(ThemeContext)
    return(
        <p className={context.theme}>
            Contexx asdjaosdjosajdio sadha ishdahsdjh asdjasdjkhk jashdkj asdjasdhasd';sdjk ljdaksjd álkjd
        </p>
    )
}

export default Paragraph