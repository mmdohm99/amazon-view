import React from "react";
import classes from "../styles/Navbar.module.css";
import logo from "../assets/Amazon-Logo-Font-1-scaled.webp";
import { useState } from "react";
import {
  AiFillCaretDown,
  AiOutlineAim,
  AiOutlineSearch,
  AiOutlineShoppingCart,
  AiOutlineUnorderedList,
  AiOutlineSketch,
} from "react-icons/ai";
import eglogo from "../assets/egypt-flag-icon-32.png";
export const Navbar = () => {
  const [categories] = useState([
    "Books",
    "Electronics",
    "Home & Kitchen",
    "Movies & TV",
    "Clothing",
    "Sports & Outdoors",
    "Automotive",
    "Health & Beauty",
    "Toys & Games",
    "Tools & Home Improvement",
    "Handmade",
  ]);

  return (
    <>
      <div className={classes.upper}>
        <div className={classes.ufsection}>
          <div className={classes.img}>
            {" "}
            <img src={logo} alt="" style={{ width: "100px", height: "50px" }} />
          </div>
          <div className={classes.deliver}>
            <div style={{ display: "inline-block" }}>
              {" "}
              <div>Deliver to </div>
              <div>Egypt</div>
            </div>
            <div style={{ display: "inline-block", fontSize: "15px" }}>
              {" "}
              <AiOutlineAim />
            </div>
          </div>
        </div>
        <div className={classes.ussection}>
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              {" "}
              <AiFillCaretDown />
              All
            </div>
            <input
              className={classes.searchbar}
              type="text"
              placeholder="Search"
            />
            <div className={classes.searchIcon2}>
              <span
                style={{
                  position: "relative",
                  top: "10px",
                  left: "13px",
                }}
              >
                <AiOutlineSearch />
              </span>
            </div>
          </div>
        </div>
        <div className={classes.utsection}>
          <div className={classes.flag}>
            {" "}
            <img src={eglogo} alt="" />
            <AiFillCaretDown />
          </div>
          <div
            style={{
              position: "relative",
              top: "1px",
              left: "10px",
              width: "100px",
            }}
          >
            <div>Hello sign in</div>
            <div>account & List</div>
          </div>
          <div
            style={{
              position: "relative",
              top: "10px",
              left: "20px",
              fontSize: "15px",
            }}
          >
            Orders
          </div>
          <div
            style={{
              position: "relative",
              top: "1%",
              left: "50px",
              fontSize: "21px",
            }}
          >
            <AiOutlineShoppingCart />
            Cart
          </div>
        </div>
      </div>
      <div className={classes.lower}>
        <div
          style={{
            color: "white",
            fontSize: "25px",
            marginLeft: "15px",
            marginTop: "3px",
          }}
        >
          <AiOutlineUnorderedList />
        </div>
        {categories.map((category) => (
          <div className={classes.cata}>{category}</div>
        ))}
        <div className={classes.rocket}>
          <span style={{ fontSize: "18px" }}>
            <AiOutlineSketch />
          </span>
          <span>Start selling on amazon Now</span>
        </div>
      </div>
    </>
  );
};
