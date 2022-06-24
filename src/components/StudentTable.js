import React from 'react';

import { useState } from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';

function StudentTable(props) {
  const [students, setStudents] = useState(null);
  const [direction, setDirection] = useState(1);
  useEffect(() => {
    console.log('student table useEffect!!');
    setStudents(props.data);
  }, [props.data]);

  const sortColumn = (field, type) => {
    const sortData = [...students]; //tạo mới dữ liệu để state trỏ đến dữ liệu mới
    //const sortData = students;
    if (type == 'string') {
      sortData.sort((a, b) => direction * a[field].localeCompare(b[field]));
    } else if (type == 'number') {
      sortData.sort((a, b) => direction * (a[field] - b[field]));
    }
    setDirection(direction * -1);
    setStudents(sortData);
  };
  const deleteUser = (id) => {
    fetch('https://60efed10f587af00179d3b82.mockapi.io/api/students/' + id, {
      method: 'DELETE',
    }).then(() => {
      console.log('Delete successful');
      let result = [...students];
      result = result.filter((item) => {
        return item.id != id;
      });
      setStudents(result);
    });
  };
  console.log('student table main');
  var student_list = [];
  if (students != null) {
    student_list = students.map((item) => (
      // <tr className={item.style}>
      <tr
        key={item.id}
        className={
          item.mark >= 70
            ? 'table-success'
            : item.mark > 40
            ? 'table-warning'
            : 'table-danger'
        }
      >
        <td>{item.id}</td>
        <td>{item.firstName}</td>
        <td>{item.lastName}</td>
        <td>{item.email}</td>
        <td>{item.mark}</td>
        <td>
          <Link to={'/user/' + item.id}>Details</Link>
        </td>
        <td onClick={() => deleteUser(item.id)}>
          <button>
            <i class="fa fa-trash"></i>
          </button>
        </td>
      </tr>
    ));
  }

  return (
    <table className="table">
      <tr>
        <th>ID</th>
        <th onClick={() => sortColumn('firstName', 'string')}>First Name</th>

        <th onClick={() => sortColumn('lastName', 'string')}>
          Last Name <span> </span>
          {/*  <a href="?sort=desc">
            <i class="fa fa-arrow-down"></i>
          </a> */}
        </th>
        <th>Email</th>
        <th onClick={() => sortColumn('mark', 'number')}>Mark</th>
        <th>Detail</th>
        <th>Delete</th>
      </tr>
      {student_list}
    </table>
  );
}

export default StudentTable;
