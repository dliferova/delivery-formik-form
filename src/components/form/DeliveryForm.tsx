import { Form, Formik } from "formik"
import { DeliveryVariants, PaymentVariants } from "../../types/enums.ts"
import { DeliveryFormValuesTypes } from "../../types/types.ts"
import { citiesDeliveryDataTypes } from "../../types/api.ts"
import DeliveryTypeTabs from "../deliveryVariantTabs/deliveryVariantTabs.tsx"
import PickUp from "./pickUp/pickUp.tsx"
import Delivery from "./delivery/delivery.tsx"

const DeliveryForm = ({
  citiesData,
}: {
  citiesData: citiesDeliveryDataTypes
}) => {
  const initialValues: DeliveryFormValuesTypes = {
    deliveryVariant: DeliveryVariants.PickUp,
    cityId: citiesData[0].cityId,
    pickUpPointAddress: citiesData[0].deliveryPoints[0].address,
    deliveryAddress: "",
    deliveryData: "",
    deliveryTime: "",
    paymentMethod: PaymentVariants.Card,
    cardNumber: "",
    phoneNumber: "",
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
        console.log("FORMIK VALUES____", values)
        return (
          <Form>
            <DeliveryTypeTabs values={values} />
            {(() => {
              switch (values.deliveryVariant) {
                case DeliveryVariants.PickUp:
                  return <PickUp citiesData={citiesData} values={values} />
                case DeliveryVariants.CourierDelivery:
                  return <Delivery citiesData={citiesData} values={values} />
                default:
                  return null
              }
            })()}
            <button type="submit">SUBMIT</button>
          </Form>
        )
      }}
    </Formik>
  )
}

export default DeliveryForm
