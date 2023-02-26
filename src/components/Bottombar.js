import React from "react";

const Bottombar = () => {
  const d = new Date();
  const currentYear = d.getFullYear();
  return (
    <div className="flex footer">
      <small>&copy; Copyright {currentYear}, Mohammed Atef</small>
      <div className="tab logo">Makeup Online</div>
      <small>
        <span>Created by Mohammed Atef</span>
      </small>
    </div>
  );
};

export default Bottombar;
