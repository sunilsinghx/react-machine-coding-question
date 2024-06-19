/* eslint-disable react/prop-types */

import { useEffect, useState } from "react";

function Dropdown({ data }) {
  const [item, setItem] = useState(data);
  const [searchText, setText] = useState("");

  useEffect(() => {
    const filterItem = item.filter((curr) => {
        const lowercase = searchText.toLowerCase();

        return curr.id.toLowerCase().includes(lowercase) || curr.name.toLowerCase().includes(lowercase) ||curr.desc.toLowerCase().includes(lowercase)
    });

    searchText ? setItem(filterItem) : setItem(data);
  }, [searchText]);

  return (
    <div>
      <input
        type="text"
        placeholder="search"
        value={searchText}
        onChange={(e) => setText(e.target.value)}
      />

      <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
        {item.map((item) => (
          <li key={item.id}>
            <span>{item.id}</span>
            <br />
            <span>{item.name}</span>
            <br />
            <span>{item.desc}</span>
            <br />
          </li>
        ))}
      </div>
    </div>
  );
}

export default Dropdown;
