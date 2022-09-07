import Header from "components/Header";
import { useSelector } from "react-redux";
import NewPrice from "./components/NewPrice";
import Popular from "./components/Popular";
import Ratings from "./components/Ratings";
import Services from "./components/Services";

function Home() {

  return (
    <>
      <Header />
      <Popular title="Ən çox satılanlar" banner />
      <NewPrice title="Yeni hədiyyələr" />
      <Ratings/>
      <Services/>
    </>
  );
}

export default Home;
