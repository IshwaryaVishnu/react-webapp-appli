// 1. Create DataTable.js file
// DataTable.js
import React, { useState } from 'react';
import ReactDOM from 'react-dom';

// 2. Define studentList using useState Hook function
const DataTable = () => {
  const [studentList, setStudentList] = useState([
    { id: 1, firstName: 'Ishu', lastName: 'Sankar', age: 31, birthdate: '1991-09-27', country: 'India', city: 'TamilNadu' },
    { id: 2, firstName: 'Sweety', lastName: 'Geroge', age: 31, birthdate: '1991-05-05', country: 'India', city: 'TamilNadu' },
    { id: 3, firstName: 'Athithi', lastName: 'Sidharth', age: 31, birthdate: '1991-04-23', country: 'India', city: 'TamilNadu' },
  ]);

  // 4. Define TableHeader component
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
          <th>Action</th>
        </tr>
      </thead>
    );
  };

  // 5. Define TableAction component
  const TableAction = ({ id }) => {
    const handleClick = () => {
      // Remove student from studentList
      const filteredList = studentList.filter(student => student.id !== id);
      setStudentList(filteredList);
    };

    return (
      <td>
        <button onClick={handleClick}>Delete</button>
      </td>
    );
  };

 // 6. Define TableRow component
 const TableRow = ({ studentList }) => {
    return (
      <tbody>
        {studentList.map(student => (
          <tr key={student.id}>
            <td>{student.id}</td>
            <td>{student.firstName}</td>
            <td>{student.lastName}</td>
            <td>{student.age}</td>
            <td>{student.birthdate}</td>
            <td>{student.country}</td>
            <td>{student.city}</td>
            <TableAction id={student.id} />
          </tr>
        ))}
      </tbody>
    );
  };

  // Render table
  return (
    <table>
      <TableHeader />
      <TableRow studentList={studentList} />
    </table>
  );
};

// Render DataTable component to the DOM
const root = document.getElementById('root');
ReactDOM.render(<DataTable />, root);