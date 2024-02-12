import { citiesDeliveryDataTypes } from "../../../types/api.ts"
import { DeliveryFormValuesTypes } from "../../../types/types.ts"
import React from "react"
import { Field } from "formik"

const Delivery = ({
  citiesData,
  values,
}: {
  citiesData: citiesDeliveryDataTypes
  values: DeliveryFormValuesTypes
}) => {
  return (
    <div>
      <p className="text-zinc-500 mb-[12px]">Город</p>
      <div
        role="group"
        className="input-wrapper--radio-group flex flex-row mb-[29px] flex-wrap relative"
      >
        {citiesData.map((item) => (
          <React.Fragment key={item.cityId}>
            <Field
              type="radio"
              name="cityId"
              key={item.cityId}
              value={item.cityId}
            />
            <label>{item.city}</label>
          </React.Fragment>
        ))}
      </div>
      <label className="flex flex-col text-zinc-500 mb-[12px]">
        Дата доставки
        <Field
          name="deliveryData"
          type="text"
          className="border-2 border-slate-300 p-2 pl-5 mb-2 mr-[8px] hover:border-sky-400 w-[115px] last-of-type:mr-[0]"
        />
      </label>
    </div>
  )
}

export default Delivery
