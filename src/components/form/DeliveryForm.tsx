import PaymentMethodSelector from "../paymentMethodSelector/paymentMethodSelector.tsx"
import { Form, Formik } from "formik"
import PickUp from "./pickUp/pickUp.tsx"
import Delivery from "./delivery/delivery.tsx"
import { PaymentVariants } from "../../types/enums.ts"
import { deliveryMethodType } from "../../types/types.ts"

interface MyFormValues {
  deliveryMethod: deliveryMethodType
  city: string
  pickPoint: string
  paymentMethod: PaymentVariants.Cash | PaymentVariants.Card
}

const initialValues: MyFormValues = {
  deliveryMethod: 0,
  city: "",
  pickPoint: "",
  paymentMethod: PaymentVariants.Card,
}

const DeliveryForm = ({
  activeDeliveryType,
}: {
  activeDeliveryType: deliveryMethodType
}) => {
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={async (values) => {
        console.log("Om submit event")
        await new Promise((r) => setTimeout(r, 500))
        alert(JSON.stringify(values, null, 2))
      }}
    >
      {({ values }) => (
        <Form>
          {(() => {
            switch (activeDeliveryType) {
              case 0:
                return <PickUp values={values} />
              case 1:
                return <Delivery />
              default:
                return null
            }
          })()}
          <PaymentMethodSelector activeDeliveryType={activeDeliveryType} />
          <button type="submit">Подтвердить</button>
        </Form>
      )}
    </Formik>
  )
}

export default DeliveryForm
