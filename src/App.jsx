import { useState } from "react";
import Content from "./components/Content";
import SideBar from "./components/SideBar";
import CreateProject from "./components/CreateProject";
import ListProjects from "./components/ListProjects";
import Projects from "./components/Projects";

function App() {
  const [isAdd, setIsAdd] = useState(false);
  const [projects, setProjects] = useState([]);
  const [isProjectExist, setIsProjectExist] = useState(false);

  function handleAdd() {
    setIsAdd(true);
  }

  function handleCancel() {
    setIsAdd(false);
    setIsProjectExist(false);
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
          // [date]: new Date(dateValue).toDateString(),
        },
      ];
    });
    setIsAdd(false);
  }

  function handleProject() {
    setIsProjectExist(true);
  }
  console.log(isProjectExist);
  return (
    <main className="flex h-screen gap-5">
      <SideBar onAdd={handleAdd}>
        {projects.length > 0 &&
          projects.map((project, index) => (
            <ListProjects
              key={index}
              title={project.title}
              onClickProject={handleProject}
            />
          ))}
      </SideBar>
      {isAdd ? (
        <CreateProject
          onCancel={handleCancel}
          onAddProjects={handleAddProjects}
        />
      ) : isProjectExist ? (
        <Projects projects={projects} />
      ) : (
        <Content onAdd={handleAdd} />
      )}
    </main>
  );
}

export default App;
