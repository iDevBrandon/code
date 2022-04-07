import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";

function CustomSearch() {
  const [userData, setUserData] = useState([]);
  const [userSearchData, setUserSearchData] = useState([]);
  const [name, setName] = useState("");

  useEffect(() => {
    const data = [
      { name: "Manoj", age: "23", profession: "SE" },
      { name: "Virat", age: "19", profession: "Batsman" },
      { name: "Rohit", age: "34", profession: "one piece" },
      { name: "Shami", age: "56", profession: "Naruto" },
      { name: "Bumrah", age: "67", profession: "dell" },
    ];

    setUserData(data);
    setUserSearchData(data);
  }, []);

  const handleSearch = () => {
    const newData = userData.filter((user) =>
      user.name.toLowerCase().includes(name.toLowerCase())
    );
    setUserData(newData);
    setUserSearchData(newData);
  };

  return (
    <div>
      <Table>
        <tr>
          <td>
            <input
              type="text"
              placeholder="Enter your name..."
              onChange={(e) => setName(e.target.value)}
            />
          </td>

          <td>
            <select>
              <option value="">Name</option>
              <option value="batsman">Batsman</option>
              <option value="se">SE</option>
              <option value="one_piece">one piece</option>
              <option value="naruto">Naruto</option>
              <option value="dell">dell</option>
            </select>
          </td>
          <td>
            <button onClick={() => handleSearch()}>Search</button>
          </td>
        </tr>
      </Table>

      <Table responsive size="sm">
        <thead>
          <tr>
            <th>Name</th>
            <th>Age</th>
            <th>Profession</th>
          </tr>
        </thead>
        <tbody>
          {userSearchData && userSearchData.length > 0
            ? userSearchData.map((item, index) => (
                <tr key={index}>
                  <td>{item.name}</td>
                  <td>{item.age}</td>
                  <td>{item.profession}</td>
                </tr>
              ))
            : "No Data Found!"}
        </tbody>
      </Table>
    </div>
  );
}

export default CustomSearch;
