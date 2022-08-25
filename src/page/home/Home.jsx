import Header from "components/Header";
import NewPrice from "./components/NewPrice";
import Popular from "./components/Popular";
import Ratings from "./components/Ratings";

function Home() {
  return (
    <>
      <Header />
      <Popular title="Ən çox satılanlar" banner />
      <NewPrice title="Yeni hədiyyələr" />
      <Ratings/>
    </>
  );
}

export default Home;
