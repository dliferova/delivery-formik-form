import Banner from "../ui/banner/banner.tsx"
import { Field } from "formik"
import { DeliveryVariants } from "../../types/enums.ts"
import { DeliveryFormValuesTypes } from "../../types/types.ts"

const DeliveryTypeTabs = ({ values }: { values: DeliveryFormValuesTypes }) => {
  return (
    <>
      <h2 className="h2">Выберите способ получения товара</h2>
      <div className="flex flex-row justify-between gap-6 mb-10">
        <div className="radio-option relative">
          <label>
            <Field
              className="hidden-radio-input"
              type="radio"
              name="deliveryVariant"
              value={DeliveryVariants.PickUp}
            />
            <Banner
              isActive={values.deliveryVariant === DeliveryVariants.PickUp}
              title={"Самовывоз"}
            />
          </label>
        </div>

        <div className="radio-option relative">
          <label>
            <Field
              className="hidden-radio-input"
              type="radio"
              name="deliveryVariant"
              value={DeliveryVariants.CourierDelivery}
            />
            <Banner
              isActive={
                values.deliveryVariant === DeliveryVariants.CourierDelivery
              }
              title={"Доставка курьером"}
            />
          </label>
        </div>
      </div>
    </>
  )
}

export default DeliveryTypeTabs
