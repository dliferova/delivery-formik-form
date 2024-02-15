import React from "react"
import { Field } from "formik"
import { citiesDeliveryDataTypes } from "../../types/api.ts"

const CitiesRadioGroup = ({
  citiesData,
}: {
  citiesData: citiesDeliveryDataTypes
}) => {
  return (
    <div>
      <p className="text-zinc-500 mb-[12px]">Город</p>
      <div
        role="group"
        className="input-wrapper--radio-group flex flex-row row-gap-[12px] mb-[29px] flex-wrap relative"
      >
        {citiesData.map((item) => (
          <React.Fragment key={item.cityId}>
            <Field
              id={item.cityId}
              className="hidden-radio-input"
              type="radio"
              name="cityId"
              key={item.cityId}
              value={item.cityId}
            />
            <label htmlFor={item.cityId}>{item.city}</label>
          </React.Fragment>
        ))}
      </div>
    </div>
  )
}

export default CitiesRadioGroup
