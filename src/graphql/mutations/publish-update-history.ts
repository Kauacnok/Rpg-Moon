import { gql } from "@apollo/client"

export const publishUpdateHistory = gql`
	mutation publishUpdateHistory($id: ID = "") {
	publishHistorySession(where: {id: $id}, to: PUBLISHED) {
			author
			createdAt
			id
			publishedAt
			textHistory
			title
			updatedAt
			stage
		}
	}
`