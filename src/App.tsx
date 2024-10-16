import { BrowserRouter, Route, Routes } from "react-router-dom";
import { MenuProvider } from "./context/menuContext";
import { UserStorage } from "./context/userContext";
import { CategoryProvider } from "./context/categoryContext";
import { SearchProvider } from "./context/searchContext";
import Home from "./pages/home";
import Login from "./pages/login";
import SignUp from "./pages/registers";
import Search from "./pages/search";

function App() {
  return (
    <UserStorage>
      <MenuProvider>
        <CategoryProvider>
          <SearchProvider>
            <BrowserRouter>
              <div className="App">
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/login" element={<Login />} />
                  <Route path="/registers" element={<SignUp />} />
                  <Route path="/search" element={<Search />} />
                </Routes>
              </div>
            </BrowserRouter>
          </SearchProvider>
        </CategoryProvider>
      </MenuProvider>
    </UserStorage>
  );
}

export default App;
