import { ChangeEvent } from 'react'

interface InputFormProps {
	typeInput: string,
	placeholderInput: string,
	setValue: any
}

export function InputForm(props: InputFormProps) {
	
	return (
		<>
			<h2 className="block bt-2">{props.placeholderInput}</h2>
			<input 
				className="bg-gray-900 block rounded w-[97%] px-5 h-14 mb-2"
				type={props.typeInput}
				key={props.setValue}
				placeholder={props.placeholderInput}
				onChange={(event) => props.setValue(event.target.value)}
			/>
		</>
	)
}