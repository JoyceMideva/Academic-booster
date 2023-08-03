function Post(props) {
    return(
        <div className=" border-gray-500 border-2 ">
              <div className=" text-center   w-40 h-40">
            <div >
                <img className="  justify-between  py-4 px-5 " width={500} src={props.icon} alt="" />
            </div>
            <h4 className="">{props.category}</h4>
            <h4 className="">{props.type}</h4>
        </div>
        </div>
    )
}
export default Post