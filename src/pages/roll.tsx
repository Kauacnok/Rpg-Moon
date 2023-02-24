import { gql } from "@apollo/client"
import { client } from "../lib/apollo"
import { getDices } from '../graphql/queries/get-dices'
import { Header } from '../components/Header'
import { DiceCard } from '../components/DiceCard'
import { CreateNewRoll } from '../components/CreateNewRoll'
import { NavBarMobile } from '../components/NavBarMobile'

interface rollDiceProps extends createNewRollProps {
	data: {
	    __typename?: "Query" | undefined;

	    rollDicess: Array<{
	        __typename?: 'RollDices';
	        createdAt: any;
	        addNumberToDice: number;
	        player: string;
	        totalNumberResult: number;
	        resultDiceString: string;
	    }>
	}
}

interface createNewRollProps {
	VITE_API_URL: string,
	VITE_API_ACCESS_TOKEN: string
}



export default function RollDicePage({ data, VITE_API_URL, VITE_API_ACCESS_TOKEN }: rollDiceProps) {
	return (
		<>
			<Header />
			<main className="flex flex-wrap flex-col justify-center mt-4 pl-2 py-5 bg-gray-700 border-b border-gray-500 md:flex-row">	
				{ data.rollDicess.map((dice, index) => {
					if (index >= 0 && index <= 4 ) {
						return (
							<DiceCard key={index} player={dice.player} resultDiceString={dice.resultDiceString} addNumber={dice.addNumberToDice} resultFull={dice.totalNumberResult} createdAt={dice.createdAt} />
						) 
					}
				})}
			</main>
			<aside className="mt-4 pl-2 py-5 bg-gray-700 border-b border-gray-500" >	
				<CreateNewRoll VITE_API_URL={VITE_API_URL} VITE_API_ACCESS_TOKEN={VITE_API_ACCESS_TOKEN} />
			</aside>
			<footer className="mt-20 md:mt-0">
				<NavBarMobile typeIntImage={3} />
			</footer>
		</>	
	)
}

export async function getStaticProps() {

	const VITE_API_URL = process.env.VITE_API_URL
	const VITE_API_ACCESS_TOKEN = process.env.VITE_API_ACCESS_TOKEN

	const { data } = await client.query({
		query: getDices
	})

	return {
		props: { data: data, VITE_API_URL, VITE_API_ACCESS_TOKEN },
		revalidate: 10
	}
}