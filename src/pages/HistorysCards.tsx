import { Header } from '../components/Header'
import { HistoryCard } from '../components/HistoryCard'
import { useGetHistorySessionsListQuery } from '../graphql/generated'

export function HistorysCards() {

	const { data, loading, error } = useGetHistorySessionsListQuery()

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
		</>
	)
}