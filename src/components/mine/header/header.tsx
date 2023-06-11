import {
    getTimeOfDay,
    getCurrentDay,
    getCurrentWeekDay,
    getCurrentMonth
} from "../../../functions/getDate";
import { headerStyles } from "./header.css";
import { typographyStyle } from '../../../assets/styles/headding.css'



function Header() {

    return (
        <>
            <header className={headerStyles}>
                <h1 className={typographyStyle({
                    role: "h1"
                })}>
                    Good {getTimeOfDay()}!
                </h1>
                <h2 className={typographyStyle({
                    role: "h2"
                })}>
                    It's {getCurrentWeekDay()}, {getCurrentMonth()} {getCurrentDay()}
                </h2>
            </header>
        </>
    )
}

export default Header;