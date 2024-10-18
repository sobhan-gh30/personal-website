import "./output.css"
import Aside from "./Aside/Aside"
import Main from "./Main/Main"

function App() {
  return (
    <div className="w-full h-screen bg-zinc-950 p-5">
      <div className="container w-full h-full flex justify-evenly">
          <Aside/>
          <Main />
      </div>
    </div>
  );
}

export default App;
