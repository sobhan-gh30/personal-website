import "../output.css"
function Aside(){
    return(
        <div className="h-36 md:h-44 xl:h-full xl:w-3/12 w-full bg-zinc-900 border border-zinc-600 rounded-2xl p-5 text-gray-200 flex justify-center items-center flex-row xl:flex-col">
            <div className="w-full h-1/2 xl:border-b border-zinc-500 p-2 flex items-center justify-start xl:justify-around xl:gap-1 gap-x-2 xl:flex-col flex-row">
                <div className="xl:w-56 xl:h-56 md:h-36 md:w-36 w-24 h-24 rounded-xl overflow-hidden">
                    <img src={"IMG/Profile/Blue%20back%202.jpg"} alt="Profile"/>
                </div>
                <div>
                    <h1 className="text-lg sm:text-2xl lg:text-3xl mb-2">سبحان قاسمی</h1>
                    <p className="border-zinc-700 border bg-zinc-950 text-zinc-700 text-sm px-2 py-0.5 rounded-sm flex items-center justify-center">برنامه نویس وب</p>
                </div>
            </div>
            <div className="w-full h-1/2 hidden md:block"></div>
        </div>
    )
}
export default Aside;