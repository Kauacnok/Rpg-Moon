export interface CharacterCardFullProps {
	data: {
		__typename: 'Query', 
		character: {
			__typename: 'Character', 
			name: string, 
			avatarURL: string, 
			characterDescription: string, 
			player: string, 
			points: number, 
			level: number, 
			xp: number, 
			force: number, 
			agility: number, 
			resistance: number, 
			inteligence: number, 
			perception: number, 
			disposal: number, 
			charisma: number, 
			skills: string, 
			route: string, 
			origin: string, 
			personality: string, 
			motivation: string, 
			connection: string, 
			problem: string, 
			physical: string, 
			psychological: string, 
			inventory: string, 
			money: string, 
			password: string, 
			xpSpent: number 
		}
    }
    id: string
}
