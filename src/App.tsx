import Header from "./components/Header";
import Layout from "./components/Layout";
import "./assets/styles/global.scss";
import Hero from "./components/Hero";

function App() {
  return (
    <div className="App">
      <Layout>
        <Header />
        <Hero />
      </Layout>
    </div>
  );
}

export default App;
