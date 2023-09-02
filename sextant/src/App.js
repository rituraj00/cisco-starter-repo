import './App.css';
import Banner from './components/Banner/Banner';
import Exhibit from './components/Exhibit/Exhibit';

function App() {
  const data = [
    {
      title:"IP Addresses", 
      points: [
        {title:"Machine A", description: "", data:["Data 1", "Data 2", "Data 3"]},
        {title:"Machine B", description: "", data:["Data 1", "Data 2", "Data 3"]},
        {title:"Machine C", description: "", data:["Data 1", "Data 2", "Data 3"]}
      ]
    },
    {
      title:"Latency", 
      points: [
        {title:"Link 1", description: "", data:["Data 1", "Data 2", "Data 3"]},
        {title:"Link 2", description: "", data:["Data 1", "Data 2", "Data 3"]},
        {title:"Link 3", description: "", data:["Data 1", "Data 2", "Data 3"]}
      ]
    },
  ];
  return (
    <div >
      <Banner/>
      <Exhibit data={data}/>
    </div>
  );
}

export default App;
