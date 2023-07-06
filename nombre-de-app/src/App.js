
import { ItemListContainer }  from "./components/ItemListContainer"
import BasicExample from "./components/NavBar"
import { BrowserRouter , Routes , Route } from "react-router-dom";

export default function App() {
  <>
  <BrowserRouter>
    <BasicExample />
    <Routes>
      <Route exact path="/" element={< ItemListContainer greeting="productos" />} />
      <Route exact path="/category/:id" element={< ItemListContainer greeting="hola" />} />
      {/* <Route exact path="/item/:id" element={< ItemDetailContainer />} /> */}
    </Routes>
    <ItemListContainer greeting= "Hola"/>
    </BrowserRouter>
    </>
}

