export interface rollDiceProps {
	dataa: {
		__typename?: "Query" | undefined;

		rollDicess: Array<{
		    __typename?: 'RollDices';
		    createdAt: any;
		    addNumberToDice: number;
		    player: string;
		    totalNumberResult: number;
		    resultDiceString: string;
		}>
	}
}