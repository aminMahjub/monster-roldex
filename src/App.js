import { Fragment, useEffect, useState } from "react";
import CardList from "./components/card-list-component/card-list-component";
import SearchBox from "./components/search-box-component/search-box-component";
import "./App.css";

const App = () => {
  const [monsters, setMonsters] = useState([]);
  const [searchFiled, setSearchField] = useState("");
  const [filteredMonsters, setFilteredMonsters] = useState(monsters);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((respone) => respone.json())
      .then((data) => setMonsters(data));
  }, []);
  useEffect(() => {
    const newFilteredMonsters = monsters.filter((monster) => {
      return monster.name.toLowerCase().includes(searchFiled);
    });
    setFilteredMonsters(newFilteredMonsters);
  }, [monsters, searchFiled]);

  const onSearchChange = (event) => {
    const searchFieldText = event.target.value.toLowerCase();

    setSearchField(searchFieldText);
  };

  return (
    <Fragment>
      <SearchBox
        className="monster-searchbox"
        onSearchChange={onSearchChange}
        placeholder="search monster"
      />
      <CardList monsters={filteredMonsters} />
    </Fragment>
  );
};
export default App;
