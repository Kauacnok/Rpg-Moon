export interface GetHistorySessionsProps {
	data: {
		__typename?: "Query" | undefined;
		historySessions: Array<{
		    __typename?: 'HistorySession';
		    id: string;
		    title: string;
		    author: string;
		    updatedAt: any;
		}>
	}
}