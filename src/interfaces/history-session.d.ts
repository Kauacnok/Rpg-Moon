export interface historyProps {
	data: {
		__typename?: "Query" | undefined;

		historySession: {
		    __typename?: "HistorySession" | undefined;
		    title: string;
		    textHistory: string;
		    author: string;
		    updatedAt: any;
		}
	},
	id: string
}