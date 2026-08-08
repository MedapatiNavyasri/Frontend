function App3() {
  const students = [
    { id: 1, name: "Navya", age: 19, branch: "CSE" },
    { id: 2, name: "Neha", age: 20, branch: "ECE" },
    { id: 3, name: "Sita", age: 19, branch: "MECH" }
  ];

  return (
    <div>
    <h1>Table representation</h1>
    <table border="1">
      <thead>
        <tr>
          <th>S.No</th>
          <th>Name</th>
          <th>Age</th>
          <th>Branch</th>
        </tr>
      </thead>

      <tbody>
        {students.map((student) => (
          <tr key={student.id}>
            <td>{student.id}</td>
            <td>{student.name}</td>
            <td>{student.age}</td>
            <td>{student.branch}</td>
          </tr>
        ))}
      </tbody>
    </table>
    </div>
  );
}

export default App3