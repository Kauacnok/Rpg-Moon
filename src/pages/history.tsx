import { gql } from "@apollo/client"
import { client } from "../lib/apollo"
import { getHistorySessions } from '../graphql/queries/get-history-sessions-list'

import { Header } from '../components/Header'
import { HistoryCard } from '../components/HistoryCard'
import { useGetHistorySessionsListQuery, GetHistorySessionsListQuery } from '../graphql/generated'
import { NavBarMobile } from '../components/NavBarMobile'

interface GetHistorySessionsProps {
	data: {
	    __typename?: "Query" | undefined;
	    historySessions: Array<{
	        __typename?: 'HistorySession';
	        id: string;
	        title: string;
	        author: string;
	        updatedAt: any;
	    }>
	}
}

export default function HistorysCards({ data }: GetHistorySessionsProps) {
	return (
		<>
			<Header />
			<main className="flex flex-col justify-center mt-4 pl-2 py-5 bg-gray-700 border-b border-gray-500 md:flex-row" >	
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
		</>
	)
}

export async function getStaticProps() {

	const { data } = await client.query({
		query: getHistorySessions
	})

	return {
		props: { data: data},
		revalidate: 10
	}
}