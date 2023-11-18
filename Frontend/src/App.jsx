import { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
function App() {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get("/api/beer")
      .then((res) => {
        setData(res.data);
        console.log(res);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);
  return (
    <>
      <div>
        <h1>Connecting Backend to Frontend</h1>
        {data.map((item, index) => {
          return (
            <>
              <div key={`${item.value}`}>
                <span>{item.color}</span>
                <span>{item.value}</span>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
}

export default App;
