import { useState } from "react";
import Content from "./components/Content";
import SideBar from "./components/SideBar";
import CreateProject from "./components/CreateProject";

function App() {
  const project = [];
  const [isAdd, setIsAdd] = useState(false);

  function handleAdd() {
    setIsAdd(true);
  }

  function handleCancel() {
    setIsAdd(false);
  }
  return (
    <main className="flex h-screen gap-5">
      <SideBar onAdd={handleAdd} />
      {isAdd ? (
        <CreateProject onCancel={handleCancel} />
      ) : (
        <Content onAdd={handleAdd} />
      )}
    </main>
  );
}

export default App;
