import React from "react";
import screen from "../assets/screen.webp";
import mouse from "../assets/mouse.jpg";
import key from "../assets/KEY.jpg";
import head from "../assets/head.jpg";
import classes from "../styles/section.module.css";
export const Section = () => {
  return (
    <>
      <div
        style={{
          width: "477px ",
          height: "630px",
          display: "inline-block",
          backgroundColor: "white",
          margin: "10px",
        }}
      >
        <h3 style={{ textAlign: "center" }}>Gaming</h3>
        <div>
          <div className={classes.x}>
            <img src={head} alt="" style={{ width: "100%" }} />
            <div style={{ textAlign: "center" }}>head set</div>
          </div>

          <div className={classes.x}>
            <img src={mouse} alt="" style={{ width: "100%" }} />

            <div style={{ textAlign: "center" }}>mouse</div>
          </div>
        </div>
        <div>
          <div className={classes.x}>
            <img src={key} alt="" style={{ width: "100%" }} />

            <div style={{ textAlign: "center" }}>keyboard</div>
          </div>
          <div className={classes.x}>
            <img src={screen} alt="" style={{ width: "100%" }} />

            <div style={{ textAlign: "center" }}>screen</div>
          </div>
        </div>
        <div style={{ textAlign: "center" }}>see more</div>
      </div>
      <div
        style={{
          width: "477px ",
          height: "630px",
          display: "inline-block",
          backgroundColor: "white",
          margin: "10px",
        }}
      >
        <h3 style={{ textAlign: "center" }}>Gaming</h3>
        <div>
          <div className={classes.x}>
            <img src={head} alt="" style={{ width: "100%" }} />
            <div style={{ textAlign: "center" }}>head set</div>
          </div>

          <div className={classes.x}>
            <img src={mouse} alt="" style={{ width: "100%" }} />

            <div style={{ textAlign: "center" }}>mouse</div>
          </div>
        </div>
        <div>
          <div className={classes.x}>
            <img src={key} alt="" style={{ width: "100%" }} />

            <div style={{ textAlign: "center" }}>keyboard</div>
          </div>
          <div className={classes.x}>
            <img src={screen} alt="" style={{ width: "100%" }} />

            <div style={{ textAlign: "center" }}>screen</div>
          </div>
        </div>
        <div style={{ textAlign: "center" }}>see more</div>
      </div>
      <div
        style={{
          width: "477px ",
          height: "630px",
          display: "inline-block",
          backgroundColor: "white",
          margin: "10px",
        }}
      >
        <h3 style={{ textAlign: "center" }}>Gaming</h3>
        <div>
          <div className={classes.x}>
            <img src={head} alt="" style={{ width: "100%" }} />
            <div style={{ textAlign: "center" }}>head set</div>
          </div>

          <div className={classes.x}>
            <img src={mouse} alt="" style={{ width: "100%" }} />

            <div style={{ textAlign: "center" }}>mouse</div>
          </div>
        </div>
        <div>
          <div className={classes.x}>
            <img src={key} alt="" style={{ width: "100%" }} />

            <div style={{ textAlign: "center" }}>keyboard</div>
          </div>
          <div className={classes.x}>
            <img src={screen} alt="" style={{ width: "100%" }} />

            <div style={{ textAlign: "center" }}>screen</div>
          </div>
        </div>
        <div style={{ textAlign: "center" }}>see more</div>
      </div>
    </>
  );
};
