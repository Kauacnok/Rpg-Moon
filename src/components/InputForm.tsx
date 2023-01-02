import { SyntheticEvent } from 'react'

interface InputFormProps {
	typeInput: string,
	placeholderInput: string,
	setValue: Function,
	valueOnState?: string | number | undefined,
	isUpdateCharacter?: boolean,
	dataDefaultValue?: string | number | undefined
}

export function InputForm(props: InputFormProps) {
	
	function addDataValue(event: SyntheticEvent, value: Function, defaultValue: string | number | undefined) {
		let target = event.target as HTMLInputElement
		if ( props.isUpdateCharacter ) {
			target.value == "" ? value(defaultValue) : value(target.value)
		} else {
			value(target.value)
		}
	}

	return (
		<>
			<h2 className="block bt-2">{props.placeholderInput}</h2>
			<input 
				className="bg-gray-900 block rounded w-[97%] px-5 h-14 mb-2"
				type={props.typeInput}
				key={props.placeholderInput}
				placeholder={props.placeholderInput}
				value={props.valueOnState}
				onChange={(event) => addDataValue(event, props.setValue, props.dataDefaultValue)}
			/>
		</>
	)
}