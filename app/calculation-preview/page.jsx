
"use client";
import React from "react";
import { FaLeaf, FaRecycle, FaWind, FaWater, FaChartBar } from "react-icons/fa";
import { useFormik } from 'formik';
import { useRouter } from "next/navigation";

const SKDMCalculator = () => {

  const router = useRouter();

  const handleSubmit = () => {
    router.push("/report")
  }


  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-green-800 via-blue-900 to-gray-900 text-white p-6">
      {/* Logo */}
      <div className="absolute top-0 left-0 p-4 text-4xl font-bold">
        CARBONETZ
      </div>

      {/* Header */}
      <h1 className="text-4xl font-semibold text-center mb-8">
        SKDM HESAPLAMA
      </h1>

      {/* Content */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Kapsam-1 Emisyonlar */}
        <div className="bg-white text-black p-6 rounded-xl shadow-lg">
          <FaChartBar className="text-green-500 text-4xl mb-4" />
          <h2 className="text-2xl font-semibold mb-2">Kapsam-1 Emisyonlar</h2>
          <p className="mb-2">
            Üretimde doğrudan açığa çıkan emisyonlar: <strong>500 ton CO2</strong>
          </p>
          <p className="mb-2">
            Kapsam-1 doğrudan emisyonlar, yüksek fırın ve oksijen fırınındaki üretim süreçlerinden kaynaklanmaktadır.
          </p>
          <p className="text-sm text-gray-600">
            CBAM Directive, Article 6: Doğrudan Emisyonlar (Kapsam-1)
          </p>
        </div>

        {/* Kapsam-2 Emisyonlar */}
        <div className="bg-white text-black p-6 rounded-xl shadow-lg">
          <FaWind className="text-blue-500 text-4xl mb-4" />
          <h2 className="text-2xl font-semibold mb-2">Kapsam-2 Emisyonlar</h2>
          <p className="mb-2">
            Dolaylı emisyonlar (Elektrik ve enerji kullanımı):{" "}
            <strong>150 ton CO2</strong>
          </p>
          <p className="mb-2">
            Kapsam-2 emisyonları, tesisin elektrik ihtiyacını karşılayan enerjinin tüketiminden kaynaklanmaktadır. Bu elektrik tüketimi yenilenebilir enerji kullanımı ile azaltılmıştır.
          </p>
          <p className="text-sm text-gray-600">
            CBAM Regulation, Section 4.2: Dolaylı Emisyonlar (Kapsam-2)
          </p>
        </div>

        {/* Kapsam-3 Emisyonlar */}
        <div className="bg-white text-black p-6 rounded-xl shadow-lg">
          <FaRecycle className="text-green-500 text-4xl mb-4" />
          <h2 className="text-2xl font-semibold mb-2">Kapsam-3 Emisyonlar</h2>
          <p className="mb-2">
            Hammadde ve lojistik süreçlerdeki emisyonlar:{" "}
            <strong>225 ton CO2</strong>
          </p>
          <p className="mb-2">
            Kapsam-3 emisyonları, ferro krom ve ferro manganez üretim süreçlerinden ve nakliyeden kaynaklanan dolaylı emisyonları içerir.
          </p>
          <p className="text-sm text-gray-600">
            CBAM Annex VI: Diğer Dolaylı Emisyonlar (Kapsam-3)
          </p>
        </div>

        {/* Method-1 Toplam Hesaplama */}
        <div className="bg-white text-black p-6 rounded-xl shadow-lg">
          <FaChartBar className="text-yellow-500 text-4xl mb-4" />
          <h2 className="text-2xl font-semibold mb-2">Method-1 Hesaplama</h2>
          <p className="mb-2">
            Tüketilen enerji ve hammaddelerden elde edilen toplam emisyon:{" "}
            <strong>665.18 ton CO2</strong>
          </p>
          <div className="mb-2">
            <strong>Detaylı Hesaplama:</strong>
            <ul className="list-disc list-inside mt-2">
              <li>Elektrik tüketimi (20 GWh): %60 yenilenebilir enerji ile sıfır emisyon, %40 yenilenebilir olmayan enerji ile 1.86 ton CO2</li>
              <li>Doğal gaz tüketimi (8 GWh): 1.63 ton CO2</li>
              <li>Kömür tüketimi (5 GWh): 1.69 ton CO2</li>
              <li>Demir cevheri kullanımı (1000 ton): 500 ton CO2</li>
              <li>Ferro krom (500 ton): 100 ton CO2</li>
              <li>Ferro manganez (400 ton): 60 ton CO2</li>
            </ul>
          </div>
          <p className="text-sm text-gray-600">
            CBAM Method-1 Calculation, Annex X
          </p>
        </div>

        {/* Method-2 Toplam Hesaplama */}
        <div className="bg-white text-black p-6 rounded-xl shadow-lg">
          <FaWater className="text-blue-500 text-4xl mb-4" />
          <h2 className="text-2xl font-semibold mb-2">Method-2 Hesaplama</h2>
          <p className="mb-2">
            Doğrudan ölçümle elde edilen toplam emisyon:{" "}
            <strong>600 ton CO2</strong>
          </p>
          <div className="mb-2">
            <strong>Detaylı Hesaplama:</strong>
            <ul className="list-disc list-inside mt-2">
              <li>Yüksek fırından çıkan emisyonlar: 500 ton CO2</li>
              <li>Oksijen fırınından çıkan emisyonlar: 300 ton CO2</li>
              <li>Karbon yakalama sistemi (CCS) ile yakalanan emisyonlar: -200 ton CO2</li>
            </ul>
          </div>
          <p className="text-sm text-gray-600">
            CBAM Method-2 Calculation, Annex X
          </p>
        </div>

        {/* Yenilenebilir Enerji Avantajları */}
        <div className="bg-white text-black p-6 rounded-xl shadow-lg">
          <FaLeaf className="text-green-500 text-4xl mb-4" />
          <h2 className="text-2xl font-semibold mb-2">
            Yenilenebilir Enerji Avantajları
          </h2>
          <p className="mb-2">
            %60 yenilenebilir enerji kullanımı, toplam elektrik tüketiminden kaynaklanan karbon emisyonlarını %60 oranında azaltır.
          </p>
          <p className="mb-2">
            Bu durum, AB ETS kapsamında firmanın karbon maliyetini düşürür ve ihracat maliyetlerinde avantaj sağlar.
          </p>
          <p className="text-sm text-gray-600">
            CBAM Directive, Section on Renewable Energy Benefits
          </p>
        </div>
      </div>

      {/* SKDM Rapor Butonu */}
      <div className="text-center mt-12">
        <div onClick={() => handleSubmit()} className="bg-green-600 hover:bg-green-700 text-white cursor-pointer text-center font-bold py-3 px-8 rounded-lg">
          SKDM RAPOR OLUŞTUR
        </div>
      </div>
    </div>
  );
};

export default SKDMCalculator;
