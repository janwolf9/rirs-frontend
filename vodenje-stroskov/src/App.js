import logo from './logo.svg';
import './App.css';
import SideBar from './components/Sidebar.jsx';
import TableComponent from './components/CostTracking.jsx';

function App() {
  return (
    <div className="App">
      <header className="App-header">
              <SideBar></SideBar>
              <TableComponent></TableComponent>
      </header>
    </div>
  );
}

export default App;
