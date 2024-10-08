"use client"
import React from "react";
import { Cover } from "@/components/ui/cover";
import Link from "next/link";

export function CoverDemo() {
    return (
        <div>
            {/* <h1 className="text-4xl md:text-4xl lg:text-6xl font-semibold max-w-7xl mx-auto text-center mt-6 relative z-20 py-6 bg-clip-text text-transparent bg-gradient-to-b from-neutral-800 via-neutral-700 to-neutral-700 dark:from-neutral-800 dark:via-white dark:to-white">
        Build amazing websites <br /> at <Cover>warp speed</Cover>
      </h1> */}
            <h1 className="text-4xl md:text-4xl lg:text-6xl font-semibold max-w-7xl mx-auto text-center mt-6 relative z-20 py-6 bg-clip-text text-transparent bg-gradient-to-b from-white via-white to-white dark:from-white dark:via-white dark:to-white">
            Gamified Platform to Promote Anti-Doping and Clean Sports 
            <Link href={'https://dope-cop-host.vercel.app/'}>
            <Cover>Play</Cover>
            </Link>
            </h1>

        </div>
    );
}
