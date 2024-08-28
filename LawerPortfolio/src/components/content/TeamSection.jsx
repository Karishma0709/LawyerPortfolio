import React, { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import styles from "./TeamSection.module.css"; // Ensure you have this CSS module file

gsap.registerPlugin(ScrollTrigger);

const TeamSection = () => {
  useEffect(() => {
    gsap.fromTo(
      ".team-member",
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 1.2,
        ease: "power2.out",
        stagger: 0.3,
        scrollTrigger: {
          trigger: ".team-section",
          start: "top 80%",
        },
      }
    );
  }, []);

  const teamMembers = [
    {
      id: 1,
      name: "John Doe",
      position: "Senior Partner",
      bio: "John has over 20 years of experience in corporate and civil law. His expertise in legal strategy and negotiation makes him a key asset to our firm.",
      image: "/path/to/john-doe.jpg",
    },
    {
      id: 2,
      name: "Jane Smith",
      position: "Associate Attorney",
      bio: "Jane specializes in family law and criminal defense. Her dedication and thorough understanding of the law help her achieve favorable outcomes for our clients.",
      image: "/path/to/jane-smith.jpg",
    },
    {
      id: 3,
      name: "Michael Johnson",
      position: "Legal Consultant",
      bio: "Michael provides expert advice on commercial and mercantile cases. His analytical skills and attention to detail ensure that our clients receive the best legal guidance.",
      image: "/path/to/michael-johnson.jpg",
    },
  ];

  return (
    <section className="team-section bg-gray-100 py-10 px-4">
      <div className="max-w-screen-lg mx-auto text-center">
        <h2 className="text-4xl font-bold text-yellow-500 mb-8">
          Meet Our Team
        </h2>
        <div className="flex flex-wrap justify-center gap-8">
          {teamMembers.map((member) => (
            <div
              key={member.id}
              className={`team-member bg-white rounded-lg shadow-lg p-6 w-full sm:w-1/2 md:w-1/3 lg:w-1/4 ${styles.card}`}
            >
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-48 object-cover rounded-t-lg mb-4"
              />
              <h3 className="text-2xl font-semibold text-gray-800 mb-2">
                {member.name}
              </h3>
              <p className="text-xl text-yellow-500 mb-2">{member.position}</p>
              <p className="text-gray-700">{member.bio}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
