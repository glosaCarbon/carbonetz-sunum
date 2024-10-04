"use client"
import React, { useState } from 'react';
import { FaLeaf, FaRecycle, FaWind, FaIndustry, FaTruck, FaGlobe, FaBalanceScale } from 'react-icons/fa'; // Yeşil dönüşüm ve sürdürülebilirlik ikonları
import { useFormik } from 'formik';
import { useRouter } from "next/navigation";

function Dashboard() {
  const router = useRouter();
  const [data, setData] = useState({
    productType: "Yarı mamul çelik ürünleri",
    gtipCode: "7207",
    rawMaterials: {
      ironOre: 1000,
      ferroChrome: 500,
      ferroManganese: 400,
      recycledSteel: 25
    },
    energyConsumption: {
      electricity: 20,
      naturalGas: 8,
      coal: 5,
      renewableEnergyPercentage: 60
    },
    emissions: {
      scope1: 500,
      scope2: 150,
      scope3: 225
    },
    ccsCapacity: 200,
    transportEmissions: 50,
    productionCapacity: 10000,
    carbonPrice: 50
  });

  const handleInputChange = (e, category, field) => {
    setData(prevState => ({
      ...prevState,
      [category]: {
        ...prevState[category],
        [field]: e.target.value
      }
    }));
  };
  
  const handleSubmit = () => {
    console.log(data)
    router.push("/calculation-preview")
  }

  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-green-800 via-blue-900 to-gray-900 p-6 text-white font-inter">
      {/* Logo */}
      <div className="absolute top-0 left-0 p-4 text-4xl font-bold text-white">
        CARBONETZ
      </div>

      <div className="container mx-auto p-6 bg-white rounded-lg shadow-2xl max-w-5xl text-black">
        <h1 className="text-3xl font-semibold text-center mb-8">SKDM Hesaplama Girdileri</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Üretim Detayları */}
          <div className="p-6 bg-green-50 rounded-lg shadow-lg flex flex-col">
            <h2 className="text-xl font-bold mb-4 flex items-center">
              <FaIndustry className="text-green-500 mr-2" /> Üretim Detayları
            </h2>
            <label className="mb-2">Ürün Tipi:</label>
            <input
              type="text"
              className="p-2 border border-gray-300 rounded-lg"
              value={data.productType}
              onChange={(e) => handleInputChange(e, 'data', 'productType')}
            />
            <label className="mt-4 mb-2">GTIP Kodu:</label>
            <input
              type="text"
              className="p-2 border border-gray-300 rounded-lg"
              value={data.gtipCode}
              onChange={(e) => handleInputChange(e, 'data', 'gtipCode')}
            />
          </div>

          {/* Hammadde Detayları */}
          <div className="p-6 bg-green-50 rounded-lg shadow-lg flex flex-col">
            <h2 className="text-xl font-bold mb-4 flex items-center">
              <FaLeaf className="text-green-500 mr-2" /> Hammadde Detayları
            </h2>
            <label className="mb-2">Demir Cevheri (ton):</label>
            <input
              type="number"
              className="p-2 border border-gray-300 rounded-lg"
              value={data.rawMaterials.ironOre}
              onChange={(e) => handleInputChange(e, 'rawMaterials', 'ironOre')}
            />
            <label className="mt-4 mb-2">Ferro Krom (ton):</label>
            <input
              type="number"
              className="p-2 border border-gray-300 rounded-lg"
              value={data.rawMaterials.ferroChrome}
              onChange={(e) => handleInputChange(e, 'rawMaterials', 'ferroChrome')}
            />
            <label className="mt-4 mb-2">Ferro Manganez (ton):</label>
            <input
              type="number"
              className="p-2 border border-gray-300 rounded-lg"
              value={data.rawMaterials.ferroManganese}
              onChange={(e) => handleInputChange(e, 'rawMaterials', 'ferroManganese')}
            />
            <label className="mt-4 mb-2">Geri Dönüştürülmüş Çelik (%):</label>
            <input
              type="number"
              className="p-2 border border-gray-300 rounded-lg"
              value={data.rawMaterials.recycledSteel}
              onChange={(e) => handleInputChange(e, 'rawMaterials', 'recycledSteel')}
            />
          </div>

          {/* Enerji Tüketimi */}
          <div className="p-6 bg-green-50 rounded-lg shadow-lg flex flex-col">
            <h2 className="text-xl font-bold mb-4 flex items-center">
              <FaWind className="text-green-500 mr-2" /> Enerji Tüketimi
            </h2>
            <label className="mb-2">Elektrik (GWh):</label>
            <input
              type="number"
              className="p-2 border border-gray-300 rounded-lg"
              value={data.energyConsumption.electricity}
              onChange={(e) => handleInputChange(e, 'energyConsumption', 'electricity')}
            />
            <label className="mt-4 mb-2">Doğal Gaz (GWh):</label>
            <input
              type="number"
              className="p-2 border border-gray-300 rounded-lg"
              value={data.energyConsumption.naturalGas}
              onChange={(e) => handleInputChange(e, 'energyConsumption', 'naturalGas')}
            />
            <label className="mt-4 mb-2">Kömür (GWh):</label>
            <input
              type="number"
              className="p-2 border border-gray-300 rounded-lg"
              value={data.energyConsumption.coal}
              onChange={(e) => handleInputChange(e, 'energyConsumption', 'coal')}
            />
            <label className="mt-4 mb-2">Yenilenebilir Enerji (%):</label>
            <input
              type="number"
              className="p-2 border border-gray-300 rounded-lg"
              value={data.energyConsumption.renewableEnergyPercentage}
              onChange={(e) => handleInputChange(e, 'energyConsumption', 'renewableEnergyPercentage')}
            />
          </div>

          {/* Emisyon Verileri */}
          <div className="p-6 bg-green-50 rounded-lg shadow-lg flex flex-col">
            <h2 className="text-xl font-bold mb-4 flex items-center">
              <FaGlobe className="text-green-500 mr-2" /> Emisyon Verileri
            </h2>
            <label className="mb-2">Kapsam-1 Emisyonları (ton CO2):</label>
            <input
              type="number"
              className="p-2 border border-gray-300 rounded-lg"
              value={data.emissions.scope1}
              onChange={(e) => handleInputChange(e, 'emissions', 'scope1')}
            />
            <label className="mt-4 mb-2">Kapsam-2 Emisyonları (ton CO2):</label>
            <input
              type="number"
              className="p-2 border border-gray-300 rounded-lg"
              value={data.emissions.scope2}
              onChange={(e) => handleInputChange(e, 'emissions', 'scope2')}
            />
            <label className="mt-4 mb-2">Kapsam-3 Emisyonları (ton CO2):</label>
            <input
              type="number"
              className="p-2 border border-gray-300 rounded-lg"
              value={data.emissions.scope3}
              onChange={(e) => handleInputChange(e, 'emissions', 'scope3')}
            />
          </div>

          {/* CCS ve Taşımacılık Verileri */}
          <div className="p-6 bg-green-50 rounded-lg shadow-lg flex flex-col">
            <h2 className="text-xl font-bold mb-4 flex items-center">
              <FaBalanceScale className="text-green-500 mr-2" /> CCS ve Taşımacılık
            </h2>
            <label className="mb-2">Karbon Yakalama Kapasitesi (ton):</label>
            <input
              type="number"
              className="p-2 border border-gray-300 rounded-lg"
              value={data.ccsCapacity}
              onChange={(e) => handleInputChange(e, 'data', 'ccsCapacity')}
            />
            <label className="mt-4 mb-2">Nakliye Emisyonları (ton CO2):</label>
            <input
              type="number"
              className="p-2 border border-gray-300 rounded-lg"
              value={data.transportEmissions}
              onChange={(e) => handleInputChange(e, 'data', 'transportEmissions')}
            />
          </div>

          {/* Üretim Kapasitesi */}
          <div className="p-6 bg-green-50 rounded-lg shadow-lg flex flex-col">
            <h2 className="text-xl font-bold mb-4 flex items-center">
              <FaIndustry className="text-green-500 mr-2" /> Üretim Kapasitesi
            </h2>
            <label className="mb-2">Yıllık Üretim Kapasitesi (ton):</label>
            <input
              type="number"
              className="p-2 border border-gray-300 rounded-lg"
              value={data.productionCapacity}
              onChange={(e) => handleInputChange(e, 'data', 'productionCapacity')}
            />
          </div>

          {/* Karbon Fiyatı */}
          <div className="p-6 bg-green-50 rounded-lg shadow-lg flex flex-col">
            <h2 className="text-xl font-bold mb-4 flex items-center">
              <FaBalanceScale className="text-green-500 mr-2" /> Karbon Fiyatı
            </h2>
            <label className="mb-2">Karbon Fiyatı (€/ton CO2):</label>
            <input
              type="number"
              className="p-2 border border-gray-300 rounded-lg"
              value={data.carbonPrice}
              onChange={(e) => handleInputChange(e, 'data', 'carbonPrice')}
            />
          </div>
        </div>

        {/* Submit Button */}
        <div onClick={() => handleSubmit()} className="w-full cursor-pointer text-center bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded-lg mt-8">
          SKDM Hesaplama
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
