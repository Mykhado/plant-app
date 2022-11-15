import axios from "axios";
import React, { useState } from "react";
import { Plant } from "../pages/Home";
import "./SideBarAdmin.css";
import { v4 as uuid } from "uuid";

interface AdminProps {
  onClickSearch: { (plant: Plant): void };
  transfertPlant: Plant[];
}

const SideBarAdmin = ({ onClickSearch, transfertPlant }: AdminProps) => {
  let id: number;
  let newName: string;
  let newPrice: number;
  let newQuantity: number;
  let newPicture: string;
  let newCategory: string;
  let plantFound: Plant;
  let newRate: number;
  let updateId: number;
  const options = transfertPlant.map((plant) => ({
    value: `${plant.url_picture}`,
    text: `${plant.url_picture}`,
  }));
  const optionsRate = [
    { value: "", text: "--Choisir une note--" },
    { value: 1, text: 1 },
    { value: 2, text: 2 },
    { value: 3, text: 3 },
    { value: 4, text: 4 },
    { value: 5, text: 5 },
  ];
  console.log(options);

  const [plantList, setPlantList] = useState<Plant[]>([]);
  const [imgPlant, setImgPlant] = useState<string>("bloquer.png");

  const [plant, setPlant] = useState<Plant>();
  // const [selectionPicture, setSelectionPicture] = useState<string>();
  const handleInputChange = (e: React.SyntheticEvent<HTMLInputElement>) => {
    id = e.currentTarget.valueAsNumber;
  };
  const handleChangeName = (e: React.SyntheticEvent<HTMLInputElement>) => {
    newName = e.currentTarget.value;
    console.log("name: " + newName);
  };
  const handleChangeQuantity = (e: React.SyntheticEvent<HTMLInputElement>) => {
    newQuantity = e.currentTarget.valueAsNumber;
    console.log("quantity: " + newQuantity);
  };
  const handleChangePrice = (e: React.SyntheticEvent<HTMLInputElement>) => {
    newPrice = e.currentTarget.valueAsNumber;
    console.log("price: " + newPrice);
  };
  const handleChangePicture = (e: React.SyntheticEvent<HTMLSelectElement>) => {
    newPicture = e.currentTarget.value;
    setImgPlant(newPicture);
    // setSelectionPicture(newPicture);
    console.log("picture: " + e.currentTarget.value);
  };
  const handleChangeRate = (e: React.SyntheticEvent<HTMLSelectElement>) => {
    newRate = Number(e.currentTarget.value);
    // setSelectionPicture(newPicture);
    console.log("rating: " + newRate);
  };
  const handleChangeCategory = (e: React.SyntheticEvent<HTMLInputElement>) => {
    newCategory = e.currentTarget.value;
    console.log("category: " + newCategory);
  };
  const handleChangeUpdateId = (e: React.SyntheticEvent<HTMLSelectElement>) => {
    updateId = Number(e.currentTarget.value);
    console.log("update Id: " + updateId);
  };
  const handleClickButton = (e: React.SyntheticEvent<HTMLInputElement>) => {
    axios.get(`http://localhost:8080/api/plant/${id}`).then((response) => {
      plantFound = response.data.data[0];
      console.log(response.data.data);
      setPlant(plantFound);
      onClickSearch(plantFound);
    });
  };

  console.log(plant);
  const handleClickDeleteBtn = (e: React.SyntheticEvent<HTMLInputElement>) => {
    axios.delete(`http://localhost:8080/api/plant/${id}`).then(() => {
      ("élement supprimé");
    });
  };
  const handleClickCreateBtn = (e: React.SyntheticEvent<HTMLInputElement>) => {
    alert("ajout effectué");
    axios
      .post(`http://localhost:8080/api/plant/`, {
        name: newName,
        category: newCategory,
        quantity: newQuantity,
        unitprice_ati: newPrice,
        rating: newRate,
        url_picture: newPicture,
      })
      .then((response) => {
        console.log(response.data.data);
        setPlantList(response.data.data);
      });
  };
  const handleClickUpdateBtn = (e: React.SyntheticEvent<HTMLInputElement>) => {
    alert("Modification effectué");
    axios
      .put(`http://localhost:8080/api/plant/${updateId}`, {
        name: newName,
        category: newCategory,
        quantity: newQuantity,
        unitprice_ati: newPrice,
        rating: newRate,
        url_picture: newPicture,
      })
      .then((response) => {
        console.log(response.data.data);
        setPlantList(response.data.data);
      });
  };
  return (
    <div className="custom-side-bar flex-shrink-0 bg-white border-end ">
      <div className="p-3 border-bottom">
        <span className="fs-5 fw-semibold">Gestion base de données</span>
      </div>

      <div className="p-3 border-bottom">
        <p className="mb-1 fs-5 fw-semibold">Afficher/Supprimer par id </p>
        <form action="">
          <input
            type="number"
            className="form-control"
            onInput={handleInputChange}
            placeholder="Selectionner votre ID"
          />

          <input
            className=" mt-2 form-control fw-bold btn btn-success btn-sm"
            type="reset"
            onClick={handleClickButton}
            value="Search"
          />
          <br />
          <input
            className=" mt-2 form-control fw-bold btn btn-danger btn-sm"
            type="reset"
            onClick={handleClickDeleteBtn}
            value="Delete"
          />
        </form>
      </div>
      <div className="p-3 border-bottom">
        <p className="mb-1 fs-5 fw-semibold">
          Ajouter/Modifier une nouvelle plante
        </p>
        <br />
        <label htmlFor="name">Nom de la plante</label>
        <br />
        <input
          className="form-control"
          type="text"
          id="name"
          onChange={handleChangeName}
        />
        <br />
        <label htmlFor="category">Categorie de la plante</label>
        <br />
        <input
          className="form-control"
          type="text"
          id="category"
          onChange={handleChangeCategory}
        />
        <br />
        <label htmlFor="quantity">Quantité de plante</label>
        <br />
        <input
          className="form-control"
          type="number"
          id="quantity"
          onChange={handleChangeQuantity}
        />
        <br />
        <label htmlFor="price">Prix de la plante</label>
        <br />
        <input
          className="form-control"
          type="number"
          id="price"
          onChange={handleChangePrice}
        />
        <br />
        <label htmlFor="rate">Rating</label>
        <br />
        <select
          style={{ width: "200px" }}
          className="form-control"
          name="choosePicture"
          id="rate"
          onChange={handleChangeRate}
        >
          {optionsRate.map((option) => (
            <option key={uuid()} value={option.value}>
              {option.text}
            </option>
          ))}
        </select>{" "}
        <br />
        <label htmlFor="urlPicture" className="mt-2">
          Image de la plante
        </label>{" "}
        <br />
        <select
          style={{ width: "200px" }}
          className=" form-control"
          name="choosePicture"
          id="urlPicture"
          onChange={handleChangePicture}
        >
          <option value="">--Choisir une image--</option>
          {options.map((option) => (
            <option key={uuid()} value={option.value}>
              {option.text}
            </option>
          ))}
        </select>
        <br />
        {/* <div
          style={{ height: "200px", width: "200px" }}
          className="form-control mb-2"
        > */}
        <label htmlFor="imgPlant"> Plante selectionnée</label>
        <img
          id="imgPlant"
          style={{ height: "200px", width: "200px" }}
          className=" form-control mb-2"
          src={`http://localhost:8080/assets/${imgPlant}`}
          alt="plant"
        />
        {/* </div> */}
        <input
          className="form-control fw-semibold btn btn-success btn-sm"
          type="reset"
          value="Ajouter"
          onClick={handleClickCreateBtn}
        />{" "}
        <p className="mt-2 red fw-semibold">
          ⚠️ Selectionner un Id pour une modification ⚠️
        </p>
        <div className="input-group">
          <input
            className="form-control fw-semibold btn btn-warning btn-sm"
            type="reset"
            value="Modifier"
            onClick={handleClickUpdateBtn}
          />
          <select
            name="chooseId"
            id="IdSelect"
            className="form-control"
            onChange={handleChangeUpdateId}
          >
            <option value="">--Choisir un ID--</option>
            {transfertPlant.map((plant) => (
              <option key={uuid()} placeholder="ID" value={plant.id}>
                ID:{plant.id}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
};

export default SideBarAdmin;
