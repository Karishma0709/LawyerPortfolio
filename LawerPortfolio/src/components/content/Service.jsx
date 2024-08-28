import React from "react";

const Services = () => {
  const services = [
    {
      title: "Economic Offences",
      description:
        "The increasingly intricate landscape of criminal legislation and escalating enforcement actions related to financial offenses pose mounting challenges for businesses in India. We offer guidance to our clients on every facet of such inquiries and legal actions, whether on an organizational or personal basis.",
      stats: "6533 Pending Cases | 500 Cr INR in Dispute",
      image: "/path/to/economic-offences-image.jpg",
    },
    {
      title: "Commercial & Mercantile Cases",
      description:
        "In India's commercial and mercantile litigation, businesses face diverse challenges, from contractual disputes to regulatory compliance. Our firm offers comprehensive support, providing tailored solutions to safeguard clients' interests. We assist in all legal proceedings, offering effective representation and strategic counsel.",
      stats:
        "55% Partnerships End Up In Courts | 80% Partners Do Not Have All Documents",
      image: "/path/to/commercial-mercantile-cases-image.jpg",
    },
    {
      title: "Contractual Disputes (Arbitration)",
      description:
        "In the Indian legal context, arbitration holds significant importance as an alternative dispute resolution mechanism. Governed by the Arbitration and Conciliation Act, 1996, arbitration proceedings provide parties with a streamlined and private method of resolving disputes outside the traditional court system.",
      stats:
        "2545 Arbitration Cases Pending | 85% Cases Resolved Within 3 Years",
      image: "/path/to/contractual-disputes-image.jpg",
    },
    {
      title: "Other Aspects",
      description:
        "Our legal firm covers an extensive range of cases spanning civil, criminal, corporate, and family law. With specialized lawyers and tailored solutions, we offer reliable representation and expert guidance throughout the legal process, ensuring effective outcomes for our clients.",
      stats: "360º Coverage of Other Types of Cases | 100% Free Consultations",
      image: "/path/to/other-aspects-image.jpg",
    },
  ];

  return (
    <section className="bg-gray-100 py-16 px-8">
      <div className="max-w-screen-lg mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Our Services</h2>
        <p className="text-lg text-gray-700 leading-relaxed mb-12">
          Your All-in-One Legal Solution Provider
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="relative bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div
                className="absolute inset-0 bg-cover bg-center rounded-lg"
                style={{ backgroundImage: `url(${service.image})` }}
              ></div>
              <div className="relative z-10 p-6 bg-opacity-80 bg-gray-800 text-white rounded-lg">
                <h3 className="text-xl font-semibold mb-4">{service.title}</h3>
                <p className="mb-4">{service.description}</p>
                <p className="font-semibold">{service.stats}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
