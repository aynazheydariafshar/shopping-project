import axios from "axios";
import { DataContext } from "context/DataContext";
import { useEffect, useState } from "react";
import RoutesPage from "routes/RoutesPage";
import "styles/App.css";
import { ToastContainer } from "react-toastify";

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
      <div>
        <ToastContainer
            position="bottom-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
          />
        <RoutesPage />
      </div>
    </DataContext.Provider>
  );
}

export default App;
