import { useState, useEffect, FormEvent } from 'react'
import { useApolloClient } from '@apollo/client';
import { CircleNotch  } from 'phosphor-react'

import { useCreateRollDiceMutation, usePublishRollDiceMutation } from '../graphql/generated'
import { InputForm } from './InputForm'

export function CreateNewRoll() {
	const [name, setName] = useState("")
	const [aditionalNumber, setAditionalNumber] = useState(0)
	const [counter, setCounter] = useState(0)
	const [isDataSent, setIsDataSent] = useState(false)

	const client = useApolloClient()

	const rollDiceString = ["+", "-", "0"]
	const rollDiceNumber = [+1, -1, 0]

	function randomIntFromInterval(min: number, max: number) {
    	return Math.round(Math.random() * (max - min) + min);
	}

	function updateRollDicesList() {
		client.resetStore()
		setCounter(counter + 1)
	}

	const [createRollDiceMutation, { data, loading, error }] = useCreateRollDiceMutation({
		variables: {
			addNumberToDice: 0,
			player: '',
			resultDiceString: '',
			totalNumberResult: 0
		},
	})

	const [publishRollDiceMutation] = usePublishRollDiceMutation({
		variables: {
			id: ''
		},
	})

	useEffect(() => {
        console.log('Fetching data')
    }, [counter, setCounter])

	async function handleSubmit(event: FormEvent) {
		event.preventDefault()
		setIsDataSent(true)

		let randomNumber1 = randomIntFromInterval(0, 2)
		let randomNumber2 = randomIntFromInterval(0, 2)
		let randomNumber3 = randomIntFromInterval(0, 2)
		let randomNumber4 = randomIntFromInterval(0, 2)

		const resultDiceStringFull = `${rollDiceString[randomNumber1]} ${rollDiceString[randomNumber2]} ${rollDiceString[randomNumber3]} ${rollDiceString[randomNumber4]}`
		const totalNumberResultFull = rollDiceNumber[randomNumber1] + rollDiceNumber[randomNumber2] + rollDiceNumber[randomNumber3] + rollDiceNumber[randomNumber4] + Number(aditionalNumber)

		const newRollDice = await createRollDiceMutation({
			variables: {
				player: name,
				addNumberToDice: Number(aditionalNumber),
				resultDiceString: resultDiceStringFull,
				totalNumberResult: Number(totalNumberResultFull)
			}
		})

		await publishRollDiceMutation({
			variables: {
				id: newRollDice?.data?.createRollDices?.id
			}
		})

		client.resetStore()
        setCounter(counter + 1)

        setIsDataSent(false)

		console.log(newRollDice?.data?.createRollDices?.id)
	}

	return (
		<>
			<form onSubmit={handleSubmit} className="bg-gray-700 flex flex-col pl-2 pb-2">
				<InputForm typeInput="text" placeholderInput="Nome do jogador" setValue={setName}/>
				<InputForm typeInput="number" placeholderInput="Valor a adicionar ao dado" setValue={setAditionalNumber}/>
				{ isDataSent == false ? (
					<button 
						type="submit" 
						className="w-[80%] mx-auto px-5 py-2 bg-green-500 hover:bg-green-700 disabled:opacity-50"
					>Rolar dado</button>
					) : (
						<button 
							type="submit" 
							className="w-[80%] mx-auto px-5 py-2 bg-green-500 hover:bg-green-700"
							disabled
						><CircleNotch weight="bold" className="mx-auto w-4 h-4 animate-spin" /></button>)}
						<button type="button" className="w-[80%] mx-auto text-center px-5 py-2 mt-2 bg-green-500 hover:bg-green-700 cursor-pointer" onClick={updateRollDicesList}>Atualizar lista dos dados</button>
			</form>
		</>
	)
}