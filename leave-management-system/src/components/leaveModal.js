import React,{useState} from 'react'
import DatePicker from 'react-datepicker'
import "react-datepicker/dist/react-datepicker.css";
import Cancel from '../images/cancel.png'
const LeaveModal = ({onCancel}) => {
    const [startDate, setStartDate] = useState(null);
    const [endDate, setEndDate] = useState(null);
    const [applied,setApplied] = useState(false)

    const handleStartDate = (date)=> {
        setStartDate(date);
        console.log(date)
    }
    const handleEndDate = (date)=> {
        setEndDate(date);
    }
    const onApply = () => {
        setApplied(true)
    }

  return (
    <div class="leave-modal">
        <div className='container'>
            <div className='header'>
                 
            <h1 className='modal-title'> Apply Leave</h1>
            <img src={Cancel} alt="cancel"className='cancel-icon' onClick={onCancel}/>
            </div>
           
            <input type="text" placeholder='reason'/>
        
            <div className='start-date'>
            <span>From:</span>
            <DatePicker selected={startDate} 
            onChange={handleStartDate}
            minDate={new Date()}
            dateFormat='dd/MM/yyyy'/>
            
            </div>
            <div className='end-date'>
          <span>To:</span>
            <DatePicker selected={endDate} onChange={handleEndDate}
            minDate={new Date()}
             dateFormat='dd/MM/yyyy'
            />
            </div>
            <div className='apply-btn' onClick={onApply}>
            Apply
            </div>
            {
                applied ? (<h3>You have applied leave from {startDate.toLocaleDateString()} to {endDate.toLocaleDateString()}</h3>):(<></>)
            }
        </div>
       
    </div>
  )
}

export default LeaveModal