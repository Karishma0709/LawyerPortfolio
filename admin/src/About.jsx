import React from "react";
import "./About.css";
import Group_img from "./assets/About-img/img_05.jpg";

const about_icon = [
  {
    imgs: "./public/About/icon_01.png",
    servicename: "Printing & Press",
    description:
      "Sed ut perspiciat unde omnis iste natus error sit voluptatem accusantium system",
  },
  {
    imgs: "./public/About/online.png",
    servicename: "Digital Printing",
    description:
      "Sed ut perspiciat unde omnis iste natus error sit voluptatem accusantium system",
  },
  {
    imgs: "./public/About/3dprinting.png",
    servicename: "3D Printing",
    description:
      "Sed ut perspiciat unde omnis iste natus error sit voluptatem accusantium system",
  },
  {
    imgs: "./public/About/setting-icon.png",
    servicename: "Offest Printing",
    description:
      "Sed ut perspiciat unde omnis iste natus error sit voluptatem accusantium system",
  },
];

const About = () => {
  return (
    <>
      {/* <div className="container">
        <div className="heading text-center">
          <h3>heading</h3>
        </div>
        <div className="row">
          <div className="col-lg-6">
            <div className="text-center">
              <img src={Group_img} className="Group-img img-fluid"></img>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="content justify-content-center text-center">
              <p className="ms-4 opacity-75 fs-6">
                Sed ut perspiciatis unde omnis iste natus error volupta
                accusantiu dolorem laudantium totam rem aperam eaque quae ab
                illo inventore veritatis et quasi architec
              </p>
              <div className="about-cards">
                {about_icon.map((items) => (
                  <div className="m-2">
                    <div className="about-icons-div ms-3">
                      <img src={items.imgs} alt="" className="about-icons" />
                    </div>
                    <div className="about-card-titel">{items.servicename}</div>
                    <div className="about-card-description">
                      {items.description}
                    </div>
                    <button className="readmore-btn ">READ MORE</button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div> */}
      <div className="container d-flex justify-content-center flex-wrap background-icon ">
        <div className="">
          <p className="small-title">About Our Company</p>
          <p className="big-title">Printing Your Dream Works With Printem</p>
        </div>
        <div className="d-flex justify-content-between flex-wrap mt-5 gap-2">
          <img src={Group_img} className="Group-img ms-3"></img>
          <div className="about-content">
            <p className="ms-4 ps-3 opacity-75 fs-6 about-content-p">
              Sed ut perspiciatis unde omnis iste natus error volupta accusantiu
              dolorem laudantium totam rem aperam eaque quae ab illo inventore
              veritatis et quasi architec
            </p>
            <div className="about-cards">
              {about_icon.map((items) => (
                <div className="m-2">
                  <div className="about-icons-div ms-3">
                    <img src={items.imgs} alt="" className="about-icons" />
                  </div>
                  <div className="about-card-titel">{items.servicename}</div>
                  <div className="about-card-description">
                    {items.description}
                  </div>
                  <button className="readmore-btn">READ MORE</button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>{" "}
    </>
  );
};

export default About;
