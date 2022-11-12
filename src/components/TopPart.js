import React, {useState} from 'react';
import InputField from './InputField';
const bip39 = require('../bip39.min');

const TopPart = () => {
  const [seedPhraseValue, setSeedPhraseValue] = useState('');

  const checkSeedPhrase = () => {
    const checkResult = bip39.validateMnemonic(`${seedPhraseValue}`);
  };

  return (
    <>
      <div className="grid justify-items-center py-5 px-5" key="topPartGrid">
        <div className="block p-6 min-w-full rounded-lg border shadow-md bg-gray-800 border-gray-700" key="topPartBlock">
          <InputField
            inputLabel="Seed phrase"
            currenFieldValue={seedPhraseValue}
            onChange={(event) => { setSeedPhraseValue(event.target.value) }}/>
          <div className="grid justify-items-center">
            <button
              type="button"
              className="text-white font-medium rounded-lg text-sm sm:w-auto px-5 py-2.5 text-center bg-green-800 hover:bg-green-700 focus:ring-green-600"
              onClick={checkSeedPhrase}
            >
              Check
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default TopPart;