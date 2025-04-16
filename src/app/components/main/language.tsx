import { LanguageEnum, setLanguage } from "@/redux/features/languages/language-slice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function LanguageSwitcher() {
  const [isOpen, setIsOpen] = useState(false);
  const [currentLanguage, setCurrentLanguage] = useState<LanguageEnum | null>(null); 
  const language = useAppSelector((state) => state.language.value);
  const dispatch = useAppDispatch();

  const languages = [
    { code: LanguageEnum.US, flag: "🇨🇦" },
    { code: LanguageEnum.FR, flag: "/images/quebec.png" },
  ];

  const toggleMenu = () => setIsOpen(!isOpen);

  const changeLanguage = (code: LanguageEnum) => {
    dispatch(setLanguage(code));
    setIsOpen(false);
  };

  // Sync client-side language after the component has mounted
  useEffect(() => {
    setCurrentLanguage(language);
  }, [language]);

  return (
    <div className="relative ">
      <button
        onClick={toggleMenu}
        type="button"
        className="inline-flex items-center gap-x-2 text-lg font-semibold text-gray-900 py-3 px-5 rounded-lg "
        aria-expanded={isOpen ? "true" : "false"}
      >
        {/* Display the current flag */}
        <span>{currentLanguage ===LanguageEnum.FR  ? <Image src={languages[1].flag} alt="img" width={28} height={28}/> :  languages[0].flag}</span>
        <svg
          className="w-3.5 h-3.5 ms-2 text-black lg:text-white"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 10 6"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="m1 1 4 4 4-4"
          />
        </svg>
      </button>

      {isOpen && (
        <div className="absolute z-50 left-1/2   mt-5 flex -translate-x-1/2 px-4">
          <div className="overflow-hidden relative  rounded-md bg-background text-sm ring-1 shadow-lg ring-gray-900/5">
            <div className="p-4">
              {languages.map((lang) => (
                <div
                  key={lang.code}
                  className="group relative flex gap-x-6 rounded-lg p-4 hover:bg-gray-50"
                  onClick={() => changeLanguage(lang.code)}
                >
                  <div className="text-3xl">
                    <span className="text-gray-600 group-hover:text-indigo-600">
                      {
                        lang.flag.startsWith('/images') ? <Image src={lang.flag} alt="img" width={50} height={50}/> :  lang.flag

                      }
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
