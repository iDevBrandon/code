import React, { useEffect, useState } from "react";

function CustomSearch() {
  const [userData, setUserData] = useState([]);
  useEffect(() => {
    const data = [
      { name: "Manoj", age: "23", profession: "SE" },
      { name: "Virat", age: "19", profession: "Batsman" },
      { name: "Rohit", age: "34", profession: "one piece" },
      { name: "Shami", age: "56", profession: "Naruto" },
      { name: "Bumrah", age: "67", profession: "Damon Slyer" },
    ];

    setUserData(data);
  });
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Age</th>
            <th>Profession</th>
          </tr>
        </thead>
        <tbody>
          {userData && userData.length > 0
            ? userData.map((item, index) => (
                <tr>
                  <td>{item.name}</td>
                  <td>{item.age}</td>
                  <td>{item.profession}</td>
                </tr>
              ))
            : "No Data Found!"}
        </tbody>
      </table>
    </div>
  );
}

export default CustomSearch;
