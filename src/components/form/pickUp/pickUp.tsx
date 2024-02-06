import { Field } from "formik"
import { useEffect, useState } from "react"

import { CustomInput } from "../../ui/customInput/customInput.tsx"
import { cityData, deliveryPoint } from "../../../types/types.ts"

const PickUp = ({ values }: any) => {
  const [citiesData, setCitiesData] = useState<cityData[] | null>(null)

  useEffect(() => {
    fetch("https://mock.pages.academy/delivery/db")
      .then((response) => response.json())
      .then((data) => {
        console.log("Data:", data)
        const formattedData = data.cities.map((item) => ({
          id: item["id"],
          cityId: item["city-id"],
          city: item["city"],
          deliveryPoints: item["delivery-points"],
        }))
        console.log("formattedData:", formattedData)
        setCitiesData(formattedData)
      })
  }, [])

  const getCityDeliveryPoints = (
    cityId: string,
  ): deliveryPoint[] | undefined => {
    return citiesData?.find((city) => city.cityId === cityId)?.deliveryPoints
  }

  return (
    <div>
      {citiesData && (
        <>
          <h3 className="text-xl tracking-wide mb-[16px]">Самовывоз</h3>

          <Field name="deliveryMethod" value="0" className="hidden" />
          <div className="flex flex-col relative mb-[10px]">
            <div id="city-radio-group" className="mb-[12px]">
              <p className="text-zinc-500">Город</p>
            </div>
            <div
              role="group"
              aria-labelledby="city-radio-group"
              className="flex flex-row relative"
            >
              {citiesData.map((item) => (
                <Field
                  key={item.cityId}
                  component={Input}
                  name="city"
                  type="radio"
                  className={"absolute w-[1px] h-[1px] m-[-1px] outline-none"}
                  value={item.cityId}
                  title={item.city}
                />
              ))}
            </div>
          </div>

          {getCityDeliveryPoints(values.city) && (
            <div className="flex flex-col relative">
              <div id="pickPoint-radio-group" className="mb-[12px]">
                <span className="text-zinc-500">
                  Адрес пункта выдачи заказов
                </span>
              </div>
              <div
                role="group"
                aria-labelledby="pickPoint-radio-group"
                className="flex flex-row"
              >
                {getCityDeliveryPoints(values.city)!.map((item) => (
                  <Field
                    key={`${item.address}-key}`}
                    component={Input}
                    className={"absolute w-[1px] h-[1px] m-[-1px] outline-none"}
                    name="pickPoint"
                    type="radio"
                    value={item.address}
                    title={item.address}
                  />
                ))}
              </div>
            </div>
          )}
        </>
      )}
    </div>
  )
}

export default PickUp
