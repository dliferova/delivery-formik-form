import { citiesDeliveryDataTypes } from "../types/api.ts"

export const getPickUpPointsInSelectedCity = ({
  citiesData,
  activeCityId,
}: {
  citiesData: citiesDeliveryDataTypes
  activeCityId: string
}) => {
  const activeCityItem = citiesData.find((item) => item.cityId === activeCityId)
  if (activeCityItem) {
    return activeCityItem.deliveryPoints
  } else return null
}
