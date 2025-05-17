import Image from "next/image";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";

import { Code, Globe, Video } from "lucide-react";

type Props = {
  project: {
    title: string;
    description: string;
    image?: string;
    video?: string;
    technologies: string[];
    codeLink: string;
    website?: string;
    demoVideo?: string;
    date: string;
    videoDemo?: string;
  };
};

const ProjectCard = ({
  project: {
    title,
    description,
    image,
    video,
    technologies,
    codeLink,
    website,
    date,
    videoDemo,
  },
}: Props) => {
  return (
    <Card
      className="relative flex flex-col justify-between h-full bg-inherit overflow-hidden 
        group transition-all duration-300 hover:shadow-md hover:border-primary/20
        before:absolute before:inset-0 before:bg-gradient-to-r before:from-transparent before:via-primary/5 before:to-transparent
        before:translate-x-[-100%] before:animate-none hover:before:animate-flow"
    >
      <div>
        <CardHeader className="overflow-hidden rounded-lg">
          {image && (
            <div className="relative w-full h-48 overflow-hidden rounded-md">
              <Image
                src={image}
                alt={title}
                fill
                className="rounded-md transition-transform duration-300 group-hover:scale-105"
                priority
              />
            </div>
          )}
          {video && (
            <div className="w-full h-48 overflow-hidden rounded-md">
              <video
                src={video}
                autoPlay
                muted
                loop
                className="rounded-md w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>
          )}
          <div>
            <CardTitle className="mt-2 group-hover:text-primary transition-colors duration-300">
              {title}
            </CardTitle>
            <p className="text-xs text-muted-foreground mt-2">{date}</p>
            <CardDescription className="text-xs font-medium mt-2">
              {description}
            </CardDescription>
          </div>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col gap-2">
            <div className="flex flex-wrap gap-2 mt-2">
              {technologies.map((technology) => (
                <Badge
                  variant="secondary"
                  key={technology}
                  className="transition-all duration-300 hover:bg-primary/20"
                >
                  {technology}
                </Badge>
              ))}
            </div>
          </div>
        </CardContent>
      </div>
      <CardFooter className="pt-4">
        <div className="flex flex-row items-center justify-start gap-2 w-full">
          {website && (
            <Button
              variant="secondary"
              size="sm"
              asChild
              className="transition-all duration-300 hover:bg-primary/10 hover:text-primary"
            >
              <Link target="_blank" href={website}>
                <Globe className="w-4 h-4 mr-1" />
                Website
              </Link>
            </Button>
          )}
          {codeLink && (
            <Button
              variant="secondary"
              size="sm"
              asChild
              className="transition-all duration-300 hover:bg-primary/10 hover:text-primary"
            >
              <Link target="_blank" href={codeLink}>
                <Code className="w-4 h-4 mr-1" />
                Code
              </Link>
            </Button>
          )}
          {videoDemo && (
            <Button
              variant="secondary"
              size="sm"
              asChild
              className="transition-all duration-300 hover:bg-primary/10 hover:text-primary"
            >
              <Link target="_blank" href={videoDemo}>
                <Video className="w-4 h-4 mr-1" />
                Demo
              </Link>
            </Button>
          )}
        </div>
      </CardFooter>
    </Card>
  );
};

export default ProjectCard;
