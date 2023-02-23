import { gql } from "@apollo/client"

export const createCharacter = gql`
	mutation CreateNewCharacter($avatarURL: String!, $characterDescription: String!, $agility: Int!, $charisma: Int!, $connection: String!, $disposal: Int!, $force: Int!, $inteligence: Int!, $inventory: String!, $level: Int!, $money: String!, $motivation: String!, $name: String!, $origin: String!, $password: String!, $perception: Int!, $personality: String!, $physical: String!, $player: String!, $points: Int!, $problem: String!, $psychological: String!, $resistance: Int!, $route: String!, $skills: String!, $xp: Int!, $xpSpent: Int!) {
		createCharacter(
			data: {name: $name, avatarURL: $avatarURL, characterDescription: $characterDescription, player: $player, xp: $xp, points: $points, level: $level, route: $route, origin: $origin, personality: $personality, motivation: $motivation, connection: $connection, problem: $problem, force: $force, agility: $agility, resistance: $resistance, inteligence: $inteligence, perception: $perception, disposal: $disposal, charisma: $charisma, physical: $physical, psychological: $psychological, skills: $skills, inventory: $inventory, money: $money, password: $password, xpSpent: $xpSpent}
		) {
			id
		}
	}
`