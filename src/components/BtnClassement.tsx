import React from "react";

const BtnClassement = () => {
  return (
    <div
      className="btn-group mb-2"
      role="group"
      aria-label="Basic outlined example"
    >
      <button type="button" className="m-1 btn btn-success">
        A-Z
      </button>
      <button type="button" className="m-1 btn btn-success">
        Rate
      </button>
      <button type="button" className="m-1 btn btn-success">
        Price
      </button>
    </div>
  );
};

export default BtnClassement;
