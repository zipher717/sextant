import "./App.css";

function App() {
  return (
    <div className="App">
      <Banner />
      <Exhibit />
    </div>
  );
}

function Banner() {
  return (
    <div className="title">
      <h1>Sextant</h1>
    </div>
  );
}

function Exhibit() {
  return (
    <>
      <h2 className="heading">
        A Solution for hasslefree Worlkflow for all the field Technician's
      </h2>
      <form>
        <p>Network Dashboard</p>
        <p>Computer List</p>
        <p>Computer Item</p>
        <p>Netwrorking Information</p>
        <p>API Integration</p>
        <p>Routing</p>
      </form>
    </>
  );
}

export default App;

