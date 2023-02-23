import { gql } from "@apollo/client"

export const getHistorySessions = gql`
	query GetHistorySessionsList {
		historySessions(where: {}) {
			id
			title
			author
			updatedAt
		}
	}
`