import { useState, useEffect } from "react";

const CountryList = () => {
  const [data, setData] = useState();

  useEffect(() => {
    (async function getData() {
      let countries = "";
      try {
        const info = await (
          await fetch("https://api.npoint.io/f761686b63cad80fb251")
        ).json();
        info.forEach((item) => {
          countries += ` ${item.country}`; // how to put each country in a li element? this: `<li> ${item.country}</li>` dosnt work
        });
      } catch (error) {
        console.log("error fetching data: ", error);
      }
      setData(countries);
    })();
  }, []);

  return <div>{data}</div>;
};

export default CountryList;
