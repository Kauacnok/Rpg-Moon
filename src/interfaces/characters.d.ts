export interface CharactersCardsProps {
	data: {
		__typename?: "Query" | undefined;
		characters: Array<{
		    __typename?: 'Character';
			id: string;
		    name: string;
		    avatarURL: string;
		    slug: string;
		    level: string;
		    xp: string;
		    xpSpent: string;
		    points: string
		}>;
	}
}