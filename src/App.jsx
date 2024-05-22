import { useState } from "react";
import Content from "./components/Content";
import SideBar from "./components/SideBar";
import CreateProject from "./components/CreateProject";
function App() {
  const [isAdd, setIsAdd] = useState(false);

  function handleAdd() {
    setIsAdd(true);
  }
  return (
    <main className="flex h-screen gap-5">
      <SideBar onAdd={handleAdd} />
      {isAdd ? <CreateProject /> : <Content onAdd={handleAdd} />}
    </main>
  );
}

export default App;
