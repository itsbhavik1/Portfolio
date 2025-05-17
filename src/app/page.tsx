"use client";

import Link from "next/link";
import Image from "next/image";
import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";
import AllBadges from "@/components/ui/all-badges";
import AllProjects from "@/components/ui/all-projects";
import AllEducation from "@/components/ui/all-education";
import { Spotlight } from "@/components/ui/spotlight";
import { Card, CardContent } from "@/components/ui/card";
import LinkedIn from "@/components/svg/linked-in";
import Github from "@/components/svg/github";
import { Separator } from "@/components/ui/separator";
import { Moon } from "lucide-react";

export default function Home() {
  const { theme, setTheme } = useTheme();

  return (
    <div className="overflow-hidden">
      <div className="max-w-3xl px-4 mx-auto py-10 relative">
        <Spotlight />
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-10 md:justify-between">
          <div className="md:flex-1">
            <h1 className="text-4xl font-bold text-center md:text-left">
              Kon&apos;nichiwa! I'm{" "}
              <b className="hover:underline transition-all duration-100">
                Bhavik Vishal Sharma
              </b>{" "}
              👋
            </h1>
            <p className="mt-6 text-muted-foreground max-w-md text-md font-medium text-center md:text-left">
              Seasoned Fullstack Engineer with 3 years of experience in building
              web apps. I'm confident in taking projects from scratch to
              production. Skilled in both frontend and backend, with a small
              knack for deployment.
            </p>
          </div>
          <div className="relative flex-none">
            <div className="rounded-full h-[180px] w-[180px] overflow-hidden border-2 border-accent">
              <Image
                className="object-cover w-full h-full"
                src="/Portfolio.png"
                alt="Bhavik"
                width={150}
                height={150}
                priority
              />
            </div>
          </div>
        </div>
        <div className="py-10">
          <p className="text-2xl font-semibold">Skills</p>
          <div className="flex flex-wrap gap-2 mt-2">
            <AllBadges />
          </div>
        </div>
        <div className="py-10 mx-auto flex flex-col items-center gap-2">
          <Button size="sm" variant="secondary">
            My Projects
          </Button>
          <h1 className="text-5xl font-semibold">Check out my latest work</h1>
          <h3 className="text-muted-foreground text-center text-lg font-medium">
            I've worked on a variety of projects, from simple websites to
            complex web applications. Here are a few of my favorites.
          </h3>
          <AllProjects />
        </div>
        <div className="py-10">
          <p className="text-2xl font-semibold">Education</p>
          <AllEducation />
        </div>
        <div className="py-2 pb-20 flex flex-col items-center gap-2">
  <Button size="sm" variant="secondary">
    Contact
  </Button>
  <h1 className="text-5xl font-semibold mt-1">Get in Touch</h1>
  <p className="text-muted-foreground text-center text-lg font-medium max-w-xl mx-auto">
    Want to chat? Connect with me on{' '}
    <Link
      href="https://www.linkedin.com/in/bhavik-sharma-09a6391ab/"
      target="_blank"
      className="text-blue-500 hover:underline"
    >
      LinkedIn
    </Link>{' '}
    and I'll respond whenever I can.
  </p>
</div>

        <div className="fixed bottom-10 left-[50%] translate-x-[-50%] w-70 h-10 z-10">
          <Card className="w-70 h-14 flex items-center justify-center bg-transparent backdrop-blur-sm border">
            <CardContent className="flex items-center justify-center gap-3">
              <Link
                href="https://www.linkedin.com/in/bhavik-sharma-09a6391ab/"
                target="_blank"
                className="dark:hover:bg-[#262626] hover:bg-[#F4F4F5] p-2 rounded-md cursor-pointer"
              >
                <LinkedIn />
              </Link>
              <Link
                href="https://github.com/itsbhavik1"
                target="_blank"
                className="dark:hover:bg-[#262626] hover:bg-[#F4F4F5] p-2 rounded-md cursor-pointer"
              >
                <Github />
              </Link>
              
              <Separator orientation="vertical" />
              <div
                className="dark:hover:bg-[#262626] hover:bg-[#F4F4F5] p-2 rounded-md cursor-pointer"
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              >
                <Moon />
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
