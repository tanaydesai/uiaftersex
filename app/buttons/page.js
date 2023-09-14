"use client"
import Button1 from "@/components/Buttons/button1"
import Button2 from "@/components/Buttons/button2"
import Button3 from "../../components/Buttons/button3"

const Home = () => {

    return(
        <div className="content">
            <div className="content-box m-auto grid gap-3">
                <Button1 />
                <Button2 />
                <Button3 />
            </div>
        </div>
    )
}

export default Home