import axios from "axios";
import { useEffect, useState } from "react";

const Quiz = () => {
  const [prodata, setProdata] = useState([]);

  const config = {
    headers: {
      Authorization: "Bearer " + localStorage.getItem("t"),
    },
  };

  useEffect(() => {
    axios
      .get("http://localhost:90/destination/mydestination/", config)
      .then((result) => {
        console.log(result.data);
        setProdata(result.data);
      })
      .catch((e) => {
        console.log("something went wrong");
      });
  }, []);

  return <div></div>;
};

export default Quiz;
