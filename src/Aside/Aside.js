import "../output.css"
function Aside(){
    return(
        <div className="h-full w-3/12 bg-zinc-900 border border-zinc-600 rounded-2xl p-5 text-gray-200">
            <div className="w-full h-1/2 border-b border-zinc-500 p-2 flex items-center justify-around flex-col gap-1">
                <div className="bg-amber-200 w-56 h-56 rounded-xl overflow-hidden">
                    <img src={"IMG/Profile/Blue%20back%202.jpg"} alt="Profile"/>
                </div>
                <h1 className="text-3xl">سبحان قاسمی</h1>
                <p className="border-zinc-700 border bg-zinc-950 text-zinc-700 text-sm px-2 py-0.5 rounded-sm">برنامه نویس وب</p>
            </div>
            <div className="w-full h-1/2"></div>
        </div>
    )
}
export default Aside;