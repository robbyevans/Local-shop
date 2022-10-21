import './App.css';
import { useState, useCallback } from "react";
import { Route, Routes } from "react-router";
import MerchantPage from "./pages/MerchantPage";
import StorePage from "./pages/StorePage";
import SideBar from "./components/sidebar/SideBar"



function App() {
  const [admins, setAdmins] = useState();
  //mStores meaning merchant stores
  const [mStores, setmStores] = useState();

  const getAdmins = useCallback((admins) => {
    setAdmins(admins);
  }, []);

  const getmStores = useCallback((mStores) => {
    setmStores(mStores);
  }, []);

  function onAddAdmin(newAdmin) {
    setAdmins([...admins, newAdmin]);
  }

  return (
    <div>
      <Routes>
        <Route exact path="/" element={<SideBar/>} />
        <Route
          path="/merchantpage"
          element={
            <MerchantPage
              admins={admins}
              getAdmins={getAdmins}
              mStores={mStores}
              getmStores={getmStores}
              onAddAdmin={onAddAdmin}
            />
          }
        ></Route>
        <Route path="/storepage/:storeId" element={<StorePage />}></Route>
      </Routes>
    </div>
  );
}

export default App;
