"use client";

import axios from "axios";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { HashLoader } from "react-spinners";

const ImageSelector = () => {
  const [file, setFile] = useState();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [result, setResult] = useState();

  const router = useRouter();

  const handleSend = async () => {
    if (file != null) {
      const data = new FormData();
      data.append("image", file);
      setIsLoading(true);
      setResult(undefined);
      await axios
        .post("https://yolo.routewise.tech/pcb/defect", data, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        })
        .then((res) => {
          setResult(res.data.s3_url);
          data.delete("image");
        })
        .catch((err) => {
          console.error(err);
          alert("Bir hata oluştu. Lütfen tekrar deneyin.");
        })
        .finally(() => {
          setIsLoading(false);
        });
    }
  };

  console.log("result", result);

  return (
    <>
      <div className="flex text-white flex-col items-center justify-center w-1/2 mx-auto gap-10">
        <div className="w-full max-w-3xl mb-4">
          <button
            className="sm:hidden flex items-center text-gray-300 text-lg mb-4"
            onClick={() => router.push("/")}
          >
            <i className="fa-solid fa-chevron-left mr-2"></i> {/* Back icon */}
            Geri
          </button>
        </div>
        <h1 className="text-3xl sm:text-4xl font-bold mb-4 text-center">
          PCB Hata Ayıklama
        </h1>{" "}
        {/* Başlık responsive */}
        <p className="text-base sm:text-lg mb-8 text-center">
          Fotoğrafını yüklediğiniz PCB'nin hangi hatalara sahip olduğunu
          açıklar.
        </p>
        {file ? (
          <div className="flex flex-col gap-10">
            <img
              className="flex flex-col items-center justify-center w-full h-96 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600 object-contain p-2"
              src={result ? result : URL.createObjectURL(file)}
            />
            {result && (
              <button
                onClick={() => {
                  window.location.reload();
                }}
                className="w-full font-Montserrat font-semibold text-sm rounded-lg p-2 hover:text-white border-red-500 border-2 transition-colors duration-300 hover:bg-red-500"
              >
                Temizle
              </button>
            )}
            {isLoading ? (
              <HashLoader color="#2563EB" className="self-center" />
            ) : result ? (
              <div className="flex flex-col items-center bg-green-200 rounded-lg p-2 w-1/2 mx-auto">
                {/* <h1 className="font-semibold text-lg font-Montserrat first-letter:uppercase">

                  {result?.label}
                </h1>
                <h1 className="font-semibold text-lg font-Montserrat first-letter:uppercase">
                  {result?.score}
                </h1> */}
              </div>
            ) : (
              <div className="flex justify-between gap-4">
                <button
                  onClick={() => handleSend()}
                  className="w-1/2 font-Montserrat font-semibold text-sm rounded-lg p-2 hover:text-white border-green-500 border-2 transition-colors duration-300 hover:bg-green-500"
                >
                  Gönder
                </button>
                <button
                  onClick={() => setFile(undefined)}
                  className="w-1/2 font-Montserrat font-semibold text-sm rounded-lg p-2 hover:text-white border-red-500 border-2 transition-colors duration-300 hover:bg-red-500"
                >
                  Temizle
                </button>
              </div>
            )}
          </div>
        ) : (
          <>
            <label
              htmlFor="dropzone-file"
              className="flex bg-transparent hover:bg-gray-50/10 transition-colors duration-300 flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
            >
              <div className="flex flex-col items-center justify-center pt-5 pb-6">
                <svg
                  className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 16"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                  />
                </svg>
                <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                  <span className="font-semibold">Yüklemek için tıklayın</span>{" "}
                  veya buraya sürükleyin
                </p>
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  SVG, PNG, JPG or GIF (MAX. 800x400px)
                </p>
              </div>
              <input
                id="dropzone-file"
                type="file"
                className="hidden"
                accept="image/png, image/jpeg, image/jpg, image/gif"
                onChange={(e: any) => {
                  setFile(e.target.files[0]);
                }}
              />
            </label>
            {/* <h1 className="font-bold text-sm opacity-40 font-Montserrat">
              veya
            </h1>
            <button className="flex bg-transparent transition-colors duration-300 hover:bg-gray-50/10 flex-col font-Montserrat font-semibold text-sm items-center justify-center w-1/3 p-4 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
              Kamera Aç
            </button> */}
          </>
        )}
      </div>
    </>
  );
};

export default ImageSelector;
