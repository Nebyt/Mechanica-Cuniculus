import React, {useState} from 'react';
import InputField from './InputField';

const TopPart = () => {
  const [seedPhraseValue, setSeedPhraseValue] = useState('');

  return (
    <>
      <div className="grid justify-items-center py-5 px-5" key="topPartGrid">
        <div className="block p-6 min-w-full rounded-lg border shadow-md bg-gray-800 border-gray-700" key="topPartBlock">
          <InputField
            inputLabel="Seed phrase"
            currenFieldValue={seedPhraseValue}
            onChange={(event) => { setSeedPhraseValue(event.target.value) }}/>
        </div>
      </div>
    </>
  );
}

export default TopPart;