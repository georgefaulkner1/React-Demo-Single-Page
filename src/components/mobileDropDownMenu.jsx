import { Link } from "react-router-dom";

export function MobileDropDownMenu({show}){

    return (
        <>
            <div className="mobile-drop-down-menu" style={{
                visibility: show ? "visible" : "hidden",
                opacity: show ? 1 : 0,
                top: show ? "50px" : "0"
                
            }}>
                
                <Link className="navLink">Docs</Link>
                <Link className="navLink">Changelog</Link>
                <Link className="navLink">Purchase now</Link>

            </div>
        </>
    )
}