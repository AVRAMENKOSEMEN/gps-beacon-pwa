import React, { useState } from 'react'

function App() {
  const [coords, setCoords] = useState("Ожидание данных...")

  const connectBluetooth = async () => {
    try {
      const device = await navigator.bluetooth.requestDevice({
        acceptAllDevices: true,
        optionalServices: ['00001101-0000-1000-8000-00805f9b34fb'] // SPP
      })

      const server = await device.gatt.connect()
      console.log("✅ Подключено:", device.name)

      // Здесь должен быть парсинг данных от ESP32
      setCoords("LAT:55.7558; LON:37.6173")
    } catch (err) {
      console.error(err)
      setCoords("Ошибка подключения")
    }
  }

  const openInMaps = () => {
    if (coords.includes("LAT")) {
      const lat = coords.match(/LAT:([0-9.\-]+)/)[1]
      const lon = coords.match(/LON:([0-9.\-]+)/)[1]
      window.open(`https://maps.google.com/?q=${lat},${lon}`, "_blank")
    }
  }

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h1>GPS LoRa Beacon</h1>
      <button onClick={connectBluetooth}>🔗 Подключить Bluetooth</button>
      <p>{coords}</p>
      <button onClick={openInMaps}>📍 Открыть в Google Maps</button>
    </div>
  )
}

export default App
