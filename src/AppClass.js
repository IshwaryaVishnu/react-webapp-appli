import React, { Component } from 'react';
import DataTable from './DataTable';

class AppClass extends Component {
  render() {
    return (
      <div className="container">
        <h1 className="my-4">Student List</h1>
        <DataTable />
      </div>
    );
  }
}

export default AppClass;
