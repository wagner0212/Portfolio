import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Index";
import Sobre from "./pages/Sobre/Index";
import Projetos from "./pages/Projetos/Index";
import Contatos from "./pages/Contatos/Index";
import Page404 from "./pages/Page404/Index";
import PaginaBase from "./pages/PaginaBase/Index";


function AppRoutes () {
    return (
        <BrowserRouter>
           <Routes>
           <Route path="/" element={ <PaginaBase/> }>
                 <Route index element={ <Home /> }></Route>
                 <Route path="/sobre" element={ <Sobre /> }></Route>
                 <Route path="/projetos" element={ <Projetos /> }></Route>
                 <Route path="/contatos" element={ <Contatos /> }></Route>
                 <Route path="*" element={ <Page404 /> }></Route>
              </Route>
           </Routes>
        
        </BrowserRouter>
    );
}
export default AppRoutes;
