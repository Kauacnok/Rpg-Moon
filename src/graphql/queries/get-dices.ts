import { gql } from "@apollo/client"

export const getDices = gql`
	query GetDices {
		rollDicess(orderBy: createdAt_DESC) {
			createdAt
			addNumberToDice
			player
			totalNumberResult
			resultDiceString
		}
	}

`