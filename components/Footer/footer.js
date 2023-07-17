"use client"
import { useRouter } from "next/navigation"
import Link from "next/link"

const Footer = () => {
    const router = useRouter()

    return(
        <div className="footer">
            <h1 className="footer-title">uiafersex</h1>
            <p className="footer-description"><Link href="https://tanaydesai.vercel.app/">Tanay Desai →</Link></p>
        </div>
    )
}

export default Footer