import { gql } from "@apollo/client"

export const publishUpdateCharacter = gql`
	mutation publishUpdateCharacter($slug: String) {
		publishCharacter(where: {slug: $slug}, to: PUBLISHED) {
			agility
			avatarURL
			characterDescription
			charisma
			connection
			createdAt
			disposal
			force
			inteligence
			inventory
			level
			money
			motivation
			name
			origin
			password
			perception
			personality
			physical
			player
			points
			problem
			psychological
			publishedAt
			resistance
			route
			skills
			stage
			updatedAt
			xp
			xpSpent
		}
	}

`