import Header from "./components/Header";
import Section from "./components/Section";
function App() {
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col col-2 header">
            <Header />
          </div>
        </div>
      </div>
      <div className="container-fluid">
        <div className="row">
          <div className="col col-2"></div>
          <div className=" col col-10 section me-0">
            <Section />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
