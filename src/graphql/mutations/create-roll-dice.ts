import { gql } from "@apollo/client"

export const createNewRollMutation = gql`
	mutation CreateRollDice($addNumberToDice: Int = 0, $player: String = "", $resultDiceString: String = "", $totalNumberResult: Int = 0) {
		createRollDices(
			data: {player: $player, resultDiceString: $resultDiceString, addNumberToDice: $addNumberToDice, totalNumberResult: $totalNumberResult}
		) {
			id
		}
	}

`