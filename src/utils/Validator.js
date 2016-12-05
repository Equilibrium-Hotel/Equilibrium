function validateReservationForm(startDate, endDate, room) {
  let start = {
    year: startDate.year(),
    month: startDate.month()+1<10 ? ''+startDate.month()+1 : startDate.month()+1,
    date: startDate.date()<10 ? '0'+startDate.date() : startDate.date()
  }

  let end = {
    year: endDate.year(),
    month: endDate.month()+1<10 ? ''+endDate.month()+1 : endDate.month()+1,
    date: endDate.date()<10 ? '0'+endDate.date() : endDate.date()
  }


  let startStr = start.year+'-'+start.month+'-'+start.date
  let endStr = end.year+'-'+end.month+'-'+end.date

  let obj = {startDate: startStr, endDate: endStr, room}

  if(obj.startDate > obj.endDate || obj.room.length !== 1) {
    return false
  }
  else {
    return obj
  }
}

export {validateReservationForm}