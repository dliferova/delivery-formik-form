import { getPickUpPointsInSelectedCity } from "../../utils/utils.ts"
import { Field, useField, useFormikContext } from "formik"
import MapComponent from "../map/map.tsx"
import { DeliveryFormValuesTypes, FormikOptions } from "../../types/types.ts"
import { citiesDeliveryDataTypes } from "../../types/api.ts"
import React from "react"

const PickUpPointsRadioGroup = ({
  citiesData,
}: {
  citiesData: citiesDeliveryDataTypes
}) => {
  const [field, meta, helpers] =
    useField<DeliveryFormValuesTypes["pickUpPointAddress"]>(
      "pickUpPointAddress",
    )

  const handleFieldClick = (address: string, coordinates: number[]) => {
    helpers.setValue({
      address,
      coordinates,
    })
  }

  const { values }: FormikOptions = useFormikContext()

  return (
    <div>
      <p className="text-zinc-500 mb-[12px]">Адрес пункта выдачи заказов</p>
      <div
        role="group"
        className="input-wrapper--radio-group flex flex-row gap-y-[12px] mb-[29px] flex-wrap relative"
      >
        {getPickUpPointsInSelectedCity({
          citiesData: citiesData,
          activeCityId: values.cityId,
        })!.map((item, idx) => (
          <React.Fragment key={idx}>
            <Field
              className="hidden-radio-input"
              id={`address-${idx}`}
              key={`${item.address}-key}`}
              name="pickUpPointAddress.address"
              type="radio"
              value={item.address}
              onClick={() => handleFieldClick(item.address, item.coordinates)}
            />
            <label htmlFor={`address-${idx}`}>{item.address}</label>
          </React.Fragment>
        ))}
      </div>
      {values.pickUpPointAddress?.coordinates && (
        <MapComponent
          markerPosition={values.pickUpPointAddress.coordinates}
          centerPosition={values.pickUpPointAddress.coordinates}
        />
      )}
    </div>
  )
}

export default PickUpPointsRadioGroup
