import { citiesDeliveryDataTypes } from "../../../types/api.ts"
import PaymentMethodSelector from "../../paymentMethodSelector/paymentMethodSelector.tsx"
import { DeliveryFormValuesTypes } from "../../../types/types.ts"
import CitiesRadioGroup from "../../citiesRadioGroup/citiesRadioGroup.tsx"
import PickUpRadioGroup from "../../pickUpRadioGroup/pickUpRadioGroup.tsx"

const PickUp = ({
  citiesData,
  values,
}: {
  citiesData: citiesDeliveryDataTypes
  values: DeliveryFormValuesTypes
}) => {
  return (
    <div>
      <h2 className="h2 tracking-wide mb-[16px]">Самовывоз</h2>
      <div className="mb-[56px]">
        <div className="flex flex-col relative mb-[10px]">
          <CitiesRadioGroup citiesData={citiesData} />
        </div>
        {values.cityId !== "" ? (
          <PickUpRadioGroup citiesData={citiesData} values={values} />
        ) : (
          <></>
        )}
      </div>
      <div className="mb-[56px]">
        <PaymentMethodSelector activeDeliveryType={0} />
      </div>
    </div>
  )
}

export default PickUp
