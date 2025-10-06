import { useState, useEffect } from "react";
import axios from "axios";

export default function Candidates() {
  const [name, setName] = useState("");
  const [skills, setSkills] = useState("");
  const [experience, setExperience] = useState("");
  const [search, setSearch] = useState("");
  const [candidates, setCandidates] = useState([]);

  const API = "http://localhost:5000/candidates";

  // Add candidate
  const addCandidate = async (e) => {
    e.preventDefault();
    if (!name || !skills || !experience) {
      alert("Please fill all fields!");
      return;
    }
    try {
      await axios.post(API, { name, skills, experience });
      alert("Candidate added successfully!");
      setName("");
      setSkills("");
      setExperience("");
      fetchCandidates();
    } catch (error) {
      console.error(error);
      alert("Error adding candidate");
    }
  };

  // Fetch all candidates
  const fetchCandidates = async () => {
    const res = await axios.get(API);
    setCandidates(res.data);
  };

  // Search candidates
  const searchCandidates = async () => {
    if (!search) return fetchCandidates();
    const res = await axios.get(`${API}/search?skill=${search}`);
    setCandidates(res.data);
  };

  useEffect(() => {
    fetchCandidates();
  }, []);

  return (
    <div className="p-8 max-w-3xl mx-auto">
      <h1 className="text-2xl font-bold mb-6 text-center">Candidate Management</h1>

      {/* Add Candidate Form */}
      <form
        onSubmit={addCandidate}
        className="flex flex-col gap-3 mb-6 bg-gray-100 p-4 rounded-lg"
      >
        <input
          type="text"
          placeholder="Candidate Name"
          className="border p-2 rounded"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Skills (comma separated)"
          className="border p-2 rounded"
          value={skills}
          onChange={(e) => setSkills(e.target.value)}
        />
        <input
          type="number"
          placeholder="Experience (in years)"
          className="border p-2 rounded"
          value={experience}
          onChange={(e) => setExperience(e.target.value)}
        />
        <button
          type="submit"
          className="bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
        >
          Add Candidate
        </button>
      </form>

      {/* Search Bar */}
      <div className="flex gap-2 mb-4">
        <input
          type="text"
          placeholder="Search by skill..."
          className="border p-2 flex-1 rounded"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button
          onClick={searchCandidates}
          className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
        >
          Search
        </button>
      </div>

      {/* Candidate Table */}
      <table className="w-full border-collapse border border-gray-300">
        <thead className="bg-gray-200">
          <tr>
            <th className="border p-2">ID</th>
            <th className="border p-2">Name</th>
            <th className="border p-2">Skills</th>
            <th className="border p-2">Experience</th>
          </tr>
        </thead>
        <tbody>
          {candidates.length > 0 ? (
            candidates.map((c) => (
              <tr key={c.id}>
                <td className="border p-2 text-center">{c.id}</td>
                <td className="border p-2">{c.name}</td>
                <td className="border p-2">{c.skills}</td>
                <td className="border p-2 text-center">{c.experience}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="4" className="border p-2 text-center text-gray-500">
                No candidates found
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}
