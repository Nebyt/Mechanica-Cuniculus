import React, {useState} from 'react';
import InputField from './InputField';
const bip39 = require('../bip39.min');

const TopPart = () => {
  const [seedPhraseValue, setSeedPhraseValue] = useState('');
  const [checkedAndValid, setCheckedAndValid] = useState(false);

  const checkSeedPhrase = () => {
    const checkResult = bip39.validateMnemonic(`${seedPhraseValue}`);
    if(checkResult === true){
      setCheckedAndValid(true);
    }
  };

  const clearSeedPhraseInput = () => {
    setSeedPhraseValue('');
    setCheckedAndValid(false);
  };

  return (
    <>
      <div className="grid justify-items-center py-5 px-5" key="topPartGrid">
        <div className="block p-6 min-w-full rounded-lg border shadow-md bg-gray-800 border-gray-700" key="topPartBlock">
          <InputField
            inputLabel="Seed phrase"
            currenFieldValue={seedPhraseValue}
            isReadOnly={checkedAndValid}
            onChange={(event) => { setSeedPhraseValue(event.target.value) }}/>
          <div className="grid grid-cols-3 grid-rows-1">
            <label className="text-green-600 font-extrabold">
              {checkedAndValid
                ? "✔  The seed phrase is valid"
                : ""
              }
            </label>
            <button
              type="button"
              className=
                "
                text-white
                font-medium
                rounded-lg
                text-sm
                px-5
                py-2.5
                mx-40
                text-center
                bg-green-800
                hover:bg-green-700
                focus:ring-green-600
                disabled:opacity-50
                "
              disabled={checkedAndValid}
              onClick={checkSeedPhrase}
            >
              Check
            </button>
            <button
              type="button"
              className=
                "
                text-white
                font-medium
                rounded-lg
                text-sm
                px-5
                py-2.5
                mx-40
                text-center
                bg-red-800
                hover:bg-red-700
                focus:ring-red-600
                disabled:opacity-50
                "
              disabled={!checkedAndValid}
              onClick={clearSeedPhraseInput}
            >
              Clear seed phrase
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default TopPart;