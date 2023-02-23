import { gql } from "@apollo/client"

export const getCharactersById = gql`
	query GetCharacterInfoo($id: ID) {
		character(where: {id: $id}) {
			name
			avatarURL
			characterDescription
			player
			points
			level
			xp
			force
			agility
			resistance
			inteligence
			perception
			disposal
			charisma
			skills
			route
			origin
			personality
			motivation
			connection
			problem
			physical
			psychological
			inventory
			money
			password
			xpSpent
		}
	}
`