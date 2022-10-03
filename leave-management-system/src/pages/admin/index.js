import React, { useState } from 'react';
import Drawer from './Drawer';
import Container from '../../components/Container';
import '../../css/admin.css';
const Admin = () => {
  const [calendar, setCalendar] = useState(false);
  return (
    <div className="admin-container">
      <Drawer changeContainer={(type) => setCalendar(type === 'cal')} />{' '}
      <Container show={calendar} />
    </div>
  );
};

export default Admin;
