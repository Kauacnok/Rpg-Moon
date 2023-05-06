import { gql } from "@apollo/client"

export const mutationUpdateCharacterById = gql`
	mutation UpdateCharacterById($slug: String, $agility: Int, $avatarURL: String, $characterDescription: String, $charisma: Int, $connection: String, $disposal: Int, $force: Int, $inteligence: Int, $inventory: String, $level: Int, $money: String, $motivation: String, $name: String, $origin: String, $password: String, $perception: Int, $personality: String, $physical: String, $player: String, $points: Int, $problem: String, $psychological: String, $resistance: Int, $route: String, $skills: String, $xp: Int, $xpSpent: Int) {
	updateCharacter(
		data: {agility: $agility, avatarURL: $avatarURL, characterDescription: $characterDescription, charisma: $charisma, connection: $connection, disposal: $disposal, force: $force, inteligence: $inteligence, inventory: $inventory, level: $level, money: $money, motivation: $motivation, name: $name, origin: $origin, password: $password, perception: $perception, personality: $personality, physical: $physical, player: $player, points: $points, problem: $problem, psychological: $psychological, resistance: $resistance, route: $route, skills: $skills, xp: $xp, xpSpent: $xpSpent}
		where: {slug: $slug}
		) {
			slug
		}
	}

`