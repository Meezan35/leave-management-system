import React, {useState}  from 'react'
import LeaveModal from './leaveModal'
import FullCalendar from '@fullcalendar/react' 
import dayGridPlugin from '@fullcalendar/daygrid' 


const Employee = () => {
    const [modalOpen, setModalOpen] = useState(false)
   

    const openModal = ()=>{
        setModalOpen(true)
    }

    const onCancel = ()=>{
        setModalOpen(false)
    }
   
  return (
    <div className='employee-dashboard'>
        <div className='title' onClick={openModal}>Calendar</div>
        <br></br>

     
    { modalOpen ? (<LeaveModal onCancel={onCancel}/>):(
        <div className='calendar'>
        <FullCalendar
        plugins={[ dayGridPlugin ]}
        initialView="dayGridMonth"
      
       
      />
      
    </div>
    )}
    </div>
   
  
  )
}

export default Employee