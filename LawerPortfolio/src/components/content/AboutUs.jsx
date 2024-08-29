import React, { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import styles from "./About.module.css"; // Ensure the path is correct
import Breadcrumbs from "./Breadcrumbs";
import bgabout from "../../assets/why.jpeg";

gsap.registerPlugin(ScrollTrigger);

const AboutUs = () => {
  useEffect(() => {
    gsap.fromTo(
      `.${styles.title}`,
      { opacity: 0, y: -50 },
      {
        opacity: 1,
        y: 0,
        duration: 1.2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: `.${styles.title}`,
          start: "top 80%",
        },
      }
    );

    gsap.fromTo(
      `.${styles.content} p`,
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 1.2,
        ease: "power2.out",
        stagger: 0.3,
        scrollTrigger: {
          trigger: `.${styles.content}`,
          start: "top 80%",
        },
      }
    );
  }, []);

  return (
    <section className="bg-gray-100">
      <Breadcrumbs bannerImage={bgabout} heading="About Us"></Breadcrumbs>
      <div className="max-w-screen-lg mx-auto text-center pt-16">
        <h2
          className={`text-3xl font-bold text-yellow-500 mb-6 ${styles.title}`}
        >
          About Us
        </h2>
        <p
          className={`text-4xl font-extrabold text-gray-800 mb-12 ${styles.subtitle}`}
        >
          Dedicated Legal Expertise with a Personalized Approach
        </p>
        <div
          className={`text-xl text-gray-700 leading-relaxed mx-auto ${styles.content}`}
        >
          <p className="mb-8 text-justify">
            At our firm, we pride ourselves on providing top-notch legal
            services with a personal touch. Our team of experienced attorneys is
            dedicated to offering comprehensive legal solutions tailored to meet
            your unique needs. With a deep understanding of the law and a
            commitment to client satisfaction, we strive to deliver results that
            exceed expectations.
          </p>
          <p className="mb-8 text-justify">
            Our approach is client-centered, focusing on understanding your
            specific circumstances and goals. We offer a range of legal
            services, from corporate and civil law to family and criminal cases.
            Our goal is to provide you with clear, effective legal
            representation that ensures your best interests are always at the
            forefront.
          </p>
          <p className="mb-8 text-justify">
            Whether you're dealing with a complex legal issue or seeking advice
            on a legal matter, our team is here to assist you every step of the
            way. With a track record of success and a commitment to excellence,
            we are your trusted partner in navigating the legal landscape.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
