import moment from 'moment';
import React, { useState, useEffect } from 'react';
import '../css/popup.css';
const ConfirmationPopUp = ({ data, closeConfirm, onYes }) => {
  console.log('called ', data);

  //

  return (
    <div class="confirm-modal">
      <div className="confirm-container">
        <div className="confirm-header">
          <h1>Confirma Leave</h1>
          <p>
            Do you want to apply leave from
            {moment(data.startDate)
              .subtract('1', 'days')
              .format('DD-MM-YYYY')}{' '}
            to
            {moment(data.endDate).subtract('1', 'days').format('DD-MM-YYYY')}?
          </p>
          <div className="btn-container">
            <button className="yes-btn" onClick={() => closeConfirm(true)}>
              Yes
            </button>
            <button className="red-btn" onClick={() => closeConfirm(false)}>
              No
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConfirmationPopUp;
