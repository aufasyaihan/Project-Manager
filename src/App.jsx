import { useState } from "react";
import Content from "./components/Content";
import SideBar from "./components/SideBar";
import CreateProject from "./components/CreateProject";

function App() {
  const [isAdd, setIsAdd] = useState(false);
  const [projects, setProjects] = useState([]);

  function handleAdd() {
    setIsAdd(true);
  }

  function handleCancel() {
    setIsAdd(false);
  }

  function handleAddProjects(
    title,
    desc,
    date,
    titleValue,
    descValue,
    dateValue
  ) {
    setProjects((prevProjects) => {
      return [
        ...prevProjects,
        {
          [title]: titleValue,
          [desc]: descValue,
          [date]: dateValue,
        },
      ];
    });
  }
  
  return (
    <main className="flex h-screen gap-5">
      <SideBar onAdd={handleAdd} />
      {isAdd ? (
        <CreateProject
          onCancel={handleCancel}
          onAddProjects={handleAddProjects}
        />
      ) : (
        <Content onAdd={handleAdd} />
      )}
    </main>
  );
}

export default App;
