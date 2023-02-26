import React, { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import { fetchMakeup } from "../actions";
import Cover from "../components/Cover";
import ProductCard from "../components/ProductCard";
import about from "../assets/about.svg";
import contact from "../assets/contact.png";

const Home = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchMakeup());
  }, [dispatch]);

  const makeup = useSelector((state) => state.makeup);
  console.log(makeup);
  return (
    <>
      <div>
        <Cover />
      </div>
      {/* <div className="categories-btn">
        <Link to="/categories">
          SHOW CATEGORIES
          <span>
            <FontAwesomeIcon icon={faArrowRight} />
            {' '}
          </span>
        </Link>
      </div> */}
      <div className="top-products">
        {/* <hr /> */}
        <br />
        <br />
        <h1>Because you deserve better,</h1>
        <h2 style={{ fontSize: "3rem" }}>You deserve us.</h2>
        <br />
        <br />
      </div>
      <div>
        <h3 style={{ fontSize: "2.5rem", padding: "3rem", color: "#7f167f" }}>
          Our picks..
        </h3>
      </div>
      <div className="items">
        {makeup.makeup &&
          makeup.makeup.map((item) => (
            <ProductCard key={item.id} item={item} />
          ))}
      </div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <h2 style={{ textAlign: "center", fontSize: "1.5rem" }}>
        We love what we do
      </h2>
      <h2 style={{ textAlign: "center", fontSize: "4rem", color: "#f56eb3" }}>
        We love you
      </h2>
      <br />
      <br />
      <div className="about">
        <div className="img-container">
          <img src={about} alt="About us" />
        </div>
        <div>
          <h2>Why us..?</h2>
          <h4>Because we care..!</h4>
          <p>
            Any product you find here is chosen carefully by specialists to help
            you show your true beauty. We always seek your perfiction and your
            inner hapiness.
          </p>
        </div>
      </div>
      <br />
      <br />
      <br />
      <br /> <br />
      <br />
      <h2 style={{ textAlign: "center", fontSize: "4rem" }}>
        Reach us anytime...!
      </h2>
      <br />
      <br />
      <div className="about">
        <div className="img-container">
          <img src={contact} alt="Contact us" />
        </div>
        <div>
          <h2 style={{ color: "#f56eb3" }}>Always here for you</h2>
          <h4>Because we care..!</h4>
          <p>
            Any time you need us, we are here giving you all the advices you
            need to care about yourself. Solving your problems is both, our
            dream and our work, so, it matters!
          </p>
        </div>
      </div>
      <br />
      <br />
    </>
  );
};

export default Home;
