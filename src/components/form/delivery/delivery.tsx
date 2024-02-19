import { citiesDeliveryDataTypes } from "../../../types/api.ts"
import { DeliveryFormValuesTypes } from "../../../types/types.ts"
import { Field } from "formik"
import CitiesRadioGroup from "../../citiesRadioGroup/citiesRadioGroup.tsx"
import DatePicker from "../../ui/datePicker/datePicker.tsx"

const Delivery = ({
  citiesData,
  values,
}: {
  citiesData: citiesDeliveryDataTypes
  values: DeliveryFormValuesTypes
}) => {
  return (
    <div>
      <div className="flex flex-col">
        <CitiesRadioGroup citiesData={citiesData} />
        <div className="mb-[12px]">
          <label
            className="block text-zinc-500 mb-[12px]"
            htmlFor={"delivery-address"}
          >
            Адрес
          </label>
          <Field
            className="input"
            id="delivery-address"
            type="text"
            name="deliveryAddress"
          />
        </div>

        <div>
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
        <div>
          <label className="flex flex-col text-zinc-500 mb-[12px]">
            Время доставки
          </label>
        </div>
      </div>
    </div>
  )
}

export default Delivery
