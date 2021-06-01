import './App.css';
import Banner from './Components/Banner/Banner';
import Footer from './Components/Footer/Footer';
import NavBar from './Components/NavBar/NavBar';
import RowPost from './Components/RowPost/RowPost';
import { actions, comedy, documentaries, horror, originals, romance, topRated, Trending } from './URLs';

function App() {
  return (
    <div className="app">
        <NavBar/>

        <Banner/>

        <RowPost url={Trending} title="TRENDING NOW" class="posters__poster" />
        <RowPost url={originals} title="Netflix Originals" class="posters__smallPoster" />
        <RowPost url={topRated} title="Top Rated" class="posters__smallPoster" />
        <RowPost url={actions} title="Action Movies" class="posters__smallPoster" />
        <RowPost url={comedy} title="Comedy Movies" class="posters__smallPoster" />
        <RowPost url={horror} title="Horror Movies" class="posters__smallPoster" />
        <RowPost url={romance} title="Romance Movies" class="posters__smallPoster" />
        <RowPost url={documentaries} title="Documentaries" class="posters__smallPoster" />

        <Footer/>
    </div>
  );
}

export default App;
