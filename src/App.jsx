import Content from "./components/Content";
import SideBar from "./components/SideBar";
function App() {
  return (
    <main className="flex h-screen gap-5">
      <SideBar />
      <Content />
    </main>
  );
}

export default App;
