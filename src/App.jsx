import { useState } from "react";
import HomeContent from "./components/HomeContent";
import SideBar from "./components/SideBar";
import CreateProject from "./components/CreateProject";
import ListProjects from "./components/ListProjects";
import Projects from "./components/Projects";

function App() {
  const [projectState, setProjectState] = useState({
    selectedProjectId: undefined,
    projects: [],
  });
  const [isProjectExist, setIsProjectExist] = useState(false);

  function handleStartAddProject() {
    setProjectState((prevProjectState) => {
      return { ...prevProjectState, selectedProjectId: null };
    });
  }

  function handleCancel() {
    setProjectState((prevProjectState) => {
      return { ...prevProjectState, selectedProjectId: undefined };
    });
    setIsProjectExist(false);
  }

  function handleAddProjects(projectData) {
    setProjectState((prevProjects) => {
      const projectID = +new Date();
      const newProject = {
        ...projectData,
        id: projectID,
      };
      return {
        ...prevProjects,
        selectedProjectId: undefined,
        // selectedProjectId : projectID,
        projects: [...prevProjects.projects, newProject],
      };
    });
  }

  let content;

  if (projectState.selectedProjectId === null) {
    content = (
      <CreateProject
        onCancel={handleCancel}
        onAddProjects={handleAddProjects}
      />
    );
  } else if (projectState.selectedProjectId === undefined) {
    content = <HomeContent onStartAddProject={handleStartAddProject} />;
  }

  function handleProject() {
    setIsProjectExist(true);
  }

  console.log(projectState);
  return (
    <main className="flex h-screen gap-5">
      <SideBar onStartAddProject={handleStartAddProject}>
        {projectState.projects.length > 0 &&
          projectState.projects.map((project, index) => (
            <ListProjects
              key={index}
              title={project.title}
              onClickProject={handleProject}
            />
          ))}
      </SideBar>
      {/* {isAdd ? (
        <CreateProject
          onCancel={handleCancel}
          onAddProjects={handleAddProjects}
        />
      ) : isProjectExist ? (
        <Projects projects={projects} />
      ) : (
        <Content onStartAddProject={handleStartAddProject} />
      )} */}

      {content}
    </main>
  );
}

export default App;
