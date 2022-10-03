import React from 'react';
import '../../css/admin.css';
function Drawer(props) {
  return (
    <div className="drawer-container">
      <ul class="admin-actions">
        <li
          className="admin-action-item"
          onClick={() => props.changeContainer('req')}
        >
          Request
        </li>
        <li
          className="admin-action-item"
          onClick={() => props.changeContainer('cal')}
        >
          Calendar
        </li>
      </ul>
    </div>
  );
}

export default Drawer;
