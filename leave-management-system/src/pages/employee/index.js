import React, { useEffect, useState } from 'react';
import LeaveModal from '../../components/LeaveModal';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import moment from 'moment';

import '../../css/modal.css';
import ConfirmationPopUp from '../../components/ConfirmationModal';

const initialConfirmData = {
  data: null,
  show: false,
};

const Employee = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [leaveData, setLeaveData] = useState([]);
  const [confirmModal, setConfirmModal] = useState({ ...initialConfirmData });

  const name = localStorage.getItem('empName');

  const localData = JSON.parse(localStorage.getItem('event'));

  const userLeaves = localData
    ? localData.filter((f) =>
        f.empId === !localStorage.getItem('empId')
          ? ''
          : localStorage.getItem('empId')
      )
    : [];

  useEffect(() => {
    if (localData && leaveData.length === 0) {
      console.log(leaveData.length, '!==', userLeaves.length);
      const newLocalData = localData.map((m) => {
        if (m.empId === localStorage.getItem('empId')) {
          leaveData.push({
            start: moment(m.startDate).subtract(1, 'days')._d,
            end: m.endDate,
            title: m.reason,
            color:
              m.status === 'pending'
                ? 'yellow'
                : m.status === 'rejected'
                ? 'red'
                : 'green',
          });
        }
      });
      setLeaveData([...leaveData]);
    } else if (
      userLeaves[userLeaves.length - 1]?.empId ===
        localStorage.getItem('empId') &&
      leaveData.length !== userLeaves.length
    ) {
      leaveData.push({
        start: moment(userLeaves[userLeaves.length - 1]?.startDate).subtract(
          1,
          'days'
        )._d,
        end: userLeaves[userLeaves.length - 1]?.endDate,
        title: userLeaves[userLeaves.length - 1]?.reason,
        color:
          userLeaves[userLeaves.length - 1].status === 'pending'
            ? 'yellow'
            : userLeaves[userLeaves.length - 1].status === 'rejected'
            ? 'red'
            : 'green',
      });
      setLeaveData([...leaveData]);
    }
  }, [leaveData, localData, userLeaves]);

  console.log(leaveData);

  return (
    <div className="employee-dashboard">
      <div className="title">
        <h2>Hi, {name}</h2>
      </div>
      <br></br>
      {modalOpen && (
        <LeaveModal
          onConfirmation={(res) =>
            setConfirmModal({ ...confirmModal, data: res, show: true })
          }
          onCancel={() => {
            setModalOpen(false);
            setConfirmModal({ ...confirmModal, show: false });
          }}
        />
      )}
      {confirmModal.show && confirmModal.data && (
        <ConfirmationPopUp
          data={confirmModal.data.current}
          closeConfirm={(flag) => {
            if (flag) {
              localStorage.setItem(
                'event',
                JSON.stringify(confirmModal.data.allData)
              );
              setConfirmModal(false);
            } else {
              setConfirmModal(false);
            }
            setModalOpen(false);
          }}
        />
      )}

      <div className="calendar">
        <FullCalendar
          eventAdd={(res) => console.log(res)}
          plugins={[dayGridPlugin, interactionPlugin]}
          initialView="dayGridMonth"
          events={leaveData}
          dateClick={(r) => {
            setModalOpen(true);
          }}
        />
      </div>
    </div>
  );
};

export default Employee;
