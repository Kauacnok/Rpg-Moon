import { parseISO, format, differenceInHours } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'

interface DiceCardProps {
	player: string,
	resultDiceString: string,
	addNumber: number,
	resultFull: number,
	createdAt: string
}

export function DiceCard({ player, resultDiceString, addNumber, resultFull, createdAt}: DiceCardProps) {
	const dataProbabilityInString = ["+", "-", "0"]
	const dataProbabilityInNumber = [+1, -1, 0]

	const resultDiceSplit = resultDiceString.split(" ")

	const createdAtDate = parseISO(createdAt)

	const formattedDate = format(createdAtDate, "'dia' dd 'de' MMMM', às ' HH:mm", {
		locale: ptBR
	})


	return (
		<>
			<article className="flex flex-col mt-4 mx-5 px-5 py-5 rounded bg-gray-700 border border-gray-500">
				<h2 className="mb-2">Solicitado por {player}</h2>
				<div className="mb-2">
					<p className="flex flex-wrap flex-row"> {resultDiceSplit.map((dice, index) => {
						return (<span key={index} className="bg-blue-700 text-lg mx-5 mb-2 px-4 py-1 rounded">{dice.replace("-", "--")}</span>)
					})} 
						<span className="text-lg mx-5 px-3 py-1 rounded border border-blue-700">{addNumber}</span>

					</p>	
				</div>
				<p>Total: {resultFull}</p>
				
				<p className="mb-2">Criado no {formattedDate}</p>
			</article>
		</>
	)
}