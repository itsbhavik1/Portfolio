import React from "react";
import Image from "next/image";

const achievementsData = [
  {
    title: "Google Hackathon Winners",
    description: "Secured a Top 10 position out of 25,000+ participants in the HackwithIndia Hackathon, with the finals held at the Google Office, Gurugram. Built a trading bot on Aptos blockchain powered by real-time sentiment analysis for informed trading decisions.",
    image: "/Google.jpg",
  },
  {
    title: "Winner of UIET hackathon",
    description: "Secured 2nd position at Technovate Hackathon 2025, organized by Google Developer Groups (GDG) at UIET, Chandigarh. Developed an AI-powered solution using CopilotKit, showcasing innovation and impact. Gained valuable inspiration from top-performing blockchain projects, fueling further exploration and success in future hackathons.",
    image: "/UIET.jpg",
  },
  {
    title: "ACM Session Lead",
    description: "Delivered a session on Competitive Programming Tips and Tricks alongside peers under the banner of PEC ACM CSS. Shared problem-solving strategies with fellow students, contributing to a collaborative learning experience.",
    image: "/acmsession.jpg",
  },
];

const AchievementCard = ({ achievement }: { achievement: (typeof achievementsData)[0] }) => {
  return (
    <div className="flex items-center gap-8">
      <div className="w-1/2">
        <h3 className="text-3xl font-bold text-center mb-4">{achievement.title}</h3>
        <p className="text-muted-foreground">{achievement.description}</p>
      </div>
      <Image
        src={achievement.image}
        alt={achievement.title}
        width={300}
        height={100}
        sizes="(max-width: 768px) 100vw, 400px"
        className="rounded-md w-1/2"
      />
    </div>
  );
};

const AllAchievements = () => {
  return (
    <div className="grid grid-cols-1 gap-8">
      {achievementsData.map((achievement, index) => (
        <AchievementCard key={index} achievement={achievement} />
      ))}
    </div>
  );
};

export default AllAchievements;
