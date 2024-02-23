import { Form, Formik, FormikHelpers } from "formik"
import { DeliveryVariants, PaymentVariants } from "../../types/enums.ts"
import { DeliveryFormValuesTypes } from "../../types/types.ts"
import { citiesDeliveryDataTypes } from "../../types/api.ts"
import DeliveryVariantsTabs from "../deliveryVariantsTabs/deliveryVariantTabs.tsx"
import CitiesRadioGroup from "../citiesRadioGroup/citiesRadioGroup.tsx"
import PickUpPointsRadioGroup from "../pickUpPointsRadioGroup/pickUpPointsRadioGroup.tsx"
import PaymentInfo from "../paymentInfo/paymentInfo.tsx"
import CourierDeliveryInfo from "../courierDeliveryInfo/courierDeliveryInfo.tsx"
import Button from "../ui/button/button.tsx"
import { validationSchema } from "./validationSchema.ts"
import { useState } from "react"

const DeliveryForm = ({
  citiesData,
}: {
  citiesData: citiesDeliveryDataTypes
}) => {
  const [isSubmitting, setSubmitting] = useState(false)

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

  const handleFormSubmit = async (
    values: DeliveryFormValuesTypes,
    formikHelpers: FormikHelpers<DeliveryFormValuesTypes>,
  ) => {
    try {
      setSubmitting(true)

      const formData = {
        ...values,
        pickUpPointAddress:
          values.deliveryVariant === DeliveryVariants.CourierDelivery
            ? null
            : values.pickUpPointAddress,
      }

      const response = await fetch(
        "https://mock.htmlacademy.pro/delivery/requests",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        },
      )

      if (!response.ok) {
        throw new Error("Ошибка при отправке данных на сервер")
      }

      formikHelpers.resetForm()
      alert("Данные успешно отправлены на сервер!")
    } catch (error) {
      console.error("Error in handleFormSubmit:", error)
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={(values, formikHelpers) =>
        handleFormSubmit(values, formikHelpers)
      }
    >
      {({ values }) => {
        return (
          <Form>
            <DeliveryVariantsTabs />
            <div className="mb-10">
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
            </div>
            <div className="mb-[43px]">
              <PaymentInfo />
            </div>
            <Button type="submit" disabled={isSubmitting}>
              {isSubmitting ? "Отправка..." : "Отправить"}
            </Button>
          </Form>
        )
      }}
    </Formik>
  )
}

export default DeliveryForm
