import React from "react"
import Link from "next/link"
 export default function About() {
    return(
        <div>
            <div className="p-8 bg-gray-50 min-h-screen">
                <h2 className="text-4xl font-semibold mb-4 text-center">
                    About us
                </h2>
                <div className="grid md:grid-cols-2 gap-8">
                    <div>
                    <h3 className="text-4xl font-semibold mb-4 pl-4">
                    About me </h3>
                        <p className="text-lg text-gray-700">
                        <p>I am a student of FSc-II</p>
                        <p>Learning Artificial intellegence</p>
                        <p>and currently work on the frontend development in Next.js</p>
                        <p>SEO expert</p>
                        <p>I am always looking forward to Learning a new thing and improve my skills</p>
                        </p>
                    </div>
                    <div>
                        <h3 className="text-2xl font-semibold mt-4">Skills</h3>
                        <ul className="list-disc ml-4 text-gray-700">
                            <li>Html</li>
                            <li>CSS</li>
                            <li>Typescript</li>
                            <li>React</li>
                            <li>Tailwind</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}