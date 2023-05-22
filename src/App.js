import Navbar from "./Components/Navbar/Navbar";
import Banner from "./Components/Banner/Banner";
import RowPoster from "./Components/RowPoster/RowPoster";
import {ComedyMovies,HorrorMovies,RomanceMovies,Documentaries,action,originals} from './url'
import "./App.css";

function App() {
  return (
    <>
      <Navbar />
      <Banner />
      <RowPoster url={originals} title="Netflix Originals" />
      <RowPoster url={action} title="Action" isSmall />
      <RowPoster url={ComedyMovies} title="ComedyMovies" isSmall />
      <RowPoster url={HorrorMovies} title="HorrorMovies" isSmall />
      <RowPoster url={RomanceMovies} title="RomanceMovies" isSmall />
      <RowPoster url={Documentaries} title="Documentaries" isSmall />
    </>
  );
}

export default App;
