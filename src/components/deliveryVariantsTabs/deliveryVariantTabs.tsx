import Banner from "../ui/banner/banner.tsx"
import { Field, useFormikContext } from "formik"
import { DeliveryVariants } from "../../types/enums.ts"
import { DeliveryFormValuesTypes } from "../../types/types.ts"

const DeliveryVariantsTabs = () => {
  const { values }: { values: DeliveryFormValuesTypes } = useFormikContext()
  return (
    <>
      <h2 className="h2">Выберите способ получения товара</h2>
      <div className="flex flex-row justify-between gap-6 mb-10">
        <div className="radio-option relative">
          <label htmlFor="delivery-method-variant-pickup">
            <Field
              id="delivery-method-variant-pickup"
              type="radio"
              name="deliveryVariant"
              value={DeliveryVariants.PickUp}
              className="hidden-radio-input"
            />
            <Banner
              isActive={values.deliveryVariant === DeliveryVariants.PickUp}
              title={"Самовывоз"}
            />
          </label>
        </div>

        <div className="radio-option relative">
          <label htmlFor="delivery-method-variant-сourier">
            <Field
              id="delivery-method-variant-сourier"
              type="radio"
              name="deliveryVariant"
              value={DeliveryVariants.CourierDelivery}
              className="hidden-radio-input"
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

export default DeliveryVariantsTabs
