import moment from 'moment';
import React, { useState } from 'react';
import '../css/table.css';

function EmployeeRequests() {
  const [empData, setEmpData] = useState(
    JSON.parse(localStorage.getItem('event')) || []
  );

  const [actions, setActions] = useState(null);

  const onApprove = (id) => {
    // const tempData = empData.filter((x) => x.empId === id);
    // console.log(tempData);
    const a = empData.map((el) => {
      console.log(id);
      console.log(el.empId);
      if (el.leaveId === id) {
        return { ...el, status: 'approved' };
      } else {
        return el;
      }
    });
    setEmpData([...a]);
    console.log(a);
    localStorage.setItem('event', JSON.stringify([...a]));
    setActions(false);
  };

  const onReject = (id) => {
    const a = empData.map((el) => {
      console.log(id);
      console.log(el.empId);
      if (el.leaveId === id) {
        return { ...el, status: 'rejected' };
      } else {
        return el;
      }
    });
    setEmpData([...a]);
    console.log(a);
    localStorage.setItem('event', JSON.stringify([...a]));
    setActions(false);
  };

  // console.log(empData);

  return (
    <div>
      <table class="emp-table">
        <thead>
          <tr>
            <th className="emp-details-header">Employee Name</th>
            <th className="emp-details-header">Emp Id</th>
            <th className="emp-details-header">From</th>
            <th className="emp-details-header">To</th>
            <th className="emp-details-header">Reason</th>
            <th className="emp-details-header">Status</th>
            <th className="emp-details-header">Actions</th>
          </tr>

          {empData.map((e, i) => (
            <tr>
              <>
                <th className="emp-details">{e.empName}</th>
                <th className="emp-details">{e.empId}</th>
                <th className="emp-details">
                  {moment(e.startDate).format('DD-MM-YYYY')}
                </th>
                <th className="emp-details">
                  {moment(e.endDate).format('DD-MM-YYYY')}
                </th>
                <th className="emp-details">{e.reason}</th>
                <th className="emp-details">{e.status}</th>
                <th className="emp-details">
                  <button onClick={() => onApprove(e.leaveId)}>Approve</button>
                  <button onClick={() => onReject(e.leaveId)}>Rejected</button>
                </th>
              </>
            </tr>
          ))}
        </thead>
      </table>
    </div>
  );
}

export default EmployeeRequests;
