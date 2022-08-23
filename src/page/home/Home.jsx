import Header from "components/Header";
import Popular from "./components/Popular";



function Home() {
  return (
    <>
      <Header />
<Popular title="Ən çox satılanlar" banner/>
<Popular title="Yeni hədiyyələr" />
    </>
  );
}

export default Home;
