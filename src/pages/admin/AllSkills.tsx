import { useEffect, useState } from "react";
import SkillsBox from "../../components/SkillsBox";
import axios from "axios";

// It's good practice to assume your API provides a unique 'id'
interface Skill {
  id: string | number;
  name: string;
  description: string;
  iconName: string; // Note: See bonus tip below
  _id: string;
}

const AllSkills = () => {
  const [skills, setSkills] = useState<Skill[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchSkills = async () => {
      try {
        setIsLoading(true);
        setError(null);
        const res = await axios("http://localhost:8000/api/skills");
        setSkills(res.data);
      } catch (err) {
        console.error("Failed to fetch skills:", err);
        setError("Failed to load skills. Please try again later.");
      } finally {
        setIsLoading(false);
      }
    };
    fetchSkills();
  }, []);

  if (isLoading) {
    return (
      <div className="text-center py-10">
        <p>Loading skills...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center py-10 text-red-500">
        <p>{error}</p>
      </div>
    );
  }

  return (
    <section className="py-16 px-4">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
        My Skills & Expertise
      </h2>
      {skills.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill) => (
            <SkillsBox
              key={skill.id || skill.name}
              name={skill.name}
              description={skill.description}
              iconName={skill.iconName}
              forAdmin={true}
              id={skill._id}
            />
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-500">No skills to display.</p>
      )}
    </section>
  );
};

export default AllSkills;
