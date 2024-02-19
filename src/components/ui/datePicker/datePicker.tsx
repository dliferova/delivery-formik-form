import DataPicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css"
import dayjs from "dayjs"

const DatePicker = ({ field, form, ...props }) => {
  return (
    <div>
      <DataPicker
        id={field.name}
        {...field}
        {...props}
        selected={field.value}
        onChange={(val) => {
          console.log("VAL:", val)
          form.setFieldValue(field.name, val)
        }}
        dateFormat="dd.MM.yyyy"
        minDate={dayjs().add(1, "day").toDate()}
        maxDate={dayjs().add(1, "week").toDate()}
      />
    </div>
  )
}

export default DatePicker
