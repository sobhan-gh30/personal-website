import "../output.css"
import Contact from "../Contect/Contact";
import HeaderSvgLinks from "../HeaderSvgLinks/HeaderSvgLinks"

function Aside(){
    return(
        <div className="h-fit xl:w-3/12 w-full bg-zinc-900 border border-zinc-600 rounded-2xl pt-2 px-5 text-gray-200 flex justify-center items-center flex-col overflow-hidden transition">
            <div className="w-full h-1/3 xl:h-1/2 xl:border-b border-zinc-500 p-4 flex items-center justify-start xl:justify-around xl:gap-1 gap-x-2 xl:flex-col flex-row">
                <div className="xl:w-48 xl:h-48 md:h-36 md:w-36 w-24 h-24 rounded-xl overflow-hidden">
                    <img src={"IMG/Profile/Blue%20back%202.jpg"} alt="Profile"/>
                </div>
                <div>
                    <h1 className="text-lg sm:text-2xl lg:text-3xl mb-3">سبحان قاسمی</h1>
                    <p className="border-zinc-700 border bg-zinc-950 text-zinc-700 text-sm px-1 lg:px-2 py-0.5 rounded-sm flex items-center justify-center">برنامه نویس وب</p>
                </div>
            </div>
            <div className="w-full hidden h-0 xl:h-1/2 md:grid-cols-2 xl:flex p-5 xl:justify-center xl:items-start flex-col gap-2 transition">
                <Contact path1="M11 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1zM5 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z"
                         path2="M8 14a1 1 0 1 0 0-2 1 1 0 0 0 0 2"
                         secondClass="bi-phone"
                         header="شماره تماس"
                         content="09360674391" />

                <Contact path1="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1zm13 2.383-4.708 2.825L15 11.105zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741M1 11.105l4.708-2.897L1 5.383z"
                         path2=""
                         secondClass="bi-envelope"
                         header="ابمیل"
                         content="Mohammadghasemi3033" />

                <Contact path1="M11 6.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5zm-3 0a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5zm-5 3a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5zm3 0a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5z"
                         path2="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5M1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4z"
                         secondClass="bi-calendar-week"
                         header="تاریخ تولد"
                         content="April 19th 2004"/>

                <Contact path1="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A32 32 0 0 1 8 14.58a32 32 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10"
                         path2="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4m0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6"
                         secondClass="bi-geo-alt"
                         header="محل زندگی"
                         content="Bushehr"/>

                <HeaderSvgLinks />
            </div>
        </div>
    )
}
export default Aside;