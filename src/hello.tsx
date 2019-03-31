//import * as React from 'react'
import React, {useState, useEffect} from 'react'
import Select from 'react-select';
import {ValueType, OptionsType} from "react-select/lib/types";

type OptionType = {
  value: string,
  label: string
}

const loadedOptions: OptionsType<OptionType> = [
  {value: 'chocolate', label: 'Chocolate'},
  {value: 'strawberry', label: 'Strawberry'},
  {value: 'vanilla', label: 'Vanilla'}
];

export default function Hello() {
  const [options, setOptions] = useState<OptionsType<OptionType>>([])
  const [selectedOption, setSelectedOption] = useState<ValueType<OptionType>>(null)
  const [isLoading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setOptions(loadedOptions)
      setLoading(false)
    }, 3000)
  }, []);

  return <div>
    <h1>Hello React Select</h1>
    <Select value={selectedOption} onChange={setSelectedOption} options={options}
            isLoading={isLoading}
            loadingMessage={() => 'loading ...'}/>
    <div>{JSON.stringify(selectedOption)}</div>
  </div>
};
