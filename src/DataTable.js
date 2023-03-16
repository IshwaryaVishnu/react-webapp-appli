// 1. Create DataTable.js file
// DataTable.js
import React, { useState } from 'react';

// 2. Define studentList using useState Hook function

const DataTable = () => {
  const [studentList, setStudentList] = useState([
    { id: 1, firstName: 'Ishu', lastName: 'Sankar', age: 31, birthdate: '1991-09-27', country: 'India', city: 'TamilNadu' },
    { id: 2, firstName: 'Sweety', lastName: 'Geroge', age: 31, birthdate: '1991-05-05', country: 'India', city: 'TamilNadu' },
    { id: 3, firstName: 'Athithi', lastName: 'Sidharth', age: 31, birthdate: '1991-04-23', country: 'India', city: 'TamilNadu' },
  ]);

   // Define a TableHeader component that returns table header information
   const TableHeader = () => {
    return (
      <thead>
        <tr>
          <th>ID</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Age</th>
          <th>Birthdate</th>
          <th>Country</th>
          <th>City</th>
          <th>Actions</th>
        </tr>
      </thead>
    );
  };

  // Define a TableAction component with props that returns a HTML button
  const TableAction = ({ id }) => {
    const handleDelete = () => {
      setStudentList(studentList.filter((student) => student.id !== id));
    };

    return <button onClick={handleDelete}>Delete</button>;
  };

  // Define a TableRow component that takes studentList as props and returns table body using map function in JavaScript
  const TableRow = ({ studentList }) => {
    return (
      <tbody>
        {studentList.map((student) => (
          <tr key={student.id}>
            <td>{student.id}</td>
            <td>{student.firstName}</td>
            <td>{student.lastName}</td>
            <td>{student.age}</td>
            <td>{student.birthdate}</td>
            <td>{student.country}</td>
            <td>{student.city}</td>
            <td>
              <TableAction id={student.id} />
            </td>
          </tr>
        ))}
      </tbody>
    );
  };
  // Render the DataTable component with the TableHeader and TableRow components
  return (
    <table>
      <TableHeader />
      <TableRow studentList={studentList} />
    </table>
  );
};
export default DataTable;