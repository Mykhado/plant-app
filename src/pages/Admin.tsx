import axios from "axios";
import React, { useEffect, useState } from "react";
import { v4 as uuid } from "uuid";
import { Plant } from "./Home";
import "./Admin.css";
import SideBarAdmin from "../components/SideBarAdmin";

// let listPlantAdmin:Plant ;

const Admin = () => {
  let plantGet: Plant;
  const [displayListPlant, setDisplayListPlant] = useState<Plant[]>([]);
  const [displayPlant, setDisplayPlant] = useState<Plant>();
  const handleClickSearch = (onClickSearch: Plant) => {
    plantGet = onClickSearch;
    setDisplayPlant(plantGet);
    console.log(onClickSearch);
  };

  useEffect(() => {
    axios.get("http://localhost:8080/api/plant").then((response) => {
      //   listPlantAdmin = response.data.data;
      setDisplayListPlant(response.data.data);
      //   console.log(response.data.data);
    });
  }, []);
  //   console.log(displayPlant);

  return (
    <div className="d-flex align-items-stretch">
      <SideBarAdmin
        transfertPlant={displayListPlant}
        onClickSearch={handleClickSearch}
      />
      <div className="container-fluid custom-main">
        {displayPlant ? (
          <h3 className="fs-5">
            Dernière recherche: <br /> <strong>#</strong> {displayPlant.id}{" "}
            {displayPlant.name} <strong>category</strong>:{" "}
            {displayPlant.category} <strong>quantity</strong>:{" "}
            {displayPlant.quantity} <strong>rate</strong>: {displayPlant.rating}
            /5 <strong>price</strong>: {displayPlant.unitprice_ati}€
          </h3>
        ) : null}
        <div className=" container-fluid custom-main">
          <ul>
            {displayListPlant.map((plant) => (
              <li key={uuid()}>
                <strong>#</strong> {plant.id} {plant.name}{" "}
                <strong>category</strong>: {plant.category}{" "}
                <strong>quantity</strong>: {plant.quantity}{" "}
                <strong>rate</strong>: {plant.rating}/5 <strong>price</strong>:{" "}
                {plant.unitprice_ati}€ <strong>url-picture</strong>:{" "}
                {plant.url_picture}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Admin;
