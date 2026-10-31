import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";

function App() {

  return (
    <div className="flex min-h-screen bg-gray-50">

      <Sidebar />

      <div className="flex-1">

        <Navbar />

      </div>

    </div>
  );
}

export default App;