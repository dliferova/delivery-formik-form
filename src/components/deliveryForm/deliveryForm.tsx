import { Form, Formik } from "formik"
import { DeliveryVariants, PaymentVariants } from "../../types/enums.ts"
import { DeliveryFormValuesTypes } from "../../types/types.ts"
import { citiesDeliveryDataTypes } from "../../types/api.ts"
import DeliveryVariantsTabs from "../deliveryVariantsTabs/deliveryVariantTabs.tsx"
import CitiesRadioGroup from "../citiesRadioGroup/citiesRadioGroup.tsx"
import PickUpPointsRadioGroup from "../pickUpPointsRadioGroup/pickUpPointsRadioGroup.tsx"
import PaymentInfo from "../paymentInfo/paymentInfo.tsx"
import CourierDeliveryInfo from "../courierDeliveryInfo/courierDeliveryInfo.tsx"
import Button from "../ui/button/button.tsx"

const DeliveryForm = ({
  citiesData,
}: {
  citiesData: citiesDeliveryDataTypes
}) => {
  const initialValues: DeliveryFormValuesTypes = {
    deliveryVariant: DeliveryVariants.PickUp,
    cityId: citiesData[0].cityId,
    pickUpPointAddress: {
      address: citiesData[0].deliveryPoints[0].address,
      coordinates: citiesData[0].deliveryPoints[0].coordinates,
    },
    deliveryAddress: null,
    deliveryDate: null,
    deliveryTime: {
      fromMinutes: 600,
      toMinutes: 720,
    },
    paymentMethod: PaymentVariants.Card,
    cardNumber: null,
    phoneNumber: null,
  }

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={async (values) => {
        console.log("Om submit event")
        await new Promise((r) => setTimeout(r, 500))
        alert(JSON.stringify(values, null, 2))
      }}
    >
      {({ values }) => {
        return (
          <Form>
            <DeliveryVariantsTabs />
            <h2 className="h2 tracking-wide mb-[16px]">
              {values.deliveryVariant === DeliveryVariants.PickUp
                ? "Самовывоз"
                : "Доставка"}
            </h2>
            <div className="mb-[10px]">
              <CitiesRadioGroup citiesData={citiesData} />
            </div>
            {(() => {
              switch (values.deliveryVariant) {
                case DeliveryVariants.PickUp:
                  return <PickUpPointsRadioGroup citiesData={citiesData} />
                case DeliveryVariants.CourierDelivery:
                  return <CourierDeliveryInfo />
                default:
                  return null
              }
            })()}
            <div className="mb-[43px]">
              <PaymentInfo />
            </div>
            <Button children={"Submit"} type="submit" />
          </Form>
        )
      }}
    </Formik>
  )
}

export default DeliveryForm
