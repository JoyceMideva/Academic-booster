import Footer from "../components/Footer";
import Nav from "../components/Nav";

function View() {
  return (
    <div className="h-[100vh] flex flex-col">
      <Nav className="flex-1" />
      <main className="flex-1">
        <h1>View more Applications </h1>
      </main>
      <Footer className="flex-1" />
    </div>
  );
}
export default View;
