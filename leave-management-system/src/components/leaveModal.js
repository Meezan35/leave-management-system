import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import Cancel from '../images/cancel.png';
import moment from 'moment';
import ConfirmationPopUp from './ConfirmationModal';
import { generateUniqueId } from '../util';
const LeaveModal = ({ onCancel, onConfirmation }) => {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [reason, setReason] = useState(null);
  const [showConfirmPopup, setShowConfirmPopup] = useState(false);

  const empName = localStorage.getItem('empName');
  console.log(empName);

  const empId = localStorage.getItem('empId');

  const newStartDate = moment(startDate, 'DD-MM-YYYY').add(1, 'days');

  const newEndDate = moment(endDate, 'DD-MM-YYYY').add(1, 'days');

  const handleStartDate = (date) => {
    setStartDate(date);

    console.log(date, ' start Date');
  };
  const handleEndDate = (date) => {
    setEndDate(date);
  };
  const onApply = () => {
    const getDate = JSON.parse(localStorage.getItem('event')) || [];

    // localStorage.setItem(
    //   'event',
    //   JSON.stringify([
    //     ...getDate,
    //     {
    //       startDate: newStartDate,
    //       endDate: newEndDate,
    //       reason: reason,
    //       status: 'pending',
    //       empName: empName,
    //       empId: empId,
    //       leaveId: generateUniqueId(),
    //     },
    //   ])
    // );
    const obj = {
      current: {
        startDate: newStartDate,
        endDate: newEndDate,
        reason: reason,
        status: 'pending',
        empName: empName,
        empId: empId,
      },
      allData: [
        ...getDate,
        {
          startDate: newStartDate,
          endDate: newEndDate,
          reason: reason,
          status: 'pending',
          empName: empName,
          empId: empId,
          leaveId: generateUniqueId(),
        },
      ],
    };
    onConfirmation({ ...obj });
  };

  return (
    <div class="leave-modal">
      <div className="container">
        <div className="header">
          <h1 className="modal-title"> Apply Leave</h1>
          <img
            src={Cancel}
            alt="cancel"
            className="cancel-icon"
            onClick={onCancel}
          />
        </div>

        <input
          type="text"
          placeholder="reason"
          onChange={(e) => setReason(e.target.value)}
        />

        <div className="start-date">
          <span>From:</span>
          <DatePicker
            selected={startDate}
            onChange={handleStartDate}
            minDate={new Date()}
            dateFormat="dd/MM/yyyy"
          />
        </div>
        <div className="end-date">
          <span>To:</span>
          <DatePicker
            selected={endDate}
            onChange={handleEndDate}
            minDate={new Date()}
            dateFormat="dd/MM/yyyy"
          />
        </div>
        <div className="apply-btn" onClick={onApply}>
          Apply
        </div>

        {/* {showConfirmPopup && (
          <ConfirmationPopUp startDate={newStartDate} endDate={newEndDate} />
        )} */}
      </div>
    </div>
  );
};

export default LeaveModal;
