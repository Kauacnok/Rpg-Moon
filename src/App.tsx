import { ApolloProvider } from '@apollo/client'
import { client } from './lib/apollo'
import { BrowserRouter } from 'react-router-dom'
import { Router } from './Router'
import { MainPage } from './pages/MainPage'

export function App() {
    return (
        <ApolloProvider client={client}>
        	<BrowserRouter>
        		<Router />
        	</BrowserRouter>
        </ApolloProvider>
    )
}
