import React from "react";
import logo from "../assets/Amazon-Logo-Font-1-scaled.webp";
import Footer from "rc-footer";
import "rc-footer/assets/index.css";
export const Footerc = () => {
  return (
    <>
      <div
        style={{
          width: "100%",
          backgroundColor: "#485769",
          height: "20px    ",
          textAlign: "center ",
          color: "white",
          fontSize: "20px",
          fontWeight: "bold",
          fontFamily: "Arial",
          paddingTop: "20px",
          paddingBottom: "20px",
        }}
      >
        Back to Top
      </div>
      <Footer
        columns={[
          {
            title: "Get to Know Us",
            items: [
              {
                title: "Careers",
              },
              {
                title: "Blog",
              },
              {
                title: "About Amazon",
              },
              {
                title: "Investor Relations",
              },
              {
                title: "Amazon Devices",
              },
              {
                title: "Amazon Science",
              },
            ],
          },
          {
            title: "Make Money with Us",
            items: [
              {
                title: "Careers",
              },
              {
                title: "Blog",
              },
              {
                title: "About Amazon",
              },
              {
                title: "Investor Relations",
              },
              {
                title: "Amazon Devices",
              },
              {
                title: "Amazon Science",
              },
            ],
          },
          {
            title: "Amazon Payment Products",
            items: [
              {
                title: "Careers",
              },
              {
                title: "Blog",
              },
              {
                title: "About Amazon",
              },
              {
                title: "Investor Relations",
              },
              {
                title: "Amazon Devices",
              },
              {
                title: "Amazon Science",
              },
            ],
          },
          {
            title: "Let Us Help You",
            items: [
              {
                title: "Careers",
              },
              {
                title: "Blog",
              },
              {
                title: "About Amazon",
              },
              {
                title: "Investor Relations",
              },
              {
                title: "Amazon Devices",
              },
              {
                title: "Amazon Science",
              },
            ],
          },
          {
            title: "Products and more",
            items: [
              {
                icon: (
                  <img
                    style={{ width: "150px  " }}
                    src={logo}
                    alt="more products"
                  />
                ),
              },
            ],
          },
          {},
        ]}
        bottom="Made with ❤️ by Mohamed Mamdouh"
        backgroundColor="#232F3E"
      />
    </>
  );
};
