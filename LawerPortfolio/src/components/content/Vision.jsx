import React, { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Vision = () => {
  useEffect(() => {
    gsap.fromTo(
      ".vision-title",
      { y: -50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: { trigger: ".vision-title", start: "top 80%" },
      }
    );

    gsap.fromTo(
      ".vision-header",
      { y: -50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        delay: 0.2,
        ease: "power2.out",
        scrollTrigger: { trigger: ".vision-header", start: "top 80%" },
      }
    );

    gsap.fromTo(
      ".vision-content",
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        delay: 0.4,
        ease: "power2.out",
        scrollTrigger: { trigger: ".vision-content", start: "top 80%" },
      }
    );
  }, []);

  return (
    <section className="bg-gray-100 lg:h-[600px] md:h-[600px] sm:h-[800px] h-full py-16 sm:py-30 mb-10 px-8 sm:px-10 relative">
      <div className="max-w-screen-lg mx-auto text-center">
        <h3 className="vision-title text-3xl font-bold text-yellow-500 mb-8 transition-transform transform">
          Our Vision
        </h3>
        <h1 className="vision-header text-4xl md:text-5xl font-extrabold text-gray-800 mb-10">
          We’re Here to Revolutionize the World of Legal Realm
        </h1>
        <div className="relative bg-white p-8 border border-gray-200 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out">
          <p className="vision-content sm:text-2xl  text-xl text-gray-700 leading-relaxed">
            At Beacon, we are committed to delivering exceptional legal services
            with integrity, professionalism, and dedication. Our team of
            experienced and knowledgeable attorneys is here to provide you with
            comprehensive legal solutions tailored to meet your unique needs.
          </p>
          <div className="absolute inset-0 border-2 border-yellow-500 rounded-lg pointer-events-none"></div>
        </div>
      </div>
    </section>
  );
};

export default Vision;
