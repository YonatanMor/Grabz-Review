import styled from "styled-components";
import CountryList from "./CountryList";
// import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
// import Germany from "./Germany";
const AboutCountries = () => {
  return (
    <Div>
      <h1>Countires In The European Union</h1>
      <CountryList />
    </Div>
  );
};

export default AboutCountries;

const Div = styled.div`
  /* height: 50vh; */
  width: 85vw;
  background-color: gray;
  border: solid 6px lightcoral;
  border-radius: 16px;
`;
