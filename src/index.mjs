import React, { useState } from "react";

export default function Search({
  data = [],
  fields = [],
  bg = "#dedede",
  text = "black",
}) {
  // const [filteredByFields, setFilteredByFields] = useState([]);
  // const [filtered, setFiltered] = useState([]);
  const [searchField, setSearchField] = useState("");

  // useEffect(() => {
  //   filterDataByFields();
  // }, []);

  const handleChange = (e) => {
    setSearchField(e.target.value);
    console.log(e.target.value);
  };

  // useEffect(() => {
  //   filterDataBySearchField(filteredByFields, searchField);
  // }, [filteredByFields, searchField]);

  const handleKeyUp = (e) => {
    if (e.key === "Escape") {
      // setSearchField("");
      console.log("Escape");
    } else if (e.key === "Enter") {
      console.log("Enter");
    }
  };

  // const filterDataByFields = () => {
  //   let res = data.map((item) => {
  //     return fields.reduce((acc, field) => {
  //       acc[field] = item[field];
  //       return acc;
  //     }, {});
  //   });

  //   setFilteredByFields(res);
  // };

  // const filterDataBySearchField = (data, field) => {
  //   let res = data.filter((item) => {
  //     return Object.values(item).some((value) => {
  //       if (typeof value === "string") {
  //         return value.toLowerCase().includes(field.toLowerCase());
  //       }
  //       return false;
  //     });
  //   });

  //   setFiltered(res);
  // };

  return (
    <div>
      <input
        placeholder="Search..."
        style={{ width: "100vw", padding: "10px" }}
        onChange={handleChange}
        value={searchField}
        onKeyUp={handleKeyUp}
      />
      {/* <div>
        <table style={{ width: "100vw" }}>
          <thead>
            <tr style={{ background: bg, color: text }}>
              {fields.length &&
                fields.map((f, i) => {
                  return <th key={i}>{f}</th>;
                })}
            </tr>
          </thead>
          <tbody>
            {filtered.length &&
              filtered.map((d, i) => {
                return (
                  <tr key={i}>
                    {fields.length &&
                      fields.map((f, i) => {
                        return <td key={i}>{d[f]}</td>;
                      })}
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div> */}
    </div>
  );
}
