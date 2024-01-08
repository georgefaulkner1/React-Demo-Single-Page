import { BackgroundAnimation } from "./backgroundAnimation"
import { Header } from "./header"
import { Login } from "./login"
import { Quote } from "./quote"

export function Container({ device }){

    return (
        <>
            <div className={`${device.type}-container`}>

                <Header device={device} />

                <div className={`${device.type}-hero hero`}>

                    {device.type !== "small" ? <Quote /> : ""}

                    <Login />

                </div>

                <BackgroundAnimation />

            </div>
        </>
    )
}