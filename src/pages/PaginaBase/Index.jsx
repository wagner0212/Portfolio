import Header from "../../components/Header/Index";
import Container from "../../components/Container/Index";
import Footer from "../../components/Footer/Index";
import { Outlet } from "react-router-dom";

function PageBase() {
    return(
        <main>
           <Header /> 
           <Container>
             <Outlet />
           </Container>
           <Footer />
        </main>
    );
}
 export default PageBase;