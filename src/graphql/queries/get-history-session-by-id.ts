import { gql } from "@apollo/client"

export const getHistorySession = gql`
	query GetHistorySessionByID($id: ID) {
		historySession(where: {id: $id}) {
			title
			textHistory
			author
			updatedAt
		}
	}
`