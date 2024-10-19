import "./output.css"
import Aside from "./Aside/Aside"
import Main from "./Main/Main"

function App() {
  return (
    <div className="w-full h-[100rem] bg-zinc-950 p-5">
      <div className="container w-full h-full flex justify-evenly flex-col xl:flex-row">
          <Aside/>
          <Main />
      </div>
    </div>
  );
}

export default App;
