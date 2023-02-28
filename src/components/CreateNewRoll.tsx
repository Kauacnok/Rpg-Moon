import { GraphQLClient } from 'graphql-request'
import { useState, useEffect, FormEvent, useRef } from 'react'
import { Fireworks } from '@fireworks-js/react'
import type { FireworksHandlers } from '@fireworks-js/react'
import { useApolloClient, gql } from '@apollo/client';
import { CircleNotch  } from 'phosphor-react'

import { createNewRollMutation } from '../graphql/mutations/create-roll-dice'
import { publishNewRollMutation } from '../graphql/mutations/publish-roll-dice'
import { InputForm } from './InputForm'

interface createNewRollProps {
	VITE_API_URL: string,
	VITE_API_ACCESS_TOKEN: string
}

export function CreateNewRoll({ VITE_API_URL, VITE_API_ACCESS_TOKEN }: createNewRollProps) {

	const ref = useRef<FireworksHandlers>(null)
	const [name, setName] = useState("...")
	const [aditionalNumber, setAditionalNumber] = useState(0)
	const [isDataSent, setIsDataSent] = useState(false)
	const [isFireworksEnabled, setIsFireworksEnabled] = useState(false)

	const client = useApolloClient()

	const graphQLClient = new GraphQLClient((VITE_API_URL), {
		headers: {
			authorization: `Bearer ${VITE_API_ACCESS_TOKEN}`,
		}
	})

	const rollDiceString = ["-", "+", "0"]
	const rollDiceNumber = [-1, 1, 0]

	function randomIntFromInterval(min: number, max: number) {
    	return Math.round(Math.random() * (max - min) + min);
	}

	async function handleSubmit(event: FormEvent) {
		event.preventDefault()
		setIsDataSent(true)

		let randomNumber1 = randomIntFromInterval(0, 2)
		let randomNumber2 = randomIntFromInterval(0, 2)
		let randomNumber3 = randomIntFromInterval(0, 2)
		let randomNumber4 = randomIntFromInterval(0, 2)

		const totalNumberResultOnlyDice = rollDiceNumber[randomNumber1] + rollDiceNumber[randomNumber2] + rollDiceNumber[randomNumber3] + rollDiceNumber[randomNumber4]
		const resultDiceStringFull = `${rollDiceString[randomNumber1]} ${rollDiceString[randomNumber2]} ${rollDiceString[randomNumber3]} ${rollDiceString[randomNumber4]}`
		const totalNumberResultFull = rollDiceNumber[randomNumber1] + rollDiceNumber[randomNumber2] + rollDiceNumber[randomNumber3] + rollDiceNumber[randomNumber4] + Number(aditionalNumber)

		const newRollDice = await graphQLClient.request(createNewRollMutation, {
			player: name,
			addNumberToDice: Number(aditionalNumber),
			resultDiceString: resultDiceStringFull,
			totalNumberResult: Number(totalNumberResultFull),
		})

		await graphQLClient.request(publishNewRollMutation, {
			id: newRollDice?.createRollDices?.id
		})	

		if (totalNumberResultOnlyDice === 4 || totalNumberResultOnlyDice === -4) {
			setIsFireworksEnabled(true)
			ref?.current?.start()
			setTimeout(() => {
				ref?.current?.stop()
				setIsFireworksEnabled(false)
			}, 15000)
		}

        setIsDataSent(false)
	}

	return (
		<>
			{isFireworksEnabled && 
				<Fireworks
					ref={ref}
					options={{ opacity: 0.5 }}
					style={{
						top: 0,
						left: 0,
						width: '100%',
						height: '100%',
						position: 'fixed',
						background: 'transparent'
					}}
     			 />
			}
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
							disabled={isDataSent == true}
						><CircleNotch weight="bold" className="mx-auto w-4 h-4 animate-spin" /></button>)}
			</form>
		</>
	)
}
