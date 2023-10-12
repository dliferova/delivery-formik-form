export type pointsResponseData = {
    cities: cityData[],
    requests: []
}

export interface cityData {
    id: number,
    city: string,
    cityId: string,
    deliveryPoints: deliveryPoint[],
}

export type deliveryPoint = {
    address: string,
    coordinates: number[]
}
