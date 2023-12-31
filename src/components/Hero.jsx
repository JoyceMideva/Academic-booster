import { Link } from "react-router-dom"

Link
function Hero() {
    return(
        <div className="">
        <div className="flex items-center flex-col  justify-center h-[80vh]  bg-cover bg-center bg-no-repeat bg-[linear-gradient(rgba(0,0,0,.5),rgba(0,0,0,.5)),url('assets/images/hero.jpg')]">
<h1 className="text-[#34BAED] py-3 font-bold text-5xl ">SCHOLARSHIP PROGRAMS</h1>
<Link to="/view"><button className=" sm:px-6 border-2 py-4 px-12  bg-[#3871C1] rounded-full font-bold text-[#fff] text-xl w-[100%] capitalize">View More</button></Link>
        </div>
        </div>
    )
}
export default Hero