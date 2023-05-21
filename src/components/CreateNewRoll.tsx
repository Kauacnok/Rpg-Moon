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
	VITE_API_ACCESS_TOKEN: string,
	TOKEN_ACCESS_RPG_MOON_API: string
}

export function CreateNewRoll({ VITE_API_URL, VITE_API_ACCESS_TOKEN, TOKEN_ACCESS_RPG_MOON_API }: createNewRollProps) {

	const ref = useRef<FireworksHandlers>(null)
	const [refreshTokenApi, setRefreshTokenApi] = useState(Math.random());
	const [isActiveFireworks, setIsActiveFireworks] = useState(false)
	const [name, setName] = useState("...")
	const [resultString, setResultString] = useState("")
	const [totalNumberResult, setTotalNumberResult] = useState(0)
	const [aditionalNumber, setAditionalNumber] = useState(0)
	const [isDataSent, setIsDataSent] = useState(false)
	const [isFireworksEnabled, setIsFireworksEnabled] = useState(false)
	const [showSystemMessage, setShowSystemMessage] = useState(false)

	const client = useApolloClient()

	const graphQLClient = new GraphQLClient((VITE_API_URL), {
		headers: {
			authorization: `Bearer ${VITE_API_ACCESS_TOKEN}`,
		}
	})

	async function fetchData() {
		const activeFireworks = await fetch('https://rpg-moon-simple-api.onrender.com/')
		const activeFireworksData = activeFireworks.json()
		activeFireworksData.then(value => setIsFireworksEnabled(value.isActive))
		
		setTimeout(() => setRefreshTokenApi(Math.random()), 3000);
  	}

	useEffect(() => {
 		fetchData()
	}, [refreshTokenApi])

	const rollDiceString = ["-", "+", "0"]
	const rollDiceNumber = [-1, 1, 0]

	function randomIntFromInterval(min: number, max: number) {
    	return Math.round(Math.random() * (max - min) + min);
	}

	function closeSystemMessage() {
		setShowSystemMessage(false)
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
		setResultString(resultDiceStringFull)
		setTotalNumberResult(totalNumberResultFull)
		setShowSystemMessage(true)
		setTimeout(() => {
			setShowSystemMessage(false)
		}, 15000)

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
			await fetch('https://rpg-moon-simple-api.onrender.com/fireworks', {
				method: 'PUT',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify({isActive: true, token: TOKEN_ACCESS_RPG_MOON_API})
			})
			ref?.current?.start()
			setTimeout( async () => {
				await fetch('https://rpg-moon-simple-api.onrender.com/fireworks', {
					method: 'PUT',
					headers: {
						'Content-Type': 'application/json'
					},
					body: JSON.stringify({isActive: false, token: TOKEN_ACCESS_RPG_MOON_API})
				})
				ref?.current?.stop()

			}, 10000)
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
			{showSystemMessage && 
				<div className="fixed bg-gray-700 w-[100%] rounded top-4 px-8 py-10 flex flex-col justify-center items-center text-center border-[2px] border-gray-500 gap-5 md:w-[75%] md:left-[50%] md:translate-x-[-50%]">
					<div>
						Mensagem do sistema: Você tirou <span className="text-blue-500 text-2xl">[ {resultString} ] ({aditionalNumber})</span> e o resultado total foi <span className="text-blue-500 text-2xl">{totalNumberResult}</span>	
					</div>
					<button type="button" className="rounded px-5 py-2 bg-green-500 cursor-pointer hover:bg-green-700 transition" onClick={closeSystemMessage}>Fechar mensagem</button>
				</div>
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
