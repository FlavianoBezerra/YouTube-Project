import { BrowserRouter, Route, Routes } from "react-router-dom";
import { MenuProvider } from "./context/menuContext";
import { UserStorage } from "./context/userContext";
import { CategoryProvider } from "./context/categoryContext";
import { SearchProvider } from "./context/searchContext";
import Home from "./pages/home";
import Login from "./pages/login";
import SignUp from "./pages/registers";
import Search from "./pages/search";
import Studio from "./pages/studio";

function App() {
  return (
    <BrowserRouter>
      <UserStorage>
        <MenuProvider>
          <CategoryProvider>
            <SearchProvider>
                <div className="App">
                  <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/registers" element={<SignUp />} />
                    <Route path="/search" element={<Search />} />
                    <Route path="/studio" element={<Studio />} />
                  </Routes>
                </div>
            </SearchProvider>
          </CategoryProvider>
        </MenuProvider>
      </UserStorage>    
    </BrowserRouter>
  );
}

export default App;
