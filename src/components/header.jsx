import { DesktopNav } from "./desktopNav"
import { MobileNav } from "./mobileNav"

export function Header({ device }){



    return (
        <>
            <div className={`${device.type}-header header`}>

                <div className={`inner-${device.type}-header inner-header`}>

                    <span className="logo-container">
                        Purpose
                    </span>

                    {device.type === "small" ? <MobileNav /> : <DesktopNav /> }

                </div>

            </div>
        </>
    )
}