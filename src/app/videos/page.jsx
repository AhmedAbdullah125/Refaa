"use client";
import React, { useState } from "react";
import Image from "next/image";
import img1 from "../../assets/images/aboutmini.webp";
import Link from "next/link";
import NumberTicker from "@/components/ui/number-ticker";
import { BorderBeam } from "@/components/ui/border-beam";
import ShinyButton from "@/components/ui/shiny-button";
import GridPattern from "@/components/ui/grid-pattern";
import { cn } from "@/lib/utils";
export default function page() {
    let vids = [

    ]
    return (
        <div className="mb-24 p-5">
            <div className="container m-auto ">
                <h2 className=" text-4xl lg:text-5xl font-bold mb-7 lg:mb-10">
                    <span className="text-primaryColor"> فيديوهات </span>
                    من اعمالنا
                </h2>
            </div>
            <div className="relative flex py-8 w-full flex-col items-center justify-center overflow-hidden rounded-lg border bg-background md:shadow-xl">
                <div className="z-10 whitespace-pre-wrap w-full text-center text-5xl font-medium tracking-tighter text-black dark:text-white">
                    <div className="container m-auto">
                        <div className="vids-cont w-full">
                            <div className="vid">
                                <iframe src="https://www.youtube.com/embed/jUkS-2ZTOYE?si=F1e2lkkPpe5uZJSs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                            </div>
                            <div className="vid">
                                <iframe src="https://www.youtube.com/embed/Fg3CI0Eiwtk?si=fpyahDTF8vUfHkIB" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                            </div>
                            <div className="vid">
                                <iframe src="https://www.youtube.com/embed/FLVfzkCCdsY?si=9qry3Rkxe4pUitGK" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                            </div>
                            <div className="vid">
                                <iframe src="https://www.youtube.com/embed/jUkS-2ZTOYE?si=F1e2lkkPpe5uZJSs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                            </div>
                        </div>
                    </div>
                </div>
                <GridPattern
                    squares={[
                        [4, 4],
                        [5, 1],
                        [8, 2],
                        [5, 3],
                        [5, 5],
                        [10, 10],
                        [12, 15],
                        [15, 10],
                        [10, 15],
                        [15, 10],
                        [10, 15],
                        [15, 10],
                    ]}
                    className={cn(
                        "[mask-image:radial-gradient(400px_circle_at_center,white,transparent)]",
                        "inset-x-0 inset-y-[-30%] h-[200%] skew-y-12",
                    )}
                />
            </div>
        </div>
    );
}
