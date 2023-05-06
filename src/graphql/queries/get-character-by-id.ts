import { gql } from "@apollo/client"

export const getCharactersById = gql`
	query GetCharacterInfoo($slug: String) {
		character(where: {slug: $slug}) {
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