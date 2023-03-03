import { gql } from "@apollo/client"

export const deleteDices = gql`
	mutation MyMutation($id: ID = "") {
		deleteRollDices(where: {id: $id}) {
			createdAt
		}
	}
`
