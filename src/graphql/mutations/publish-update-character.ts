import { gql } from "@apollo/client"

export const publishUpdateCharacter = gql`
	mutation publishUpdateCharacter($id: ID) {
		publishCharacter(where: {id: $id}, to: PUBLISHED) {
			agility
			avatarURL
			characterDescription
			charisma
			connection
			createdAt
			disposal
			force
			inteligence
			id
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