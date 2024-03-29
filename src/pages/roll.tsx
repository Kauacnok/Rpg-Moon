import Head from 'next/head'
import { useEffect, useState } from 'react'
import { gql } from "@apollo/client"
import { client } from "../lib/apollo"

import { rollDiceProps } from '../interfaces/roll-dice'
import { getDices } from '../graphql/queries/get-dices'
import { Header } from '../components/Header'
import { DiceCard } from '../components/DiceCard'
import { CreateNewRoll } from '../components/CreateNewRoll'
import { NavBarMobile } from '../components/NavBarMobile'

interface createNewRollProps {
	VITE_API_URL: string,
	VITE_API_ACCESS_TOKEN: string,
	URL_WEBSITE: string,
	TOKEN_ACCESS_RPG_MOON_API: string
}

interface rollDicePageProps extends rollDiceProps, createNewRollProps {}

export default function RollDicePage({ dataa, VITE_API_URL, VITE_API_ACCESS_TOKEN, URL_WEBSITE, TOKEN_ACCESS_RPG_MOON_API }: rollDicePageProps) {
	const [dataDices, setDataDices] = useState<any>(dataa);
	const [refreshToken, setRefreshToken] = useState(Math.random());

	async function fetchData() {
		const getAllDices = await fetch(`${URL_WEBSITE}/api/getDices`)
		const data = getAllDices.json()
		data.then(value => setDataDices(value))

		setTimeout(() => setRefreshToken(Math.random()), 3000);
  	}

	useEffect(() => {
 		fetchData()
	}, [refreshToken])

	return (
		<div className="px-8">
			<Head>
				<title>Rpg Moon | Rolar dados</title>
				<link rel="icon" href="/favicon.ico" />
				<meta name="title" content="Rpg Moon | Criar um personagem" />
				<meta name="description" content="Página para rolar dados 4df no Rpg Moon" />i
				<meta name="keywords" content="Rpg Moon, rolar dados, Rpg Moon rolar dados" />
				<meta name="author" content="Kauã C. N." />
				<meta property="og:image" content="https://i.imgur.com/qlGhJYL.png" />
			</Head>
			<Header />
			<main className="mt-[90px] flex flex-wrap flex-col justify-center pl-2 py-5 bg-gray-900 border-[2px] border-zinc-800 rounded md:flex-row">	
				{ dataDices.rollDicess.map((dice: any, index: number) => {
					if (index >= 0 && index <= 4 ) {
						return (
							<DiceCard key={index} player={dice.player} resultDiceString={dice.resultDiceString} addNumber={dice.addNumberToDice} resultFull={dice.totalNumberResult} createdAt={dice.createdAt} />
						) 
					}
				})}
			</main>
			<aside className="mt-4 mb-[90px] pl-2 py-5 bg-gray-900 border-[2px] border-zinc-800 rounded" >
				<CreateNewRoll VITE_API_URL={VITE_API_URL} VITE_API_ACCESS_TOKEN={VITE_API_ACCESS_TOKEN} TOKEN_ACCESS_RPG_MOON_API={TOKEN_ACCESS_RPG_MOON_API} />
			</aside>
			<footer className="mt-20 md:mt-0">
				<NavBarMobile typeIntImage={3} />
			</footer>
		</div>
	)
}

export async function getServerSideProps() {

	const VITE_API_URL = process.env.VITE_API_URL
	const VITE_API_ACCESS_TOKEN = process.env.VITE_API_ACCESS_TOKEN
	const URL_WEBSITE = process.env.URL_WEBSITE
	const TOKEN_ACCESS_RPG_MOON_API = process.env.TOKEN_ACCESS_RPG_MOON_API

	const { data } = await client.query({
		query: getDices
	})

	return {
		props: { dataa: data, VITE_API_URL, VITE_API_ACCESS_TOKEN, URL_WEBSITE, TOKEN_ACCESS_RPG_MOON_API }
	}
}