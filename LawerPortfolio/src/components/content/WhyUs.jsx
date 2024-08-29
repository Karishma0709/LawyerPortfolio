import React, { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import styles from "./WhyUs.module.css"; // Ensure you have this CSS module file

gsap.registerPlugin(ScrollTrigger);

const WhyUs = () => {
  useEffect(() => {
    gsap.fromTo(
      ".why-us-title",
      { opacity: 0, y: -50 },
      {
        opacity: 1,
        y: 0,
        duration: 1.2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".why-us-title",
          start: "top 80%",
        },
      }
    );

    gsap.fromTo(
      ".vision-header",
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 1.2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".vision-header",
          start: "top 80%",
        },
      }
    );

    gsap.fromTo(
      ".vision-content",
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 1.2,
        ease: "power2.out",
        stagger: 0.3,
        scrollTrigger: {
          trigger: ".vision-content",
          start: "top 80%",
        },
      }
    );
  }, []);

  return (
    <section className={`bg-white py-28 px-8 ${styles.section}`}>
      <div className="max-w-screen-lg mx-auto text-center">
        <h2
          className={`text-3xl font-bold text-yellow-500 mb-4 ${styles.title}`}
        >
          Why Beacon
        </h2>
        <p
          className={`text-4xl md:text-5xl font-extrabold text-gray-800 mb-16 ${styles.header}`}
        >
          A Different Approach
        </p>
        <p
          className={`text-xl md:text-xl bg-gray-800 bg-opacity-80 text-white leading-relaxed text-justify ${styles.pseudo_partial_border}`}
        >
          At our legal firm, we embrace a unique approach to tackle a diverse
          array of cases, drawing upon the collective expertise of our seasoned
          professionals. With years of experience in various legal domains, our
          team employs innovative strategies tailored to each case's
          intricacies. Whether it's civil disputes, criminal matters, corporate
          law, or family affairs, we provide dynamic and effective
          representation. Our commitment to excellence and client satisfaction
          drives us to deliver optimal outcomes, ensuring our clients receive
          top-notch legal support that surpasses expectations.
        </p>
      </div>
    </section>
  );
};

export default WhyUs;
