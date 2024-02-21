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
  const initialCity = citiesData[0]

  const initialValues: DeliveryFormValuesTypes = {
    deliveryVariant: DeliveryVariants.PickUp,
    cityId: initialCity.cityId,
    pickUpPointAddress: {
      address: initialCity.deliveryPoints[0].address,
      coordinates: initialCity.deliveryPoints[0].coordinates,
    },
    deliveryAddress: "",
    deliveryDate: null,
    deliveryTime: {
      fromMinutes: 600,
      toMinutes: 720,
    },
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
            <button className="btn" type="submit">
              SUBMIT
            </button>
          </Form>
        )
      }}
    </Formik>
  )
}

export default DeliveryForm
