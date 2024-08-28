import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import styles from './PracticeArea.module.css'; // Ensure this path is correct

gsap.registerPlugin(ScrollTrigger);

const PracticeArea = () => {
  useEffect(() => {
    gsap.fromTo(
      '.practice-card',
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1.2,
        ease: 'power2.out',
        stagger: 0.2,
        scrollTrigger: {
          trigger: '.practice-card',
          start: 'top 80%',
        },
      }
    );
  }, []);

  const practiceAreas = [
    {
      id: 1,
      title: "Corporate Law",
      description: "Expert guidance on company formation, mergers, and corporate governance.",
      image: "/path/to/corporate-law-image.jpg",
    },
    {
      id: 2,
      title: "Criminal Defense",
      description: "Defending clients against criminal charges with strategic and experienced representation.",
      image: "/path/to/criminal-defense-image.jpg",
    },
    {
      id: 3,
      title: "Family Law",
      description: "Handling cases related to divorce, custody, and family disputes with sensitivity and expertise.",
      image: "/path/to/family-law-image.jpg",
    },
    {
      id: 4,
      title: "Employment Law",
      description: "Providing legal support for workplace disputes, wrongful termination, and employment contracts.",
      image: "/path/to/employment-law-image.jpg",
    },
    {
      id: 5,
      title: "Real Estate Law",
      description: "Guidance on property transactions, disputes, and lease agreements.",
      image: "/path/to/real-estate-law-image.jpg",
    },
    {
      id: 6,
      title: "Intellectual Property",
      description: "Protecting patents, trademarks, and copyrights with strategic legal solutions.",
      image: "/path/to/intellectual-property-image.jpg",
    },
    {
      id: 7,
      title: "Tax Law",
      description: "Offering advice and representation on tax planning, compliance, and disputes.",
      image: "/path/to/tax-law-image.jpg",
    },
    {
      id: 8,
      title: "Personal Injury",
      description: "Representing clients in claims related to accidents, injuries, and negligence.",
      image: "/path/to/personal-injury-image.jpg",
    },
  ];

  return (
    <section className="py-20 px-6 bg-gray-100">
      <div className="max-w-screen-lg mx-auto text-center">
        <h2 className="text-4xl font-bold text-yellow-500 mb-12">Practice Areas</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {practiceAreas.map(area => (
            <div key={area.id} className={`practice-card bg-white rounded-lg shadow-lg overflow-hidden ${styles.card}`}>
              <img src={area.image} alt={area.title} className={`w-full h-40 object-cover ${styles.cardImage}`} />
              <div className={`p-6 ${styles.cardContent}`}>
                <h3 className={`text-2xl font-semibold mb-2 ${styles.cardTitle}`}>{area.title}</h3>
                <p className={`text-gray-700 ${styles.cardDescription}`}>{area.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PracticeArea;
