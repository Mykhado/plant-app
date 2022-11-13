import { useState } from "react";
import React from "react";
interface filterSearchBar {
  // onChangeInput: { (selectInput: string): void };
  onClickInput: { (selectInput: string): void };
}

const SearchBar = ({ onClickInput }: filterSearchBar) => {
  const [selectInput, setSelectInput] = useState<string>("");
  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSelectInput(e.currentTarget.value);
    // onChangeInput(e.currentTarget.value);
  };
  const handleClickSearch = (e: React.SyntheticEvent<HTMLInputElement>) => {
    onClickInput(selectInput);
  };

  return (
    <div className="input-group mb-3">
      <input
        className="form-control border-success   border border-3 border-opacity-25 "
        type="search"
        placeholder="Rechercher..."
        aria-label="Search"
        onChange={handleInput}
      />
      <input
        type="button"
        className="btn btn-outline-success border border-3 border-warning fw-bold "
        onClick={handleClickSearch}
        value="Search"
      />
    </div>
  );
};
export default SearchBar;
