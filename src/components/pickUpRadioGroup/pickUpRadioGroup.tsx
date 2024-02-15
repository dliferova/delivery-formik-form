import { getPickUpPointsInSelectedCity } from "../../utils/utils.ts"
import { Field, useField } from "formik"
import MapComponent from "../map/map.tsx"
import { DeliveryFormValuesTypes } from "../../types/types.ts"
import { citiesDeliveryDataTypes } from "../../types/api.ts"

const PickUpRadioGroup = ({
  citiesData,
  values,
}: {
  citiesData: citiesDeliveryDataTypes
  values: DeliveryFormValuesTypes
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
          <>
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
          </>
        ))}
      </div>
      <MapComponent
        markerPosition={values.pickUpPointAddress.coordinates}
        centerPosition={values.pickUpPointAddress.coordinates}
      />
    </div>
  )
}

export default PickUpRadioGroup
