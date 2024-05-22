import { useState } from "react";
import HomeContent from "./components/HomeContent";
import SideBar from "./components/SideBar";
import CreateProject from "./components/CreateProject";
import ListProjects from "./components/ListProjects";
import SelectedProjects from "./components/SelectedProjects";

function App() {
  const [projectState, setProjectState] = useState({
    selectedProjectId: undefined,
    projects: [],
  });

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
  function handleSelectedProject(projectId) {
    setProjectState((prevProjectState) => {
      return { ...prevProjectState, selectedProjectId: projectId };
    });
  }
  const selectedProject = projectState.projects.find(
    (project) => project.id === projectState.selectedProjectId
  );

  let content = <SelectedProjects project={selectedProject} />;

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

  console.log(projectState);
  return (
    <main className="flex h-screen gap-5">
      <SideBar
        onStartAddProject={handleStartAddProject}
        projects={projectState.projects}
        onSelectedProject={handleSelectedProject}
      />
      {content}
    </main>
  );
}

export default App;
