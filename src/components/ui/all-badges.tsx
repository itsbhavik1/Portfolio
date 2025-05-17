import { Badge } from "./badge";

const allBadges: string[] = [
  "React",
  "Next.js",
  "TypeScript",
  "Express",
  "Prisma",
  "Docker",
  "Node.js",
  "WebSocket",
  "PostgreSQL",
  "MongoDB",
  "Tanstack Query",
  "Rest APIs",
  "Tailwind CSS",
  "ShadCN",
  "GitHub",
];

const AllBadges = () => {
  return (
    <div className="flex flex-wrap gap-2">
      {allBadges.map((badge) => (
        <Badge variant="secondary" key={badge}>
          {badge}
        </Badge>
      ))}
    </div>
  );
};

export default AllBadges;
