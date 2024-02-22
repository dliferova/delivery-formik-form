import { Field, useFormikContext } from "formik"
import DatePicker from "../datePicker/datePicker.tsx"
import { DeliveryFormValuesTypes } from "../../../types/types.ts"

const DateInput = () => {
  const { values }: { values: DeliveryFormValuesTypes } = useFormikContext()

  return (
    <>
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
    </>
  )
}

export default DateInput
