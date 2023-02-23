import { gql } from "@apollo/client"

export const updateHistoryMutationById = gql`
	mutation UpdateHistory($id: ID, $author: String = "", $textHistory: String = "", $title: String = "") {
	updateHistorySession(
		data: {author: $author, textHistory: $textHistory, title: $title}
			where: {id: $id}
		) {
			id
			updatedAt
		}
	}

`