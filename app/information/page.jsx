"use client";
import React, { useState, useEffect, useRef } from "react";
import { FaLeaf, FaRecycle, FaWind, FaWater } from "react-icons/fa";
import { useRouter } from "next/navigation";
import Typed from 'typed.js';


function App() {
  const router = useRouter();

  const [isLoading, setIsLoading] = useState(true);

  const [answers, setAnswers] = useState({
    sector: "Çelik üretimi sektöründe faaliyet gösteriyoruz.",
    products: "Yarı mamul çelik ürünleri ve metal alaşımları üretmekteyiz.",
    productionLocation: "Türkiye'de üretim yapıyoruz ve AB'ye ihracat gerçekleştiriyoruz.",
    exportCountries: "Ürünlerimiz AB ülkelerine ihraç edilmektedir.",
    energySources: "Elektrik, doğal gaz ve kömür kullanıyoruz. Enerji kaynaklarımızın bir kısmı yenilenebilir enerji.",
    carbonMonitoring: "Hesaplama tabanlı yöntemler kullanıyoruz.",
    ccsSystem: "Evet, karbon yakalama sistemi mevcut.",
    emissionReports: "Geçen yıl karbon emisyonlarımız raporlandı.",
    rawMaterials: "Demir cevheri, ferro krom ve ferro manganez kullanıyoruz.",
    transportMethod: "Ürünlerimizi deniz yoluyla taşıyoruz.",
    energyEfficiency: "Evet, enerji verimliliği için çeşitli uygulamalarımız var.",
    productionCapacity: "Yıllık 10.000 ton üretim yapıyoruz.",
    recycledMaterials: "Evet, geri dönüştürülmüş çelik hurdası kullanıyoruz."
  });

  const dataArr = [
    { label: "1. Firmanız hangi sektörde faaliyet göstermektedir?", icon: FaLeaf, name: "sector", value: answers.sector },
    { label: "2. Firmanızın ürettiği veya ticaretini yaptığı ürün grupları nelerdir?", icon: FaRecycle, name: "products", value: answers.products },
    { label: "3. Firmanızın üretim yaptığı yerler nerelerdir?", icon: FaWind, name: "productionLocation", value: answers.productionLocation },
    { label: "4. Ürünleriniz hangi ülkelere ihraç edilmektedir?", icon: FaWater, name: "exportCountries", value: answers.exportCountries },
    { label: "5. Üretimde kullanılan enerji kaynakları nelerdir?", icon: FaLeaf, name: "energySources", value: answers.energySources },
    { label: "6. Karbon emisyonlarını izlemek ve raporlamak için hangi yöntemleri kullanıyorsunuz?", icon: FaRecycle, name: "carbonMonitoring", value: answers.carbonMonitoring },
    { label: "7. Üretim tesisinizde karbon yakalama ve depolama (CCS) sistemleri mevcut mu?", icon: FaWater, name: "ccsSystem", value: answers.ccsSystem },
    { label: "8. Firmanızın geçmiş yıllara ait karbon emisyon raporları var mı?", icon: FaLeaf, name: "emissionReports", value: answers.emissionReports },
    { label: "9. Üretimde kullandığınız hammaddeler nelerdir?", icon: FaRecycle, name: "rawMaterials", value: answers.rawMaterials },
    { label: "10. Ürünlerinizi hangi taşımacılık yöntemi ile sevk ediyorsunuz?", icon: FaWind, name: "transportMethod", value: answers.transportMethod },
    { label: "11. Firmanızda enerji verimliliğini artırmaya yönelik uygulamalar var mı?", icon: FaWater, name: "energyEfficiency", value: answers.energyEfficiency },
    { label: "12. Firmanızın yıllık üretim kapasitesi nedir?", icon: FaLeaf, name: "productionCapacity", value: answers.productionCapacity },
    { label: "13. Üretim süreçlerinde geri dönüştürülmüş malzeme kullanıyor musunuz?", icon: FaRecycle, name: "recycledMaterials", value: answers.recycledMaterials }
  ]

  const handleChange = (e) => {
    setAnswers({
      ...answers,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = () => {
    console.log(answers)

    dispatch(page2Request(values.companyDesc))
      .unwrap()
      .then(res => {
        router.push("/information")
      })

    router.push("/data")
  }

  const [currentIndex, setCurrentIndex] = useState(0);
  const [typedText, setTypedText] = useState("");
  const [isButtonShow, setIsButtonShow] = useState(false);

  const typedElementRef = useRef(null);


  useEffect(() => {
    if (currentIndex < dataArr.length) {
      const labelWithIcon = dataArr[currentIndex].label;

      const options = {
        strings: [labelWithIcon],
        typeSpeed: 35,
        backSpeed: 25,
        onComplete: () => {
          setCurrentIndex((prevIndex) => prevIndex + 1);
          setIsButtonShow(currentIndex == (dataArr.length - 1) ? true : false)
        },
      };

      const typed = new Typed(typedElementRef.current, options);

      return () => {
        typed.destroy();
      };
    }
  }, [currentIndex]);


  return (
    <div className="w-full relative min-h-screen bg-gradient-to-br from-green-800 via-blue-900 to-gray-900 text-white p-4 flex flex-col items-center font-inter">
      {/* Carbonetz Markası */}
      <div className="absolute top-0 left-0 p-4 text-4xl font-bold text-white">
        CARBONETZ
      </div>

      {/* Yeşil Dönüşüm İkonları Arka Planı */}
      <FaLeaf className="absolute top-20 left-10 text-green-700 opacity-20 text-9xl" />
      <FaRecycle className="absolute bottom-20 right-10 text-blue-500 opacity-20 text-9xl" />
      <FaWater className="absolute top-40 right-20 text-green-400 opacity-10 text-8xl" />

      {/* Ana İçerik */}
      <div className="relative bg-white p-8 rounded-3xl shadow-2xl text-black w-full max-w-4xl z-10">
        <h1 className="text-3xl font-semibold mb-6 text-center text-gray-900">
          Firmanızı Tanıyalım
        </h1>

        <form className="space-y-4">

          {/* {displayedItems.map((item, index) => (
            <div key={index} className="flex flex-col">
              <label className="block text-lg font-medium text-gray-700 mb-1 flex items-center">
                <item.icon className="text-green-500 mr-2" />
                {item.label}
              </label>
              <input
                type="text"
                name={item.name}
                value={item.value}
                onChange={handleChange}
                className="w-full p-3 rounded-lg border border-gray-300 shadow-sm focus:ring-2 focus:ring-green-500"
              />
            </div>
          ))} */}



          <div>
            {dataArr.slice(0, currentIndex).map((item, index) => (
              <div key={index} className="flex flex-col mb-4">
                <label className="text-lg font-medium text-gray-700 mb-1 flex items-center">
                  <item.icon className="text-green-500 mr-2" />
                  {item.label}
                </label>
                <input
                  type="text"
                  name={item.name}
                  value={item.value}
                  onChange={(e) => handleChange(e, index)}
                  className="w-full p-3 rounded-lg border border-gray-300 shadow-sm focus:ring-2 focus:ring-green-500"
                />
              </div>
            ))}

            {/* Typed.js container */}
            <div className="typed-output flex flex-row items-center place-items-center justify-left">
              {currentIndex < dataArr.length && (
                <>
                  {/* İkonu bir değişkende tutarak kullanıyoruz */}
                  {React.createElement(dataArr[currentIndex].icon, { className: "text-green-500 mr-2 mb-1 text-lg" })}
                  <span ref={typedElementRef} className="text-lg font-medium text-gray-700 mb-1 flex items-center" />

                </>

              )}

            </div>
          </div>

          {
            isButtonShow &&
            <div onClick={() => handleSubmit()} className="w-full text-center cursor-pointer bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-lg mt-8 transition duration-300 transform hover:scale-105">
              SKDM Sürecini Başlat
            </div>
          }

        </form>
      </div>
    </div>
  );
}

export default App;
