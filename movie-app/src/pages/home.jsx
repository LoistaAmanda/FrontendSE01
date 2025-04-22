import Navbar from "../components/Navbar/Navbar";
import Hero from "../components/Hero/Hero";
import Movies from "../components/Movies/movies";
import Footer from "../components/Footer/Footer";

function Home() {
  return (
    <div>
      <Navbar />
      <main>
        <Hero />
        <Movies />
        {/* <Counter /> */}
      </main>
      <Footer />
    </div>
  );
}

export default Home;
