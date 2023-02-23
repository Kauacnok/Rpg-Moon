import { gql } from "@apollo/client"

export const publishNewRollMutation = gql`
	mutation PublishRollDice($id: ID = "") {
		publishRollDices(where: {id: $id}, to: PUBLISHED) {
			id
			player
			addNumberToDice
			createdAt
			resultDiceString
			totalNumberResult
		}
	}
`