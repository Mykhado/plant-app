import React, { useEffect, useState } from "react";
import axios from "axios";
import SideBar from "../components/SideBar";
import SearchBar from "../components/SearchBar";
import BtnClassement from "../components/BtnClassement";
import Caroussel from "../components/Caroussel";
import { v4 as uuid } from "uuid";
import Rating from "../components/Rating";
import Like from "../components/Like";

export interface Plant {
  id?: number;
  name: string;
  unitprice_ati: number;
  quantity: number;
  category: string;
  rating: number;
  url_picture: string;
}
let resultFilteredPlants: Plant[];
let listPlant: Plant[] = [];
let resultPrice: number[] = [];
let resultInput: string;
let resultCategories: string[];
const Home = () => {
  const [stateInput, setStateInput] = useState<string>("");

  const [displayListPlant, setDisplayListPlant] = useState<Plant[]>([
    ...listPlant,
  ]);

  useEffect(() => {
    axios.get("http://localhost:8080/api/plant").then((response) => {
      listPlant = response.data.data;
      setDisplayListPlant(response.data.data);
    });
  }, []);

  const handleInputGet = (onClickInput: string) => {
    resultInput = onClickInput;

    let resultFilteredPlants = [...listPlant];
    if (resultInput !== null && resultInput !== undefined) {
      resultFilteredPlants = listPlant.filter((x) =>
        x.name.toLocaleLowerCase().includes(resultInput.toLocaleLowerCase())
      );
      setDisplayListPlant(resultFilteredPlants);
    } else {
      setDisplayListPlant(resultFilteredPlants);
    }
    // selectTri();
  };
  const handleCheckGet = (onChangeCategoriesCheck: string[]) => {
    resultCategories = [...onChangeCategoriesCheck];

    let resultFilteredPlants = [...listPlant];

    if (resultCategories.length > 0) {
      resultFilteredPlants = listPlant.filter((x) =>
        resultCategories.includes(x.category)
      );
      setDisplayListPlant(resultFilteredPlants);
    } else {
      setDisplayListPlant(resultFilteredPlants);
    }

    // selectTri();
  };

  const handlePriceGet = (onChangePrice: number[]) => {
    resultPrice = onChangePrice;
    console.log(resultPrice);
    let resultFilteredPlants = [...listPlant];
    if (resultPrice[0] >= 0 && resultPrice[1] >= 0) {
      resultFilteredPlants = listPlant.filter(
        (x) =>
          x.unitprice_ati >= resultPrice[0] && x.unitprice_ati <= resultPrice[1]
      );
      setDisplayListPlant(resultFilteredPlants);
    } else {
      setDisplayListPlant(resultFilteredPlants);
    }
    // selectTri();
  };
  const selectTri = () => {
    // let resultFilteredPlantsTamp = [...resultFilteredPlants];
    // if (resultInput !== null && resultInput !== undefined) {
    //   resultFilteredPlants = resultFilteredPlantsTamp.filter((x) =>
    //     x.name.toLocaleLowerCase().includes(resultInput.toLocaleLowerCase())
    //   );
    //   // setDisplayListPlant(resultFilteredPlants);
    // }
    // if (resultCategories?.length !== 0 && resultCategories !== undefined) {
    //   resultFilteredPlants = resultFilteredPlantsTamp.filter((x) =>
    //     resultCategories.includes(x.category)
    //   );
    //   // setDisplayListPlant(resultFilteredPlants);
    // }
    // if (resultPrice[0] >= 0 && resultPrice[1] >= 0) {
    //   resultFilteredPlants = resultFilteredPlantsTamp.filter(
    //     (x) =>
    //       x.unitprice_ati >= resultPrice[0] && x.unitprice_ati <= resultPrice[1]
    //   );
    //   // setDisplayListPlant(resultFilteredPlants);
    // }
    // setDisplayListPlant(resultFilteredPlants);
  };

  return (
    <div>
      <Caroussel testList={listPlant} />
      <div className="d-flex align-items-stretch">
        <SideBar
          transfertPlant={listPlant}
          onChangeCategoriesCheck={handleCheckGet}
          onClickChangePrice={handlePriceGet}
        />

        <div className="container-fluid custom-main">
          <SearchBar onClickInput={handleInputGet} />
          <BtnClassement />
          <div className="row ">
            {displayListPlant.map((plant) => (
              <div key={uuid()} className="col-sm-4 ">
                <div
                  key={uuid()}
                  className="card d-flex flex-wrap  border-success mb-2  border border-3 border-opacity-25 position-relative"
                  style={{ width: "18rem" }}
                >
                  <img
                    key={uuid()}
                    src={`http://localhost:8080/assets/${plant.url_picture}`}
                    className="card-img-top"
                    alt="plant image"
                  />
                  <div key={uuid()} className="card-body">
                    <h5
                      key={uuid()}
                      className="card-title d-inline  p-1 border-bottom border-end border-start border-success"
                    >
                      {plant.name}
                    </h5>
                    <p key={uuid()} className="card-text mt-3">
                      {plant.category}
                    </p>
                    <Rating transfertRating={plant.rating} />

                    <p
                      key={uuid()}
                      className="card-text fs-3 fw-bold position-absolute bottom-0 end-0 me-2 mb-5"
                    >
                      {plant.unitprice_ati} €
                    </p>
                    <a
                      key={uuid()}
                      href="#"
                      className="btn btn-success position-absolute bottom-0 end-0 me-2 mb-2 "
                    >
                      Ajouter
                    </a>
                    <div className="position-absolute top-0 end-0 me-0 ">
                      <Like />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
