export type deliveryPoint = {
  address: string
  coordinates: number[]
}

export type citiesDeliveryDataApiTypes = {
  id: number
  city: string
  ["city-id"]: string
  ["delivery-points"]: deliveryPoint[]
}

export type cityDeliveryDataTypes = {
  id: number
  city: string
  cityId: string
  deliveryPoints: deliveryPoint[]
}

export type citiesDeliveryDataTypes = cityDeliveryDataTypes[]

export type deliveryDataApi = {
  cities: citiesDeliveryDataApiTypes[]
  requests: []
}
