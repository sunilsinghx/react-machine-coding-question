import { useState } from "react";

/* eslint-disable react/prop-types */
function Home({ data }) {
  const [selectedCountry, setCountry] = useState("");
  const [selectedState, setState] = useState("");
  const [selectedCity, setCity] = useState("");

  //select country 
  const country = Object.keys(data.countries);

  //select states  where country is selected country
  const states = Object.keys(data.states).filter(
    (state) => data.states[state].country === selectedCountry
  );

  //select city where country is 'selectedCountry' and state is 'selectedState'
  const cities = Object.keys(data.cities).filter(
    (city) =>
      data.cities[city].country === selectedCountry &&
      data.cities[city].state === selectedState
  );

  return (
    <div>
      <select value={selectedCountry} onChange={(e) => setCountry(e.target.value)}>
        <option key="" hidden>
          Select Country
        </option>
        {country.map((curr) => (
          <option
            key={curr}
            value={curr}
          >
            {curr}
          </option>
        ))}
      </select>
      <select value={selectedState} disabled={!selectedCountry}  onChange={(e) => setState(e.target.value)}>
        <option key="" hidden>
          Select State
        </option>
        {states.map((curr) => (
          <option
            key={curr}
            value={curr}
          >
            {curr}
          </option>
        ))}
      </select>
      <select  value={selectedCity} disabled={!selectedState}  onChange={(e) => setCity(e.target.value)}   >
        <option key="" hidden>
          Select City
        </option>
        {cities.map((curr) => (
          <option
            key={curr}
            value={curr}
         
          >
            {curr}
          </option>
        ))}
      </select>
    </div>
  );
}

export default Home;
