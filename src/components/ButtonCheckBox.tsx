import classNames from 'classnames'

interface ButtonCheckBoxProps {
	arrayValue: string,
	type: string,
	key: string,
	arrayIndex: number,
	index: number,
	array: any,
	setArray: Function
}

export function ButtonCheckBox({ arrayValue, type, key, arrayIndex, index, array, setArray }: ButtonCheckBoxProps) {
	let physicalDamage = type == "physical" && arrayValue == "X"
	let psychological = type == "psychological" && arrayValue == "X"

	return (
		<>
			<button type="button" key={key + 97} className={classNames("flex justify-center items-center w-6 h-6 rounded pointer", {
				'bg-gray-400 border-2 border-gray-200 hover:bg-gray-600 hover:border-gray-400 transition': arrayValue == "0",
				'bg-red-400 border-2 border-red-400 hover:bg-red-500 hover:border-red-500 transition': physicalDamage,
				'bg-purple-400 border-2 border-purple-400 hover:bg-purple-500 hover:border-purple-500 transition': psychological

				})}

				onClick={((event) => {
					let copyArray = [...array]
					if (arrayValue == "X") {
						copyArray[arrayIndex][index] = "0"
						setArray(copyArray)
						return
					}
					copyArray[arrayIndex][index] = "X"
					setArray(copyArray)
				})}
			>
				{arrayValue}
			</button>
		</>
	)
}
