// Em: components/ui/leaflet-map.jsx
'use client'

import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import { Icon, divIcon } from 'leaflet'

// Ícone SVG personalizado (convertido para Data URL) para Charlie locations
const customIcon = new Icon({
  iconUrl: "data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' fill='currentColor' xmlns='http://www.w3.org/2000/svg' style='color: rgb(29, 28, 27);'%3E%3Cpath d='M18.0895 12.4776H16.2048V11.1671C16.2025 7.73412 13.4189 4.94118 9.98599 4.94118C6.55305 4.94118 3.76716 7.73412 3.76716 11.1671V12.4776H1.86834C1.13657 12.4776 0.887162 13.2282 1.37422 13.6612C3.06834 15.1741 4.29187 15.0988 4.29187 15.0988H15.7813C15.7813 15.0988 16.8895 15.1741 18.5836 13.6612C19.0683 13.2282 18.8213 12.4776 18.0895 12.4776Z'%3E%3C/path%3E%3C/svg%3E",
  iconSize: [25, 25],
});

// SVG para o ícone de localização do evento (MapPin do Lucide)
const eventLocationSvg = `<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="red" stroke="red" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-map-pin"><path d="M12 12.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Z"/><path d="M12 22.5s-8-7-8-12a8 8 0 0 1 16 0c0 5-8 12-8 12Z"/></svg>`;

const defaultPinIcon = divIcon({
  html: eventLocationSvg,
  className: 'custom-event-map-pin', // Adiciona uma classe para estilização
  iconSize: [32, 32], // Tamanho do ícone
  iconAnchor: [16, 32], // Ponto de ancoragem do ícone
});

export const LeafletMap = ({ locations, center, defaultPinLocation }) => {
  return (
    <MapContainer
      center={center} 
      zoom={14}
      scrollWheelZoom={true}
      style={{ height: '100%', width: '100%', borderRadius: '8px' }}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      {locations.map((location) => (
        <Marker 
          key={location.name} 
          position={location.coords} 
          icon={customIcon}
        >
          <Popup>
            <div className="flex flex-col gap-1">
              <strong className="text-base text-zinc-800">{location.name} <span className="ml-2 inline-flex items-center rounded-md bg-green-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20">Hospedagem Oficial</span></strong>
              <p className="text-zinc-600">{location.address}</p>
              <a
                href={location.bookingLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline font-semibold"
              >
                Reservar estadia
              </a>
            </div>
          </Popup>
        </Marker>
      ))}
      {defaultPinLocation && (
        <Marker position={defaultPinLocation} icon={defaultPinIcon}>
          <Popup>
            <div className="flex flex-col gap-1">
              <strong className="text-base text-zinc-800">Analytics Summit 2025</strong>
              <p className="text-zinc-600">Alameda Vicente Pinzon, 54 • Vila Olímpia • 04547-130 • São Paulo • SP</p>
              <a
                href="#pricing"
                className="text-blue-600 hover:underline font-semibold"
              >
                Garanta seu ingresso
              </a>
            </div>
          </Popup>
        </Marker>
      )}
    </MapContainer>
  )
}