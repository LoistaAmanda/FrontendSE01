import { Route, Routes } from "react-router-dom";
import CreateMovie from "./pages/Create";
import NowPlayingMovie from "./pages/NowPlaying";
import PopularMovie from "./pages/Popular";
import TopRatedMovie from "./pages/TopRated";
import Home from "./pages/home";
import Layout from "./Layout/index"
import Counter from "./components/Counter/Counter";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movie/create" element={<CreateMovie />} />
        <Route path="/movie/now" element={<NowPlayingMovie />} />
        <Route path="/movie/popular" element={<PopularMovie />} />
        <Route path="/movie/top" element={<TopRatedMovie/>} />
        <Route path='/counters' element={<Counter/>}></Route>
      </Routes>
    </Layout>
  );
}

export default App;
