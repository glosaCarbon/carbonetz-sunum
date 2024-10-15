"use client"
import React, { useState, useEffect } from "react";
import { AiOutlineSend } from "react-icons/ai";
import { useFormik } from 'formik';
import { FaLeaf, FaRecycle, FaGlobe } from "react-icons/fa"; // Yeşil dönüşüm ve sürdürülebilirlik ikonları
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";
import { page1Request } from "../store/features/commonSlice";
import Chat from "../components/content/Chat";
import DivTag from "../components/content/DivTag";


function ChatPrompt() {
  const router = useRouter();
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      companyDesc: "Bir çelik üreticisinin AB CBAM (SKDM) kapsamında değerlendirilmesi için firma künye bilgilerini oluşturmak istiyorum. Bu bilgilerin AB CBAM mevzuatlarına göre firmanın hangi sektör, faaliyet alanı ve üretim yeriyle CBAM kapsamına girip girmediğini anlamak için kullanılacak. CBAM (Carbon Border Adjustment Mechanism) düzenlemelerine uygun olacak şekilde firmanın künye bilgilerini toplayacak soru setini oluşturur musun? Her soru, firmanın üretim prosesleri, enerji kullanımı, karbon ayak izi gibi kritik bilgileri içermelidir. Bu soruların mevzuata uygun olduğundan ve cevapların CBAM değerlendirmesinde kullanılabileceğinden emin olmak istiyorum. Lütfen CBAM (SKDM) mevzuatlarını göz önünde bulundurarak oluştur."
    },
    onSubmit: values => {
      dispatch(page1Request(values.companyDesc))
        .unwrap()
        .then(res => {
          router.push("/information")
        })


    },
  });

  return (
    <div className="relative w-full min-h-screen bg-gradient-to-br from-green-800 via-blue-900 to-gray-900 text-white p-4 flex justify-center items-center font-inter">
      {/* Carbonetz Markası */}
      <div className="absolute top-0 left-0 p-4 text-4xl font-bold text-white">
        CARBONETZ
      </div>

      {/* Yeşil Dönüşüm İkonları Arka Planı */}
      <FaLeaf className="absolute top-20 left-10 text-green-700 opacity-20 text-9xl" />
      <FaRecycle className="absolute bottom-20 right-10 text-blue-500 opacity-20 text-9xl" />
      <FaGlobe className="absolute top-40 right-20 text-green-400 opacity-10 text-8xl" />

      {/* Chat Kutucuğu Arka Planı */}
      <div className="relative bg-white p-8 rounded-3xl shadow-2xl text-black w-7/12 z-10 transform transition duration-300"> {/* hover:scale-105 */}
        <div className="absolute top-0 left-0 w-full h-full bg-opacity-50 bg-gradient-to-r from-transparent to-transparent rounded-3xl pointer-events-none"></div>

        {/* Chat Kutu İkonları */}
        {/* <div className="absolute top-5 left-5 text-green-500 opacity-50">
          <FaLeaf className="text-6xl" />
        </div>
        <div className="absolute bottom-5 right-5 text-blue-400 opacity-50">
          <FaRecycle className="text-6xl" />
        </div> */}

        {/* <h1 className="text-3xl font-semibold mb-6 text-center text-gray-900 font-inter">
          Firmanızı Tanıyalım
        </h1> */}

        {/* <form onSubmit={formik.handleSubmit}>
          
          <textarea
            placeholder="Promptunuzu buraya girin..."
            value={formik.values.companyDesc}
            onChange={formik.handleChange}
            name="companyDesc"
            className="w-full p-4 border border-gray-300 rounded-lg bg-white text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-4 focus:ring-green-500 focus:border-transparent mb-4 h-40 resize-none shadow"
          />

          
          <button
            type="submit"
            className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-5 rounded-lg flex items-center justify-center transition duration-300 transform hover:scale-105">
            SKDM Soruları Oluştur
            <AiOutlineSend className="ml-3 text-2xl" />
          </button>

        </form> */}

        <div className="flex flex-col">
          <div className="flex w-full gap-2">

            <div className="w-7/12">
              <Chat />
            </div>
            <div className="w-5/12">
              <DivTag />
            </div>
          </div>

          <div className="w-full bg-green-700 my-2 rounded-md hover:bg-green-600 cursor-pointer text-white text-center font-semibold py-3">Hadi Başlayalım !</div>
        </div>

      </div>
    </div >
  );
}

export default ChatPrompt;
