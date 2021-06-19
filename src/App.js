import React, { useState, useEffect } from "react";
import "./App.css";
import Header from "./components/Header";
import Recipes from "./components/Recipes";
import Axios from "axios";
import SyncLoader from 'react-spinners/SyncLoader';

function App() {
  const [loading,setLoading]=useState(false);
  const [search, setSerach] = useState("Truffle");
  const [recipes, setRecipes] = useState([]);

  const APP_ID = "bdee668d";
  const APP_KEY = "e75d598b037d481766eccbb6fe5102ff";

  useEffect(() => {
    getRecipes();
  }, []);

  const getRecipes = async () => {
    const res = await Axios.get(
      `https://api.edamam.com/search?q=${search}&app_id=${APP_ID}&app_key=${APP_KEY}`
    );
    setTheRecipes(res.data.hits);
    setLoading(true);
    setTimeout(()=>{
      setLoading(false);
    },2000);
  };

  const onInputChange = e => {
    setSerach(e.target.value);
  };

  const onSearchClick = () => {
    getRecipes();
  };
  const setTheRecipes=(recp)=>{
    recp.pop();
    console.log(recp);
    setRecipes(recp);
  }
  return (
    <div className="App">
      <Header
        search={search}
        onInputChange={onInputChange}
        onSearchClick={onSearchClick}
      />
      {loading?<div className="Loader"><SyncLoader color={'#fb8d34'} loading={true} size={40}/></div>:<div className="container-fluid abc">
        <Recipes recipes={recipes} />
      </div>}
    </div>
  );
}

export default App;
