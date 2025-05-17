import React from "react";
import EducationCard from "./education-card";

const AllEducation = () => {
  return (
    <div className="space-y-6 mt-4">
      <EducationCard
        picture="/pec_logo.png"
        name="Punjab Engineering College, Chandigarh"
        time="2023-2027"
        studied="B.Tech in Electrical Engineering (Minor in Computer Science)"
        description="I am currently pursuing a B.Tech in Electrical Engineering with a minor in Computer Science at Punjab Engineering College, Chandigarh. My coursework covers advanced electrical engineering principles, embedded systems, and computer science fundamentals, equipping me with a multidisciplinary skill set for modern tech challenges."
      />
      <EducationCard
        picture="/school.jpg"
        name="DAV Public Sr. Sec. School, Chandigarh"
        time="2016-2024"
        studied="High School"
        description="I completed my high school education at DAV Public Sr. Sec. School in Chandigarh, where I achieved a 91.6% overall percentage. My studies focused on core subjects such as Mathematics, Physics, Chemistry, and Computer Science, laying a strong foundation for my engineering pursuits."
      />
    </div>
  );
};

export default AllEducation;

