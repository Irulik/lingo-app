import { Routes, Route } from "react-router-dom";
// import { PrivateRoute } from './PrivateRoute';

import Home from "./pages/Home/Home.jsx";
import Favorites from "./pages/Favorites/Favorites.jsx";
import Teachers from "./pages/Teachers/Teachers.jsx";
import Layout from "./Layout/Layout.jsx";


const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="teachers" element={<Teachers />} />
        <Route  
          path="favorites"
          // element={<PrivateRoute component={<Favorites />} redirectTo="/" />}
          element={<Favorites />} />
         {/* <Route path="*" element={<Home />} /> */}
      </Route>
    </Routes>
  );
};

export default App;
