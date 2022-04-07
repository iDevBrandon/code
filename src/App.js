import "./App.css";
import FilteringTable from "./components/FilteringTable";
import GlobalFilter from "./components/GlobalFilter";
import SortingTable from "./components/SortingTable";

function App() {
  return (
    <div className="App" style={{ display: "flex", width: "100%" }}>
      <div
        style={{ width: "15%", backgroundColor: "#4C4C4C", height: "100vh" }}
      >
        Sidebar
      </div>
      <FilteringTable />
    </div>
  );
}

export default App;
