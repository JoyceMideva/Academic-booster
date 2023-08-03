import Details from "../components/Details";
import Footer from "../components/Footer";
import Nav from "../components/Nav";

function Login() {
  return (
    <div className="h-[100vh] flex flex-col">
        <Nav className="flex-1 "/>
      <Details />
      <Footer className="flex-1 "/>
    </div>
  );
}
export default Login;
