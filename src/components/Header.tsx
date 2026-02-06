"use client"

import { useState, useEffect } from "react";

import Link from "next/link";

//import FromData from "@types/form" //For Vercel

/* For Vercel */

interface FormData {
  name: string;
  price: number;
  type: string;
  image: File | null; // optional image file
  selected: boolean;
}



function Header() {
    const [wardrobeCost, setWardrobeCost] = useState<number>(0);

    const calculateWardrobeCost = (): number =>{
        const storedWardrobe = localStorage.getItem('wardrobe');

        // If there is no data in localStorage, return 0
        if (!storedWardrobe) return 0;
        try {
            const parsedWardrobe = JSON.parse(storedWardrobe);
            // Check if the parsed data is an array and sum the prices
            if (!Array.isArray(parsedWardrobe)) return 0;
            return parsedWardrobe.reduce((total, item) => { 
                    return total + (item.price || 0);
                }, 0);
        } catch (error) {
            console.error('Error parsing wardrobe data:', error);
            return 0; // If there is any error during parsing, return 0
        }
    }

    /* Hack to quickly get the functionality
     * We will have a small amount of clohtes, so it won't matter
     */
    useEffect(() => {
        const interval = setInterval(() => {
            setWardrobeCost(calculateWardrobeCost());
        }, 200);
        return () => clearInterval(interval); // Clean up on component unmount
    }, []); // Runs once when the component mounts

    return (
        <div className="header">
            <header>
                <div className="AppTitle">
                    <h1>
                        <b>Wardrobe Forecast</b>
                    </h1>
                </div>
                <div className="Status">
                    <h1> Total wardrobe cost: <b>${wardrobeCost}</b></h1>
                    <h1 style={{paddingLeft: "1em"}}> Cost of last outfit: <b>$0</b></h1>
                </div>
            </header>
        </div>
    );
}

export default Header
