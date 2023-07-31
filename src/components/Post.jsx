function Post(props) {
    return(
        <div>
              <div className=" text-center  w-40 h-40">
            <div >
                <img className="h-[50%]  justify-between rounded-[50%] py-4 px-5 border-5 " width={500} src={props.icon} alt="" />
            </div>
            <h4 className="">{props.category}</h4>
            <h4>{props.type}</h4>
        </div>
        </div>
    )
}
export default Post