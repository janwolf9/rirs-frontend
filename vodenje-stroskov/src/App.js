import './App.css';
import SideBar from './components/Sidebar.jsx';
import TableComponent from './components/CostTracking.jsx';
import AddCost from './components/AddCost.jsx';

function App() {
  return (
    <div className="App">
      <header className="App-header">
              <SideBar></SideBar>
              <TableComponent></TableComponent>
              <AddCost onAdd={(newCost) => console.log(newCost)} />
      </header>
    </div>
  );
}

export default App;
