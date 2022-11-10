import React, {useState} from 'react';
import InputField from './InputField';

const TopPart = () => {
  const [currentFieldValue, setFieldValue] = useState([
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
  ]);

  const changeFieldValue = (valueIndex, event) => {
    currentFieldValue[valueIndex] = event.target.value;
    setFieldValue(currentFieldValue);
    console.log(JSON.stringify(currentFieldValue));
  };

  const getFieldValue = (valueIndex) => {
    return currentFieldValue[valueIndex];
  }

  const getInputFields = () => {
    const resultArray = [];
    for (let i = 0; i < 15; i++) {
        resultArray.push(
          <InputField
            inputIndex={i}
            currenFieldValue={(valueIndex) => getFieldValue(valueIndex)}
            onChange={(ev) => changeFieldValue(i, ev)}/>
        );
    }
    return resultArray;
  };

  return (
    <>
      <div className="grid justify-items-center py-5 px-5" key="topPartGrid">
        <div className="block p-6 min-w-full rounded-lg border shadow-md bg-gray-800 border-gray-700" key="topPartBlock">
          <div className="grid grid-cols-5 p-6" key="topPartInputs">
            {getInputFields()}
          </div>
        </div>
      </div>
    </>
  );
}

export default TopPart;