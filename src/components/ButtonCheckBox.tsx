import classNames from 'classnames'
import { X, Circle } from 'phosphor-react'


interface ButtonCheckBoxProps {
	arrayValue: string,
	type: string,
	key: string,
	arrayIndex: number,
	index: number,
	array: any,
	setArray: Function,
	isInteractive: boolean
}

export function ButtonCheckBox({ arrayValue, type, key, arrayIndex, index, array, setArray, isInteractive }: ButtonCheckBoxProps) {
	let physicalDamage = type == "physical" && arrayValue == "X"
	let psychological = type == "psychological" && arrayValue == "X"

	return (
		<>
			{isInteractive ? (
				<button type="button" className={classNames("flex justify-center items-center w-6 h-6 rounded pointer", {
					'bg-gray-500 border-2 border-gray-500 hover:bg-gray-600 hover:border-gray-600 transition': arrayValue == "0",
					'bg-red-600 border-2 border-red-600 hover:bg-red-700 hover:border-red-700 transition': physicalDamage,
					'bg-purple-600 border-2 border-purple-600 hover:bg-purple-700 hover:border-purple-700 transition': psychological

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
					{arrayValue === "X" ? <X fill="bold" /> : <Circle fill="bold" />}
				</button>
			) : (
				<div className={classNames("flex justify-center items-center w-6 h-6 rounded pointer", {
					'bg-gray-500 border-2 border-gray-500 hover:bg-gray-600 hover:border-gray-600 transition': arrayValue == "0",
					'bg-red-600 border-2 border-red-600 hover:bg-red-700 hover:border-red-700 transition': physicalDamage,
					'bg-purple-600 border-2 border-purple-600 hover:bg-purple-700 hover:border-purple-700 transition': psychological

					})}
				>
					{arrayValue === "X" ? <X fill="bold" /> : <Circle fill="bold" />}
				</div>
			)}
			
		</>
	)
}
