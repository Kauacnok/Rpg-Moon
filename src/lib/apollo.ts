import { ApolloClient, InMemoryCache, DefaultOptions } from '@apollo/client'

const defaultOptions: DefaultOptions = {
	watchQuery: {
		fetchPolicy: 'no-cache',
		errorPolicy: 'ignore',
	},
	query: {
		fetchPolicy: 'no-cache',
		errorPolicy: 'all',
	},
}


export const client = new ApolloClient({
	uri: process.env.VITE_API_URL,
	headers: {
		'Authorization': `Bearer ${process.env.VITE_API_ACCESS_TOKEN}`,
	},
	cache: new InMemoryCache(),
	defaultOptions: defaultOptions
})