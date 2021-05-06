import logo from './logo.svg';
import './App.css';
import MaterialLayout from './components/Layout/MaterialLayout';
import Resume from './components/Resume';

function App() {
  return (
    <div className="App">
      <MaterialLayout>
        <Resume />
      </MaterialLayout>

    </div>
  );
}

export default App;
