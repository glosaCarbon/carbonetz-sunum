"use client"
import React, { useState } from "react";
import { FaLeaf, FaRecycle, FaWind, FaWater } from "react-icons/fa"; // FontAwesome'den ikonlar
import { useFormik } from 'formik';
import { useRouter } from "next/navigation";

function CBAMForm() {
  const router = useRouter();
  const [answers, setAnswers] = useState({
    materials: "Demir cevheri: 0.5 ton CO2/ton, ferro krom: 0.3 ton CO2/ton, ferro manganez: 0.2 ton CO2/ton.",
    energy: "Yıllık 20 GWh enerji tüketiyoruz. %60 yenilenebilir enerji, %30 doğal gaz, %10 kömür.",
    carbonMonitoring: "Hesaplama tabanlı izleme kullanıyoruz ve yıllık 650 ton CO2 emisyon raporlanmaktadır.",
    ccsCapacity: "Yıllık 200 ton CO2 karbon yakalanmakta ve depolanmaktadır.",
    transportEmissions: "Deniz taşımacılığı sırasında 50 ton CO2 emisyonu oluştu.",
    recycledMaterials: "Geri dönüştürülmüş çelik hurdası üretimin %25'ini oluşturmaktadır.",
    energyEfficiency: "Atık ısı geri kazanım sistemleri ile %15 enerji tasarrufu sağlanmıştır.",
    productionCapacity: "Yıllık 10.000 ton üretim yapılmakta ve üretimden kaynaklanan doğrudan emisyonlar 500 ton CO2'dir.",
  });

  const handleChange = (e) => {
    setAnswers({
      ...answers,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = () => {
    console.log(answers)
    router.push("/values")
  }

  return (
    <div className="w-full bg-gradient-to-br from-green-800 via-blue-900 to-gray-900 min-h-screen text-white p-6 flex flex-col items-center justify-center">
      <div className="absolute top-0 left-0 p-4 text-3xl font-bold">
        CARBONETZ
      </div>
      
      <h1 className="text-4xl font-bold mb-8">CBAM Mevzuatına Göre Bilgiler</h1>

      <div className="bg-white p-8 rounded-xl shadow-lg w-full max-w-3xl space-y-6 text-black">
        
        {/* Soru 1 */}
        <div>
          <label className="block text-lg font-semibold mb-1">1. Üretimde kullanılan hammaddelerin karbon ayak izi hesaplanmış mı?</label>
          <input
            type="text"
            name="materials"
            value={answers.materials}
            onChange={handleChange}
            className="w-full p-3 rounded-lg border border-gray-300 shadow-sm focus:ring-2 focus:ring-green-500 mb-2"
          />
          <div className="bg-gray-100 p-4 rounded-lg shadow-inner">
            <h3 className="font-semibold text-lg text-green-700 mb-2">CBAM Mevzuat Referansı:</h3>
            <p><strong>Doküman:</strong> CBAM Directive, Article 10</p>
            <a href="#" className="text-blue-500 hover:underline">CBAM Directive Text</a>
            <p className="mt-2"><strong>Orijinal Metin:</strong><br />
              "The production capacity of an importer, especially for goods listed in Annex I, shall be reported along with export data to ensure accurate CBAM calculation and compliance."
            </p>
            <p className="mt-2"><strong>Türkçe Çeviri:</strong><br />
              "Bir ithalatçının üretim kapasitesi, özellikle Ek I’de listelenen mallar için, CBAM hesaplamasının ve uyumluluğun sağlanması amacıyla ihracat verileriyle birlikte raporlanmalıdır."
            </p>
          </div>
        </div>

        {/* Soru 2 */}
        <div>
          <label className="block text-lg font-semibold mb-1">2. Yıllık enerji tüketimi ve kullanılan enerji kaynaklarının oranı nedir?</label>
          <input
            type="text"
            name="energy"
            value={answers.energy}
            onChange={handleChange}
            className="w-full p-3 rounded-lg border border-gray-300 shadow-sm focus:ring-2 focus:ring-green-500 mb-2"
          />
          <div className="bg-gray-100 p-4 rounded-lg shadow-inner">
            <h3 className="font-semibold text-lg text-green-700 mb-2">CBAM Mevzuat Referansı:</h3>
            <p><strong>Doküman:</strong> CBAM Directive, Article 12</p>
            <a href="#" className="text-blue-500 hover:underline">CBAM Directive Text</a>
            <p className="mt-2"><strong>Orijinal Metin:</strong><br />
              "The importer must disclose the annual energy consumption and the share of renewable energy sources for compliance purposes."
            </p>
            <p className="mt-2"><strong>Türkçe Çeviri:</strong><br />
              "İthalatçı, uyumluluk amacıyla yıllık enerji tüketimini ve yenilenebilir enerji kaynaklarının oranını açıklamalıdır."
            </p>
          </div>
        </div>

        {/* Soru 3 */}
        <div>
          <label className="block text-lg font-semibold mb-1">3. Karbon emisyonlarınızı izlerken hangi sistem ve yöntemleri kullanıyorsunuz?</label>
          <input
            type="text"
            name="carbonMonitoring"
            value={answers.carbonMonitoring}
            onChange={handleChange}
            className="w-full p-3 rounded-lg border border-gray-300 shadow-sm focus:ring-2 focus:ring-green-500 mb-2"
          />
          <div className="bg-gray-100 p-4 rounded-lg shadow-inner">
            <h3 className="font-semibold text-lg text-green-700 mb-2">CBAM Mevzuat Referansı:</h3>
            <p><strong>Doküman:</strong> CBAM Directive, Article 15</p>
            <a href="#" className="text-blue-500 hover:underline">CBAM Directive Text</a>
            <p className="mt-2"><strong>Orijinal Metin:</strong><br />
              "Emissions monitoring must adhere to the standards set in Annex III of the CBAM directive."
            </p>
            <p className="mt-2"><strong>Türkçe Çeviri:</strong><br />
              "Emisyon izleme, CBAM yönergesinin Ek III’te belirlenen standartlara uygun olmalıdır."
            </p>
          </div>
        </div>

        {/* Soru 4 */}
        <div>
          <label className="block text-lg font-semibold mb-1">4. Karbon yakalama sisteminizin kapasitesi nedir?</label>
          <input
            type="text"
            name="ccsCapacity"
            value={answers.ccsCapacity}
            onChange={handleChange}
            className="w-full p-3 rounded-lg border border-gray-300 shadow-sm focus:ring-2 focus:ring-green-500 mb-2"
          />
          <div className="bg-gray-100 p-4 rounded-lg shadow-inner">
            <h3 className="font-semibold text-lg text-green-700 mb-2">CBAM Mevzuat Referansı:</h3>
            <p><strong>Doküman:</strong> CBAM Directive, Article 18</p>
            <a href="#" className="text-blue-500 hover:underline">CBAM Directive Text</a>
            <p className="mt-2"><strong>Orijinal Metin:</strong><br />
              "Carbon capture and storage (CCS) facilities must have their capacity and performance data reported annually."
            </p>
            <p className="mt-2"><strong>Türkçe Çeviri:</strong><br />
              "Karbon yakalama ve depolama (CCS) tesisleri, kapasite ve performans verilerini yıllık olarak raporlamalıdır."
            </p>
          </div>
        </div>

        {/* Soru 5 */}
        <div>
          <label className="block text-lg font-semibold mb-1">5. Nakliye sırasında oluşan karbon emisyonlarını nasıl hesaplıyorsunuz?</label>
          <input
            type="text"
            name="transportEmissions"
            value={answers.transportEmissions}
            onChange={handleChange}
            className="w-full p-3 rounded-lg border border-gray-300 shadow-sm focus:ring-2 focus:ring-green-500 mb-2"
          />
          <div className="bg-gray-100 p-4 rounded-lg shadow-inner">
            <h3 className="font-semibold text-lg text-green-700 mb-2">CBAM Mevzuat Referansı:</h3>
            <p><strong>Doküman:</strong> CBAM Directive, Article 20</p>
            <a href="#" className="text-blue-500 hover:underline">CBAM Directive Text</a>
            <p className="mt-2"><strong>Orijinal Metin:</strong><br />
              "Transport emissions must be tracked and calculated based on fuel consumption and distance covered."
            </p>
            <p className="mt-2"><strong>Türkçe Çeviri:</strong><br />
              "Nakliye emisyonları, yakıt tüketimi ve kat edilen mesafeye dayalı olarak izlenmeli ve hesaplanmalıdır."
            </p>
          </div>
        </div>

        {/* Soru 6 */}
        <div>
          <label className="block text-lg font-semibold mb-1">6. Geri dönüştürülmüş malzeme kullanımınız nedir?</label>
          <input
            type="text"
            name="recycledMaterials"
            value={answers.recycledMaterials}
            onChange={handleChange}
            className="w-full p-3 rounded-lg border border-gray-300 shadow-sm focus:ring-2 focus:ring-green-500 mb-2"
          />
          <div className="bg-gray-100 p-4 rounded-lg shadow-inner">
            <h3 className="font-semibold text-lg text-green-700 mb-2">CBAM Mevzuat Referansı:</h3>
            <p><strong>Doküman:</strong> CBAM Directive, Article 22</p>
            <a href="#" className="text-blue-500 hover:underline">CBAM Directive Text</a>
            <p className="mt-2"><strong>Orijinal Metin:</strong><br />
              "Recycled material usage must be documented and reported in line with CBAM guidelines."
            </p>
            <p className="mt-2"><strong>Türkçe Çeviri:</strong><br />
              "Geri dönüştürülmüş malzeme kullanımı, CBAM yönergelerine uygun olarak belgelenmeli ve raporlanmalıdır."
            </p>
          </div>
        </div>

        {/* Soru 7 */}
        <div>
          <label className="block text-lg font-semibold mb-1">7. Enerji verimliliği uygulamalarınızdan elde edilen verimliliği nasıl ölçüyorsunuz?</label>
          <input
            type="text"
            name="energyEfficiency"
            value={answers.energyEfficiency}
            onChange={handleChange}
            className="w-full p-3 rounded-lg border border-gray-300 shadow-sm focus:ring-2 focus:ring-green-500 mb-2"
          />
          <div className="bg-gray-100 p-4 rounded-lg shadow-inner">
            <h3 className="font-semibold text-lg text-green-700 mb-2">CBAM Mevzuat Referansı:</h3>
            <p><strong>Doküman:</strong> CBAM Directive, Article 24</p>
            <a href="#" className="text-blue-500 hover:underline">CBAM Directive Text</a>
            <p className="mt-2"><strong>Orijinal Metin:</strong><br />
              "Energy efficiency gains must be measured and verified annually in accordance with CBAM standards."
            </p>
            <p className="mt-2"><strong>Türkçe Çeviri:</strong><br />
              "Enerji verimliliği kazanımları, CBAM standartlarına uygun olarak yıllık ölçülmeli ve doğrulanmalıdır."
            </p>
          </div>
        </div>

        {/* Soru 8 */}
        <div>
          <label className="block text-lg font-semibold mb-1">8. Yıllık üretim kapasiteniz nedir ve bu kapasiteyle ilişkili karbon emisyonlarınız ne kadar?</label>
          <input
            type="text"
            name="productionCapacity"
            value={answers.productionCapacity}
            onChange={handleChange}
            className="w-full p-3 rounded-lg border border-gray-300 shadow-sm focus:ring-2 focus:ring-green-500 mb-2"
          />
          <div className="bg-gray-100 p-4 rounded-lg shadow-inner">
            <h3 className="font-semibold text-lg text-green-700 mb-2">CBAM Mevzuat Referansı:</h3>
            <p><strong>Doküman:</strong> CBAM Directive, Article 26</p>
            <a href="#" className="text-blue-500 hover:underline">CBAM Directive Text</a>
            <p className="mt-2"><strong>Orijinal Metin:</strong><br />
              "Production capacity data must be reported alongside associated emissions data for compliance."
            </p>
            <p className="mt-2"><strong>Türkçe Çeviri:</strong><br />
              "Üretim kapasitesi verileri, uyumluluk için ilgili emisyon verileriyle birlikte raporlanmalıdır."
            </p>
          </div>
        </div>

        {/* Submit Butonu */}
        <div onClick={() => handleSubmit()} className="w-full cursor-pointer text-center bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded-lg mt-8">
          SKDM Hesaplama Girdilerini Oluştur
        </div>
      </div>
    </div>
  );
}

export default CBAMForm;
