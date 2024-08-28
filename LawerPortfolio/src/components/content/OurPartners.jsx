import React from "react";
import styles from "./Ourpartner.module.css";

const OurPartners = () => {
  const partners = [
    { name: "Partner One", logo: "/path/to/logo1.png" },
    { name: "Partner Two", logo: "/path/to/logo2.png" },
    { name: "Partner Three", logo: "/path/to/logo3.png" },
    { name: "Partner Four", logo: "/path/to/logo4.png" },
  ];

  return (
    <section className="bg-gray-50 py-16 px-8">
      <div className="max-w-screen-lg mx-auto text-center">
        <h2 className={styles.title}>COLLABORATION</h2>
        <p className={styles.subtitle}>
          We are proud to collaborate with these esteemed partners who share our
          commitment to excellence in legal services.
        </p>
        <div className="flex flex-wrap justify-center items-center gap-8">
          {partners.map((partner, index) => (
            <div key={index} className={styles.partnerCards}>
              <img
                src={partner.logo}
                alt={partner.name}
                className="h-20 mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold text-gray-800">
                {partner.name}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurPartners;
