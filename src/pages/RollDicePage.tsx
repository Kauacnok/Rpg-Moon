import { useGetDicesQuery } from '../graphql/generated'
import { Header } from '../components/Header'
import { DiceCard } from '../components/DiceCard'
import { CreateNewRoll } from '../components/CreateNewRoll'
import { NavBarMobile } from '../components/NavBarMobile'

export function RollDicePage() {

	const { data, loading, error } = useGetDicesQuery({
		variables: {
		},
	})

	return (
		<>
			<Header />
			<main className="flex flex-wrap flex-col justify-center mt-4 pl-2 py-5 bg-gray-700 border-b border-gray-500 md:flex-row">	
				{ data?.rollDicess?.map((dice, index) => {
					if (index >= 0 && index <= 4 ) {
						return (
							<DiceCard key={index} player={dice.player} resultDiceString={dice.resultDiceString} addNumber={dice.addNumberToDice} resultFull={dice.totalNumberResult} createdAt={dice.createdAt} />
						) 
					}
				})}
			</main>
			<aside className="mt-4 pl-2 py-5 bg-gray-700 border-b border-gray-500" >	
				<CreateNewRoll />
			</aside>
			<footer className="mt-20 md:mt-0">
				<NavBarMobile typeIntImage={3} />
			</footer>
		</>	
	)
}