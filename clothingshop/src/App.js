import axios from "axios";
import { DataContext } from "context/DataContext";
import { useEffect, useState } from "react";
import RoutesPage from "routes/RoutesPage";
import "styles/App.css";

function App() {
  //all of clothes
  const [data, setData] = useState();

  //get data from link
  const getData = () => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((res) => setData(res.data))
      .catch((err) => alert(err));
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <DataContext.Provider value={{ data, getData }}>
      <RoutesPage />
    </DataContext.Provider>
  );
}

export default App;
