import { gql } from "@apollo/client"

export const unpublishDices = gql`
	mutation MyMutation($id: ID = "") {
		unpublishRollDices(where: {id: $id}, from: PUBLISHED) {
			createdAt
		}
	}
`
