import React from 'react'
import Link from 'next/link'
function LandingPage() {
    return (
        <div>
            WELCOME TO LANDING PAGE<br/>
            <Link href="/quiz"><a>WELCOME TO QUIZ PAGE</a></Link>
        </div>
    )
}

export default LandingPage
