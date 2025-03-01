"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const HeroSection = () => {
  const imageRef = useRef(null);

  useEffect(() => {
    const imageElement = imageRef.current;

    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const scrollThreshold = 100;

      if (scrollPosition > scrollThreshold) {
        imageElement.classList.add("scrolled");
      } else {
        imageElement.classList.remove("scrolled");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="w-full pt-36 md:pt-48 pb-10">
  <div className="space-y-6 text-center">
    {/* Heading and Subtext */}
    <div className="space-y-6 mx-auto">
      <h1 className="text-5xl font-bold md:text-6xl lg:text-7xl xl:text-8xl gradient-title animate-gradient">
        Your AI Career Coach for <br />
        Professional Success
      </h1>
      <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl">
        Advance your career with personalized guidance, interview prep, and AI-powered tools for job success.
      </p>
    </div>

    {/* Buttons Section */}
    <div className="flex justify-center space-x-4">
      <Link href="/dashboard">
        <Button size="lg" className="px-8">Get Started</Button>
      </Link>
      <Link href="http://localhost:3001/">
        <Button size="lg" variant="outline" className="px-8">Live Mentorship!</Button>
      </Link>
    </div>

    {/* Hero Image */}
    <div className="mt-10 flex justify-center">
      <div ref={imageRef} className="hero-image">
        <Image
          src="/banner.jpeg"
          width={1280}
          height={720}
          alt="Dashboard Preview"
          className="rounded-lg shadow-2xl border"
          priority
        />
      </div>
    </div>
  </div>
</section>

  );
};

export default HeroSection;
