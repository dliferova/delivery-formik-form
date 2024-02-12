import { citiesDeliveryDataTypes } from "../../../types/api.ts"
import { Field } from "formik"
import PaymentMethodSelector from "../../paymentMethodSelector/paymentMethodSelector.tsx"
import React from "react"
import { DeliveryFormValuesTypes } from "../../../types/types.ts"
import { getPickUpPointsInSelectedCity } from "../../../utils/utils.ts"

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
      <div className="flex flex-col relative mb-[10px]">
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
      </div>

      {values.cityId !== "" ? (
        <div>
          <p className="text-zinc-500 mb-[12px]">Адрес пункта выдачи заказов</p>
          <div
            role="group"
            className="input-wrapper--radio-group flex flex-row mb-[29px] flex-wrap relative"
          >
            {getPickUpPointsInSelectedCity({
              citiesData: citiesData,
              activeCityId: values.cityId,
            })!.map((item) => (
              <>
                <Field
                  key={`${item.address}-key}`}
                  name="pickUpPointAddress"
                  type="radio"
                  value={item.address}
                />
                <label>{item.address}</label>
              </>
            ))}
          </div>
        </div>
      ) : (
        <></>
      )}

      <PaymentMethodSelector activeDeliveryType={0} />
    </div>
  )
}

export default PickUp

// {
//   getCityDeliveryPoints(values.city) && (
//     <div className="flex flex-col relative">
//       <div id="pickPoint-radio-group" className="mb-[12px]">
//         <span className="text-zinc-500">Адрес пункта выдачи заказов</span>
//       </div>
//       <div
//         role="group"
//         aria-labelledby="pickPoint-radio-group"
//         className="input-wrapper--radio-group flex flex-row relative mb-[29px] flex-wrap"
//       >
//         {getCityDeliveryPoints(values.city)!.map((item) => (
//           <>
//             <Field
//               key={`${item.address}-key}`}
//               name="pickPoint"
//               type="radio"
//               value={item.address}
//             />
//             <label>{item.address}</label>
//           </>
//         ))}
//       </div>
//     </div>
//   )
// }
