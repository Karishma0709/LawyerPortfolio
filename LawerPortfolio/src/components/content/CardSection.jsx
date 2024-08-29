import React, { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import "./CardSection.css";

gsap.registerPlugin(ScrollTrigger);

const CardSection = () => {
  useEffect(() => {
    gsap.fromTo(
      ".card",
      { opacity: 0, y: 100 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        stagger: 0.2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".card",
          start: "top 80%",
        },
      }
    );
  }, []);

  const cardData = [
    {
      id: 1,
      title: "Economic Offences",
      description:
        "The increasingly intricate landscape of criminal legislation and escalating enforcement actions related to financial offenses pose mounting challenges for businesses in India. We offer guidance to our clients on every facet of such inquiries and legal actions, whether on an organizational or personal basis.",
      stats: "6533 Pending Cases | 500 Cr INR in Dispute",
      image: "/path/to/economic-offences-image.jpg",
    },
    {
      id: 2,
      bgimage: "../../assets/bg22.jpg",
      title: "Commercial & Mercantile Cases",
      description:
        "In India's commercial and mercantile litigation, businesses face diverse challenges, from contractual disputes to regulatory compliance. Our firm offers comprehensive support, providing tailored solutions to safeguard clients' interests. We assist in all legal proceedings, offering effective representation and strategic counsel.",
      stats:
        "55% Partnerships End Up In Courts | 80% Partners Do Not Have All Documents",
      image: "/path/to/commercial-mercantile-cases-image.jpg",
    },
    {
      id: 3,
      bgimage: "../../assets/bg22.jpg",
      title: "Contractual Disputes (Arbitration)",
      description:
        "In the Indian legal context, arbitration holds significant importance as an alternative dispute resolution mechanism. Governed by the Arbitration and Conciliation Act, 1996, arbitration proceedings provide parties with a streamlined and private method of resolving disputes outside the traditional court system.",
      stats:
        "2545 Arbitration Cases Pending | 85% Cases Resolved Within 3 Years",
      image: "/path/to/contractual-disputes-image.jpg",
    },
    {
      id: 4,
      bgimage: "../../assets/bg22.jpg",
      title: "Other Aspects",
      description:
        "Our legal firm covers an extensive range of cases spanning civil, criminal, corporate, and family law. With specialized lawyers and tailored solutions, we offer reliable representation and expert guidance throughout the legal process, ensuring effective outcomes for our clients.",
      stats: "360º Coverage of Other Types of Cases | 100% Free Consultations",
      image: "/path/to/other-aspects-image.jpg",
    },
  ];

  return (
    <div className="container ">
      <div className="flex justify-center flex-col w-[100%]">
        <h2 className="split-color-text mb-2 mt-3 text-3xl">Our Services</h2>
        <p className="text-4xl font-bold text-white leading-relaxed mb-7 subtitle-bg mt-7">
          Your All-in-One Legal Solution Provider
        </p>
      </div>
      <ul id="cards">
        {cardData.map((card) => (
          <li className="card" id={`card${card.id}`} key={card.id}>
            <div
              className="card-body"
              style={{ background: card.bgimage, backgroundSize: "cover" }}
            >
              <div className="main_card">
                <div id="triangle-topleft "></div>

                <div
                  className="absolute inset-0 bg-cover bg-center rounded-lg"
                  style={{ backgroundImage: `url(${card.image})` }}
                ></div>
                <div className="relative z-10 bg-opacity-80 sm:bg-opacity-40 bg-gray-800 text-white rounded-lg sm:p-10 sm:m-10 m-0 p-6">
                  <h3 className="text-3xl text-yellow-500 font-semibold mb-4">
                    {card.title}
                  </h3>
                  <p className="text-justify text-1xl p-4">
                    {card.description}
                  </p>
                  <p className="font-semibold sm:text-2xl  p-2 status sm:w-[50%]">
                    {card.stats}
                  </p>
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CardSection;
