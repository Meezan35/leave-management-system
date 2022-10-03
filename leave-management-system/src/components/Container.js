import React from 'react';
import Calendar from './Calendar';
import EmployeeRequests from '../components/EmployeeRequests';
import '../css/admin.css';

function Container(props) {
  return (
    <div className="container-items">
      {props.show === true ? <Calendar /> : <EmployeeRequests />}{' '}
    </div>
  );
}

export default Container;
