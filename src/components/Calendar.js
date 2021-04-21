import React, { useState } from 'react';
import {getYear, getDayOfYear, isToday, endOfYesterday, toDate, format, startOfWeek, addDays, startOfMonth, endOfMonth, endOfWeek, isSameMonth, isSameDay, addMonths, subMonths} from "date-fns";
// import './Planning.scss'

const Calendar = () => {

    const [currentMonth, setCurrentMonth] = useState(new Date())
    const [selectedDate, setSelectedDate] = useState(new Date())
    const [showInfo, setShowInfo] = useState(false)
    const [jour, setJour] = useState('')

    const handleInfo= () => 
    {
        setShowInfo(!showInfo)
    }


    const jours = ['Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi', 'Dimanche']
    
    const onDateClick = day => {
          setSelectedDate(day)
      };
    
    const nextMonth = () => {
          setCurrentMonth(addMonths(currentMonth, 1))
      };
    
    const prevMonth = () => {
          setCurrentMonth(subMonths(currentMonth, 1))
      };

      const RenderHeader = () =>
      {
        const dateFormat = "MMMM yyyy";
    
        return (
          <div className="header row flex-middle">
            <div className="col col-start">
              <div className="icon" onClick={prevMonth}>
                chevron_left
              </div>
            </div>
            <div className="col col-center">
              <span>{format(currentMonth, dateFormat)}</span>
            </div>
            <div className="col col-end" onClick={nextMonth}>
              <div className="icon">chevron_right</div>
            </div>
          </div>
        );
      }

      const RenderDays = () =>
      {
        const days = [];
        
        for (let i = 0; i < 7; i++) {
          days.push(
            <div className="col col-center" key={i}>
              {jours[i]}
            </div>
          );
        }
    
        return <div className="days row">{days}</div>;
      }

      const RenderCells = () =>
      {
        const monthStart = startOfMonth(currentMonth);
        const monthEnd = endOfMonth(monthStart);
        const startDate = startOfWeek(monthStart, {weekStartsOn: 1});
        const endDate = endOfWeek(monthEnd);
    
        const dateFormat = "d";
        const rows = [];
    
        let days = [];
        let day = startDate;
        let formattedDate = "";    
        let tab = ['2021-03-18', '2021-03-20', '2021-03-25']        

        console.log(toDate(new Date(tab[0])))
        while (day <= endDate) {
          for (let i = 0; i < 7; i++) {
            formattedDate = format(day, dateFormat);
            const cloneDay = day;
            
            
            days.push(
              <div
                className={`col cell ${
                  !isSameMonth(day, monthStart) || day < endOfYesterday(new Date())
                    ? "disabled"
                    : isSameDay(day, selectedDate) ? "selected" : ""
                }`}
                key={day}
                onClick={() =>
                  {
                    handleInfo()
                    setJour(cloneDay)
                  }
                }
                    
              >
                <span className="number">{formattedDate}</span>
                <span className="bg">{formattedDate}</span>
                {
                  // eslint-disable-next-line no-loop-func
                  tab.map(item => 
                    {
                      return (isSameDay(toDate(new Date(item)), day) ? <div className="indice"></div> : <p></p>)
                    })
                }
                
                
              </div>
            );
            day = addDays(day, 1);
          }
          rows.push(
            <div className="row" key={day}>
              {days}
            </div>
          );
          days = [];
        }
        return <div className="body">{rows}</div>;
      }

    
      

    return (
        <div className="calendar">
            <RenderHeader/>
            <RenderDays/>
            <RenderCells/>
            {
                showInfo && (
                    <div className="showInfos">
                        <div className="infosContent">
                            <div className="head">
                                <h2>{jour.getDate() + '-' + (Number(jour.getMonth())+1) +'-' + jour.getFullYear()}</h2>
                                {console.log(jour.getDate() + '-' + (Number(jour.getMonth())+1) +'-' + jour.getFullYear())}
                            </div>

                            <p className="text">Infos evenement</p>

                            <div className="button return" onClick={handleInfo}>
                                Retourner sur la page
                            </div>
                        </div>
                    </div>
                )}
        </div>
    );
};

export default Calendar;