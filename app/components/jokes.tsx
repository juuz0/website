"use client";

import { useEffect, useState } from "react";
import { Philosopher } from 'next/font/google'

const philosopher = Philosopher({
    weight: '400',
    subsets: ['latin'],
})

export default function Jokes() {
    const [joke, setJoke] = useState("");

    const generate = () => {
        fetch("https://api.chucknorris.io/jokes/random").then(async (resp) => {
            const jsonStr = await resp.json();
            setJoke(jsonStr["value"]);
        });
    }

    useEffect(() => {
        generate();
    }, []);

    return (
        <div className={`text-xl mt-4 md:mt-12 text-center border-t-2 border-blue-900 
        italic pt-8 items-center flex flex-row justify-center ${philosopher.className}`}>
            <p> {joke} </p>
        </div>
    );
}
