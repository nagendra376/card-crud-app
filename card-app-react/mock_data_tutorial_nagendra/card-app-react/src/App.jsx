import { useState, useEffect } from "react";
import Card from "./components/Card";
import "./App.css";
import Pagination from "./components/Pagination";
import EditForm from "./components/EditForm";

function App() {
  const [userData, setUserData] = useState([]);
  const [page, setPage] = useState(1);
  const [showCreateForm, setShowCreateForm] = useState(false);
  const API_URL = import.meta.env.VITE_API_URL || "http://localhost:8080";

  useEffect(() => {
    fetch(`${API_URL}/users?_page=${page}&_per_page=20`)
      .then((response) => response.json())
      .then((res) => {
        console.log({ res });
        setUserData((prevData) => [...prevData, ...res.data]);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, [page]);

  useEffect(() => {
    console.log({ userData });
  }, [userData]);

  const deleteData = (id) => {
    fetch(`http://localhost:8080/users/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setUserData((prevData) => prevData.filter((user) => user.id !== id));
      })
      .catch((error) => console.error(error));
  };

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-6">
          <button
            onClick={() => setShowCreateForm(true)}
            className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-6 rounded-2xl shadow-md transition duration-200 flex ml-auto"
          >
            Create User
          </button>
        </div>

        {showCreateForm && (
          <EditForm onClose={() => setShowCreateForm(false)} setData={setUserData} type={"create"} />
        )}

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
          {userData.map((data, index) => (
            <Card
              key={index}
              userArray={data}
              setUserArray={setUserData}
              deleteArray={deleteData}
            />
          ))}
        </div>
        <div className="mt-8">
          <Pagination setPage={setPage} />
        </div>
      </div>
    </div>
  );
}

export default App;