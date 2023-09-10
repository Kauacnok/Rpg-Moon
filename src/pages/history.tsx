import Head from 'next/head'
import { gql } from "@apollo/client"
import { GetHistorySessionsProps } from '../interfaces/historys-sessions'

import { client } from "../lib/apollo"
import { getHistorySessions } from '../graphql/queries/get-history-sessions-list'
import { Header } from '../components/Header'
import { HistoryCard } from '../components/HistoryCard'
import { useGetHistorySessionsListQuery, GetHistorySessionsListQuery } from '../graphql/generated'
import { NavBarMobile } from '../components/NavBarMobile'

export default function HistorysCards({ data }: GetHistorySessionsProps) {
	return (
		<div className="px-8">
			<Head>
				<title>Rpg Moon | História das sessões</title>
				<link rel="icon" href="/favicon.ico" />
				<meta name="title" content="Rpg Moon | Criar um personagem" />
				<meta name="description" content="Página com a lista de sessões da história do Rpg Moon" />i
				<meta name="keywords" content="Rpg Moon, história das sessões, Rpg Moon história das sessões" />
				<meta name="author" content="Kauã C. N." />
				<meta property="og:image" content="https://i.imgur.com/hgEDFIS.png" />
			</Head>
			<Header />
			<main className="flex flex-col justify-center my-[90px] pl-2 py-5 bg-gray-900 border-[2px] border-zinc-800 rounded md:flex-row" >
				{data?.historySessions.map((session, index) => {
					return (
						<HistoryCard 
							key={session.id}
							id={session.id}
							title={session.title}
							author={session.author}
							updatedAt={session.updatedAt}
						/>
					)
				})}
			</main>
			<footer className="mt-20">
				<NavBarMobile typeIntImage={2} />
			</footer>
		</div>
	)
}

export async function getServerSideProps() {

	const { data } = await client.query({
		query: getHistorySessions
	})

	return {
		props: { data: data},
	}
}