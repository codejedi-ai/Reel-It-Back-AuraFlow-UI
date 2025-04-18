"use client";

// import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";


export default function Home() {
  return (
    <div className="flex flex-col items-center bg-[#0A0E1A]">
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="space-y-2 relative">
              <div className="absolute -top-8 -right-4 w-24 h-24 bg-emerald-500/30 rounded-full blur-xl"></div>
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl bg-clip-text text-transparent bg-gradient-to-r from-[#F72585] via-[#7209B7] to-[#4CC9F0]">
                Welcome to Reel It Back
              </h1>
              <p className="mx-auto max-w-[700px] text-gray-300 md:text-xl">
                Social media like you've never vibed with before.
              </p>
            </div>
            <div className="space-x-4">
              <Link
                href="/philosophy"
                className="inline-flex h-10 items-center justify-center rounded-md bg-purple-600 px-8 text-sm font-medium text-white shadow transition-colors hover:bg-purple-700 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-purple-700"
              >
                Join our Waitlist
              </Link>
            </div>
          </div>
        </div>
      </section>


    </div>
  );
}