import "../output.css"

function Contact(prop){

    let {path1, path2, secondClass, header, content} = prop

    return (
        <div className="w-full h-16 flex justify-start items-center gap-x-2 px-3">
            <div className="w-12 h-12 flex justify-center items-center shadow-md shadow-zinc-800 rounded-lg border border-zinc-700">
                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25"
                     fill="rgb(229 231 235 / var(--tw-text-opacity))" className={"bi " + secondClass}
                     viewBox="0 0 16 16">
                    <path d={path1}/>
                    <path d={path2}/>
                </svg>
            </div>
            <div>
                <h2 className="" >{header}</h2>
                <p className="text-gray-500 text-sm" >{content}</p>
            </div>

        </div>
    )
}

export default Contact