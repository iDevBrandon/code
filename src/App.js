import "./App.css";
import BasicTable from "./components/BasicTable";
import SortingTable from "./components/SortingTable";

function App() {
  return (
    <div className="App" style={{ display: "flex", width: "100%" }}>
      <div style={{ width: "15%", backgroundColor: "#4C4C4C" }}>Sidebar</div>
      <div style={{ width: "100%" }}>
        <div>
          <h1>Search Tab</h1>
          <form>
            <input />
            <input />
          </form>
        </div>
        <div style={{ display: "flex", justifyContent: "end" }}>
          {/* <BasicTable /> */}
          <SortingTable />
        </div>
      </div>
    </div>
  );
}

export default App;
