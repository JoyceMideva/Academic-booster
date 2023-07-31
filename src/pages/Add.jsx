import AddPost from "../components/AddPost";
import AddStudent from "../components/AddStudent";
import Footer from "../components/Footer";
import Nav from "../components/Nav";

function Add() {
    return(
        <div>
            <Nav/>
            <AddStudent/>
            <AddPost/>
            <Footer/>
        </div>
    )
}
export default Add