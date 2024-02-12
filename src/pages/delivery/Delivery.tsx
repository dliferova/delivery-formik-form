import { SetStateAction, useEffect, useState } from "react"
import DeliveryForm from "../../components/form/DeliveryForm.tsx"
import {
  citiesDeliveryDataApiTypes,
  citiesDeliveryDataTypes,
  deliveryDataApi,
} from "../../types/api.ts"

const Delivery = () => {
  const [citiesData, setCitiesData] = useState<citiesDeliveryDataTypes | null>(
    null,
  )

  {
    /* Загружаем данные с АПИ + сохраняем в локальный стейт */
  }

  useEffect(() => {
    fetch("https://mock.htmlacademy.pro/delivery/db")
      .then((response) => response.json())
      .then((data: deliveryDataApi) => {
        console.log("1. data:", data)
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

  console.log("3. citiesData", citiesData)

  return (
    <main className="main">
      <h1 className="hidden">Оформление заказа</h1>
      {citiesData && <DeliveryForm citiesData={citiesData} />}
    </main>
  )
}

export default Delivery
