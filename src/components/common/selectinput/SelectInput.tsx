import { useRef } from "react";

interface ISelectInput {
  className?: string;
  name: string;
  multiple?: boolean;
  arr: Array<any>;
  dadsCoins?: boolean;
  handleChange: (e: any) => void;
}
const SelectInput = ({ className = "", name, arr, dadsCoins, multiple, handleChange }: ISelectInput) => {
  return (
    <select
      className={`${className} w-full min-w-[150px] px-[15px] min-h-[38px] bg-[#EBE1FF] text-[#120360] text-xl font-light rounded-[12px] shadow-lg border-none relative`}
      name={name}
      multiple={multiple}
      onChange={handleChange}
    >
      {arr.map((item, index) => {
        return (
          <option key={index} className={`cursor-pointer`} value={item.value}>
            {item.name}
          </option>
        );
      })}
    </select>
  );
};
export default SelectInput;
