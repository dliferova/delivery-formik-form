import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet"
import "leaflet/dist/leaflet.css"

const MapComponent = ({
  markerPosition,
  centerPosition,
}: {
  markerPosition: number[]
  centerPosition: number[]
}) => {
  const RecenterAutomatically = ({
    lat,
    lng,
  }: {
    lat: number
    lng: number
  }) => {
    const map = useMap()
    map.setView([lat, lng])
    return null
  }

  return (
    <MapContainer
      style={{ height: "400px", width: "768px" }}
      center={[centerPosition[0], centerPosition[1], undefined]}
      zoom={12}
      scrollWheelZoom={false}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={[markerPosition[0], markerPosition[1], undefined]}>
        <Popup>
          A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
      </Marker>

      <RecenterAutomatically lat={centerPosition[0]} lng={centerPosition[1]} />
    </MapContainer>
  )
}

export default MapComponent
