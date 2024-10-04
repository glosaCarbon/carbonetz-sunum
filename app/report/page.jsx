"use client"
import { useState } from "react";
import { FaLeaf, FaGlobe, FaRecycle, FaWind, FaWater, FaArrowAltCircleDown } from "react-icons/fa";
import { AiOutlineFileText, AiOutlineCheckCircle, AiOutlineFileDone } from "react-icons/ai";
import { useFormik } from 'formik';

function SKDMReport() {
  const [openSections, setOpenSections] = useState({});

  const toggleSection = (index) => {
    setOpenSections((prev) => ({ ...prev, [index]: !prev[index] }));
  };

  return (
    <div className="w-full min-h-screen py-8" style={{ backgroundImage: "url('/path/to/your/background.jpg')", backgroundSize: "cover", backgroundColor: '#004d40' }}>
      <div className="max-w-4xl mx-auto p-6 bg-white rounded-xl shadow-lg">
        <h1 className="text-4xl font-bold text-center text-green-600 mb-8">
          SKDM Uyumlu Nihai Rapor
        </h1>

        {/* Accordion Start */}
        <div className="accordion space-y-4">
          {/* Rapor Genel Bilgileri */}
          <div className="accordion-item">
            <button
              className="accordion-header text-xl font-semibold flex items-center justify-between w-full py-3 bg-green-50 text-green-800 rounded-lg"
              onClick={() => toggleSection(1)}
            >
              <FaGlobe className="mr-2" /> Rapor Genel Bilgileri
              <FaArrowAltCircleDown className={`transform transition-transform ${openSections[1] ? "rotate-180" : ""}`} />
            </button>
            {openSections[1] && (
              <div className="accordion-body mt-4 text-gray-600">
                <p><strong>Rapor Başlığı:</strong> CBAM Uyum Raporu - ABC Çelik A.Ş., Çelik Ürünleri</p>
                <p><strong>Rapor Tarihi:</strong> 15 Eylül 2024</p>
                <p><strong>Raporlama Dönemi:</strong> 2024 Yıllık Rapor</p>
                <p><strong>Firma Adı:</strong> ABC Çelik A.Ş.</p>
                <p><strong>Ülke:</strong> Türkiye</p>
                <p><strong>Adres:</strong> [Adres Bilgileri Varsayılan]</p>
                <p><strong>İletişim Bilgileri:</strong> [Telefon ve E-posta Varsayılan]</p>
              </div>
            )}
          </div>

          {/* Ürün ve Süreç Bilgileri */}
          <div className="accordion-item">
            <button
              className="accordion-header text-xl font-semibold flex items-center justify-between w-full py-3 bg-blue-50 text-blue-800 rounded-lg"
              onClick={() => toggleSection(2)}
            >
              <FaLeaf className="mr-2" /> Ürün ve Süreç Bilgileri
              <FaArrowAltCircleDown className={`transform transition-transform ${openSections[2] ? "rotate-180" : ""}`} />
            </button>
            {openSections[2] && (
              <div className="accordion-body mt-4 text-gray-600">
                <p><strong>Ürün Adı:</strong> Yassı Çelik Ürünleri</p>
                <p><strong>Mal Grubu:</strong> Çelik</p>
                <p><strong>Üretim Tesisi:</strong> ABC Çelik Üretim Tesisi, Türkiye, İstanbul</p>
                <p><strong>Üretim Kapasitesi:</strong> Yıllık 10.000 ton çelik</p>
                <p><strong>Enerji Kaynakları:</strong> %60 Yenilenebilir Enerji, %30 Doğal Gaz, %10 Kömür</p>
              </div>
            )}
          </div>

          {/* Emisyon Hesaplama Özeti */}
          <div className="accordion-item">
            <button
              className="accordion-header text-xl font-semibold flex items-center justify-between w-full py-3 bg-green-50 text-green-800 rounded-lg"
              onClick={() => toggleSection(3)}
            >
              <FaRecycle className="mr-2" /> Emisyon Hesaplama Özeti
              <FaArrowAltCircleDown className={`transform transition-transform ${openSections[3] ? "rotate-180" : ""}`} />
            </button>
            {openSections[3] && (
              <div className="accordion-body mt-4 text-gray-600">
                <p><strong>Kapsam-1 (Doğrudan Emisyonlar):</strong> 500 ton CO2</p>
                <p><strong>Kapsam-2 (Dolaylı Emisyonlar):</strong> 150 ton CO2</p>
                <p><strong>Kapsam-3 (Diğer Dolaylı Emisyonlar):</strong> 225 ton CO2</p>
              </div>
            )}
          </div>

          {/* Karbon Fiyatlandırması ve Dengeleme */}
          <div className="accordion-item">
            <button
              className="accordion-header text-xl font-semibold flex items-center justify-between w-full py-3 bg-blue-50 text-blue-800 rounded-lg"
              onClick={() => toggleSection(4)}
            >
              <FaWind className="mr-2" /> Karbon Fiyatlandırması ve Dengeleme
              <FaArrowAltCircleDown className={`transform transition-transform ${openSections[4] ? "rotate-180" : ""}`} />
            </button>
            {openSections[4] && (
              <div className="accordion-body mt-4 text-gray-600">
                <p><strong>Ton Başına Ödenen Karbon Fiyatı:</strong> €50/ton</p>
                <p><strong>Toplam Karbon Maliyeti (Method-1):</strong> €33.259</p>
                <p><strong>Toplam Karbon Maliyeti (Method-2):</strong> €30.000</p>
              </div>
            )}
          </div>

          {/* Nihai Emisyon ve Ödeme Hesaplaması */}
          <div className="accordion-item">
            <button
              className="accordion-header text-xl font-semibold flex items-center justify-between w-full py-3 bg-green-50 text-green-800 rounded-lg"
              onClick={() => toggleSection(5)}
            >
              <FaGlobe className="mr-2" /> Nihai Emisyon ve Ödeme Hesaplaması
              <FaArrowAltCircleDown className={`transform transition-transform ${openSections[5] ? "rotate-180" : ""}`} />
            </button>
            {openSections[5] && (
              <div className="accordion-body mt-4 text-gray-600">
                <p><strong>Toplam Raporlanan Emisyonlar:</strong> 665.18 ton CO2 (Method-1) veya 600 ton CO2 (Method-2)</p>
                <p><strong>Ödenecek Karbon Bedeli:</strong> €33.259 (Method-1) veya €30.000 (Method-2)</p>
              </div>
            )}
          </div>

          {/* Destekleyici Belgeler */}
          <div className="accordion-item">
            <button
              className="accordion-header text-xl font-semibold flex items-center justify-between w-full py-3 bg-blue-50 text-blue-800 rounded-lg"
              onClick={() => toggleSection(6)}
            >
              <FaWater className="mr-2" /> Destekleyici Belgeler
              <FaArrowAltCircleDown className={`transform transition-transform ${openSections[6] ? "rotate-180" : ""}`} />
            </button>
            {openSections[6] && (
              <div className="accordion-body mt-4 text-gray-600">
                <p><strong>Yenilenebilir Enerji Sertifikaları</strong></p>
                <p><strong>Emisyon Ölçüm Belgeleri</strong></p>
                <p><strong>Doğrulama Raporları</strong></p>
              </div>
            )}
          </div>

          {/* Ekler */}
          <div className="accordion-item">
            <button
              className="accordion-header text-xl font-semibold flex items-center justify-between w-full py-3 bg-green-50 text-green-800 rounded-lg"
              onClick={() => toggleSection(7)}
            >
              <FaRecycle className="mr-2" /> Ekler
              <FaArrowAltCircleDown className={`transform transition-transform ${openSections[7] ? "rotate-180" : ""}`} />
            </button>
            {openSections[7] && (
              <div className="accordion-body mt-4 text-gray-600">
                <p><strong>Ek A:</strong> Detaylı hesaplama metodolojileri</p>
                <p><strong>Ek B:</strong> CBAM Direktifi Referansları</p>
                <p><strong>Ek C:</strong> Ham Veriler ve Hesaplamalar</p>
              </div>
            )}
          </div>
        </div>

        {/* Raporu Oluştur Butonu */}
        <div className="text-center mt-8">
          <button className="bg-green-500 text-white py-3 px-6 rounded-lg hover:bg-green-600 transition duration-300 shadow-lg">
            Raporu Oluştur
          </button>
        </div>
      </div>
    </div>
  );
}

export default SKDMReport;
