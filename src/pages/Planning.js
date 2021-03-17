import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Calendar from '../components/Calendar';
import 'react-calendar/dist/Calendar.css';

import dateFns from "date-fns";


const Planning = () => {
    return (
        <div className="App">

            <Calendar />
        </div>
    )
};

export default Planning;



// const Planning = () => {
//     const [value, onChange] = useState(new Date());
//     const currentdate = new Date();
//     return (
//         <>
//     <div>
//       <Calendar
//         onChange={onChange}
//         value={value}
//         onClickDay={(value, event) => alert('Clicked day: ' + value)}
//         minDate={new Date()}
//         maxDate={new Date(currentdate.setMonth(currentdate.getMonth() + 3))}

//       />
//     </div>
//         </>
//     );
// };