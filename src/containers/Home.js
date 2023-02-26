import React, { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { fetchMakeup } from "../actions";
import Cover from "../components/Cover";
import ProductCard from "../components/ProductCard";

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
    </>
  );
};

export default Home;
