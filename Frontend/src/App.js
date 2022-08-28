import { useRoutes } from "react-router-dom";
import routes from "router";


function App() {
  const getRoutes = useRoutes(routes);

  return (
    <div>
      {getRoutes}
    </div>
  );
}

export default App;
