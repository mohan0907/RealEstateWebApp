

import React from 'react';
import { useTranslation } from 'react-i18next';

const LanguageChange = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
  };

  return (
    <div>
      <button className="bg-gray-900 cursor-pointer font-manrope font-semibold py-2.5 rounded-[10px] text-base text-center text-white-A700 w-full" onClick={() => changeLanguage('en')}>English</button>
      <button className="bg-gray-900 cursor-pointer font-manrope font-semibold py-2.5 rounded-[10px] text-base text-center text-white-A700 w-full" onClick={() => changeLanguage('hi')}>Hindi</button>
    </div>
  );
};

export { LanguageChange };
