import { ChangeEvent } from 'react'

interface InputFormProps {
	typeInput: string,
	placeholderInput: string,
	setValue: any,
	isUpdateCharacter?: boolean,
	dataDefaultValue?: any
}

export function InputForm(props: InputFormProps) {
	
	function addDataValue(event: any, value: any, defaultValue: any) {
		if ( props.isUpdateCharacter ) {
			event.target.value == "" ? value(defaultValue) : value(event.target.value)
		} else {
			value(event.target.value)
		}
	}

	return (
		<>
			<h2 className="block bt-2">{props.placeholderInput}</h2>
			<input 
				className="bg-gray-900 block rounded w-[97%] px-5 h-14 mb-2"
				type={props.typeInput}
				key={props.setValue}
				placeholder={props.placeholderInput}
				onChange={(event) => addDataValue(event, props.setValue, props.dataDefaultValue)}
			/>
		</>
	)
}