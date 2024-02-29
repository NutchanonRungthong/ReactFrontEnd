
import Hello from "./assets/Hello";
import Contact from "./assets/Contact";

function App() {
  const helloData = [
    { name: 'Pond', message: " Hi there " },
    { name: 'Tom', message: ' Hello' }
  ];
  return (
    <div className="App">
      {helloData.map((data, index) => (
        <Hello key={index} name={data.name} message={data.message} />
      ))}
      <Contact email="Pondzaza@gmail.com" phone=" 025845848" />
    </div>
  );
}

export default App;
