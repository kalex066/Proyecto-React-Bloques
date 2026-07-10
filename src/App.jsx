import Header from './components/Header';
import ContentGrid from './components/ContentGrid';
import Sidebar from './components/Sidebar';
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
