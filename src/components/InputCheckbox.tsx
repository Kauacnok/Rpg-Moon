import { Separator } from './Separator'
import { ButtonCheckBox } from './ButtonCheckBox'

interface InputCheckboxProps {
	type: string,
	array: any,
	setArray: Function
}

export function InputCheckbox({ type, array, setArray }: InputCheckboxProps) {
	return (
		<div className="bg-gray-900 rounded py-4 rounded w-[97%] px-5 mb-2 flex flex-row flex-wrap gap-[4px] justify-start items-center">
			<span>(0,1)</span>
			{
				array[0].map((subArray: any, index: number) => {
					return (
						<ButtonCheckBox setArray={setArray} array={array} arrayValue={subArray} type={type} key={`${index + 3}`} arrayIndex={0} index={index} />
					)
				})
			}
			<Separator />
			<span>(2,3,4)</span>
			{
				array[1].map((subArray: any, index: number) => {
					return (
						<ButtonCheckBox setArray={setArray} array={array} arrayValue={subArray} type={type} key={`${index + 3}`} arrayIndex={1} index={index} />
					)
				})
			}
			<Separator />
			<span>(5,6)</span>
			{
				array[2].map((subArray: any, index: number) => {
					return (
						<ButtonCheckBox setArray={setArray} array={array} arrayValue={subArray} type={type} key={`${index + 9}`} arrayIndex={2} index={index} />
					)
				})
			}
			<Separator />
			<span>(7,8)</span>
			{
				array[3].map((subArray: any, index: number) => {
					return (
						<ButtonCheckBox setArray={setArray} array={array} arrayValue={subArray} type={type} key={`${index + 21}`} arrayIndex={3} index={index} />
					)
				})
			}
			<Separator />
			<span>(9+) X</span>
		</div>
	)
}