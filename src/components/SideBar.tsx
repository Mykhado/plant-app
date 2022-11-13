import _ from "lodash";
import React, { useState } from "react";
import { Plant } from "../pages/Home";
import Rating from "./Rating";

interface filterSideBarProps {
  transfertPlant: Plant[];
  onChangeCategoriesCheck: { (checkCategories: string[]): void };
  onClickChangePrice: { (minMax: number[]): void };
}

const SideBar = ({
  transfertPlant,
  onChangeCategoriesCheck,
  onClickChangePrice,
}: filterSideBarProps) => {
  const categories = _.uniq(transfertPlant.map((plante) => plante.category));
  const [checkCategories, setCheckCategories] = useState<string[]>([]);
  const [minMax, setMinMax] = useState<number[]>([0, 0]);
  // let [min, max] = minMax;
  // let minPrice: number;
  // let maxPrice: number;
  const [minP, setMinP] = useState<number[]>([0]);
  const [maxP, setMaxP] = useState<number[]>([9999]);

  function handleCheck(e: React.ChangeEvent<HTMLInputElement>) {
    let tab: string[] = [];
    if (e.currentTarget.checked) {
      tab = [...checkCategories, e.currentTarget.value];
    } else {
      tab = [...checkCategories.filter((x) => x !== e.currentTarget.value)];
    }
    setCheckCategories(tab);
    onChangeCategoriesCheck(tab);
  }
  function handleChangePriceMin(e: React.SyntheticEvent<HTMLInputElement>) {
    if (isNaN(e.currentTarget.valueAsNumber)) {
      setMinP([0]);
    } else {
      setMinP([e.currentTarget.valueAsNumber]);
    }
  }

  function handleChangePriceMax(e: React.SyntheticEvent<HTMLInputElement>) {
    if (isNaN(e.currentTarget.valueAsNumber)) {
      setMaxP([9999]);
    } else {
      setMaxP([e.currentTarget.valueAsNumber]);
    }
  }

  function configMinMax(e: React.MouseEvent<HTMLInputElement>) {
    let tabTampon: number[] = [0, 9999];
    tabTampon = [minP[0], maxP[0]];
    // handleChangePriceMax(e: React.ChangeEvent<HTMLInputElement>);
    // handleChangePriceMin(e);
    // tabTampon = [min, max];
    setMinMax([...tabTampon]);
    onClickChangePrice([...tabTampon]);
  }

  return (
    <div className="custom-side-bar flex-shrink-0 bg-white border-end ">
      <div className="p-3 border-bottom">
        <span className="fs-5 fw-semibold">Filtres</span>
      </div>
      <ul className="list-unstyled ps-0 p-3 border-bottom">
        <div className="p-3">
          <p className="mb-1 fs-5 fw-semibold">Catégories</p>
          {categories.map((cat, i) => (
            <div className="form-check " key={i}>
              <input
                className="form-check-input"
                type="checkbox"
                value={cat}
                id={cat}
                onChange={handleCheck}
              />
              <label className="form-check-label fw-semibold " htmlFor={cat}>
                {cat}
              </label>
            </div>
          ))}
        </div>
      </ul>
      <div className="p-3 border-bottom">
        <p className="mb-1 fs-5 fw-semibold">Trie par prix</p>
        <label htmlFor="min max"></label>
        <br />
        <div className="input-group">
          <span className="input-group-text">min</span>
          <input
            className="form-control"
            style={{ width: "100px" }}
            type="number"
            id="min"
            name="min"
            minLength={1}
            maxLength={3}
            size={5}
            onChange={handleChangePriceMin}
          />

          <input
            className=" form-control "
            style={{ width: "100px" }}
            type="number"
            id="max"
            name="max"
            minLength={1}
            maxLength={3}
            size={5}
            onChange={handleChangePriceMax}
          />
          <span className="input-group-text">max</span>

          <input
            className="m-1 btn btn-success btn-sm"
            type="button"
            id="btn-valid"
            name="btn"
            value="Afficher"
            onClick={configMinMax}
          />
        </div>
      </div>
      <div className="p-3 border-bottom">
        <p className="mb-1 fs-5 fw-semibold">Trie par Avis</p>
        <label htmlFor="min max"></label>
        <br />
        <div className="input-group">
          <Rating transfertRating={0} />
        </div>
      </div>
    </div>
  );
};

export default SideBar;
