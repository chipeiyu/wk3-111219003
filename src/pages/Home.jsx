import Header from "../components/Header";
import Footer from "../components/Footer";
import Contain from "../components/Contain";
function Home(){
    return(
<>
<div className = "container layout">
    <Header className = "layout-header"/>
    <Footer className = "layout-Footer"/>
    <Contain className = "layout-Contain"/>
</div>

</>
    )
}
export default Home;