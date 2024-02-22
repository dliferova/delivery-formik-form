import { SetStateAction, useEffect, useState } from "react"
import DeliveryForm from "../../components/deliveryForm/deliveryForm.tsx"
import {
  citiesDeliveryDataApiTypes,
  citiesDeliveryDataTypes,
  deliveryDataApi,
} from "../../types/api.ts"

const Delivery = () => {
  const [citiesData, setCitiesData] = useState<citiesDeliveryDataTypes | null>(
    null,
  )

  useEffect(() => {
    fetch("https://mock.htmlacademy.pro/delivery/db")
      .then((response) => response.json())
      .then((data: deliveryDataApi) => {
        const formattedData: SetStateAction<citiesDeliveryDataTypes | null> =
          data.cities.map((item: citiesDeliveryDataApiTypes) => ({
            id: item["id"],
            cityId: item["city-id"],
            city: item["city"],
            deliveryPoints: item["delivery-points"],
          }))
        setCitiesData(formattedData)
      })
  }, [])

  return (
    <main className="main">
      <h1 className="hidden">Оформление заказа</h1>
      {citiesData && <DeliveryForm citiesData={citiesData} />}
    </main>
  )
}

export default Delivery
