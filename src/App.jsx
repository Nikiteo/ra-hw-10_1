import './App.css';
import ServiceAdd from './components/serviceAdd';
import ServiceList from './components/serviceList';

export default function App() {
  return (
    <div className="App">
      <ServiceAdd />
      <ServiceList />
    </div>
  );
}