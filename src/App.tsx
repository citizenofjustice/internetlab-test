import Header from "./components/Header";
import Layout from "./components/Layout";
import Hero from "./components/Hero";
import TasksList from "./components/TasksList";
import "./assets/styles/global.scss";
import Third from "./components/Third";
import Reviews from "./components/Reviews";
import Questions from "./components/Questions";
import RespondentsStats from "./components/RespondentsStats";
import Footer from "./components/Footer";
import ContactForm from "./components/ContactForm";

function App() {
  return (
    <div className="App">
      <Layout>
        <div className="top">
          <Header />
          <Hero />
        </div>
        <TasksList />
        <Third />
        <Reviews />
        <Questions />
        <RespondentsStats />
        <ContactForm />
        <Footer />
      </Layout>
    </div>
  );
}

export default App;
