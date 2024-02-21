import { Field } from "formik"
import DatePicker from "../ui/datePicker/datePicker.tsx"
import { DeliveryFormValuesTypes } from "../../types/types.ts"
import TimeRange from "../ui/timeRange/timeRange.tsx"

const DeliveryDate = ({ values }: { values: DeliveryFormValuesTypes }) => {
  return (
    <div className="mb-4">
      <div className="mb-[12px]">
        <label
          className="block text-zinc-500 mb-[12px]"
          htmlFor={"delivery-date"}
        >
          Дата доставки
        </label>
        <Field
          id="delivery-date"
          name="deliveryDate"
          className="input"
          type="text"
          value={values.deliveryDate}
          component={DatePicker}
        />
      </div>
      <TimeRange values={values} />
    </div>
  )
}

export default DeliveryDate
