import Header from './components/Header/Header';
import ContentGrid from './components/ContentGrid/ContentGrid';
import Sidebar from './components/Sidebar/Sidebar';
import './App.css';

function App() {
  return (
    <div className="app-container">
      <Header />
      <div className="main-row">
        <ContentGrid />
        <Sidebar />
      </div>
    </div>
  );
}

export default App;
