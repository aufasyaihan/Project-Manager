import { useState } from "react";
import HomeContent from "./components/HomeContent";
import SideBar from "./components/SideBar";
import CreateProject from "./components/CreateProject";
import SelectedProjects from "./components/SelectedProjects";
import Task from "./components/Task";

function App() {
  const [projectState, setProjectState] = useState({
    selectedProjectId: undefined,
    projects: [],
    tasks: [],
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

  function handleDelete() {
    setProjectState((prevProjectState) => {
      return {
        ...prevProjectState,
        selectedProjectId: undefined,
        projects: prevProjectState.projects.filter(
          (project) => project.id !== projectState.selectedProjectId
        ),
      };
    });
  }
  function handleAddTask(text) {
    setProjectState((prevState) => {
      const taskId = +new Date();
      const newTask = {
        text: text,
        projectId: prevState.selectedProjectId,
        id: taskId,
      };
      return {
        ...prevState,
        tasks: [newTask, ...prevState.tasks],
      };
    });
  }

  function handleDeleteTask(id) {
    setProjectState((prevState) => {
      return {
        ...prevState,
        tasks: prevState.tasks.filter((task) => task.id !== id),
      };
    });
  }

  const filteredTasks = projectState.tasks.filter(
    (task) => task.projectId === projectState.selectedProjectId
  );

  let content = (
    <SelectedProjects project={selectedProject} onDelete={handleDelete}>
      <Task
        onAddTask={handleAddTask}
        onDeleteTask={handleDeleteTask}
        tasks={filteredTasks}
      />
    </SelectedProjects>
  );

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
  return (
    <main className="flex h-screen gap-5">
      <SideBar
        onStartAddProject={handleStartAddProject}
        projects={projectState.projects}
        onSelectedProject={handleSelectedProject}
        selectedProjectId={projectState.selectedProjectId}
      />
      {content}
    </main>
  );
}

export default App;
