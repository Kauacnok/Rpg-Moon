import { ApolloClient, InMemoryCache } from '@apollo/client'

export const client = new ApolloClient({
	uri: 'https://api-sa-east-1.graphcms.com/v2/cl5711edy49zo01t33cwk1ox1/master',
	headers: {
		'Authorization': `Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6ImdjbXMtbWFpbi1wcm9kdWN0aW9uIn0.eyJ2ZXJzaW9uIjozLCJpYXQiOjE2NTY5NzQxMTQsImF1ZCI6WyJodHRwczovL2FwaS1zYS1lYXN0LTEuZ3JhcGhjbXMuY29tL3YyL2NsNTcxMWVkeTQ5em8wMXQzM2N3azFveDEvbWFzdGVyIiwiaHR0cHM6Ly9tYW5hZ2VtZW50LW5leHQuZ3JhcGhjbXMuY29tIl0sImlzcyI6Imh0dHBzOi8vbWFuYWdlbWVudC5ncmFwaGNtcy5jb20vIiwic3ViIjoiNWY0N2ZjYzItNGNlNS00ZDIyLWI2MWUtYmY0OTBiNjNlNjIzIiwianRpIjoiY2w1N2JsdGZtNGRxYjAxdWswN3Y3YjRyMyJ9.EV3A3S7a2qnud4t00vALxVgFXiByN1i5Uhz79oGaPkGqmnWGqFhJremV9JGYRCITbSPU8uby_qUA_U4grhzoa_1Y9azpQ4StVKUbop5wS8gDqA6p5dgTvPJ0Fu3Fj1JhlZrIksgiGZ1G5PyPAOt9ErHg5VcNp5YdqrEterySbffXjssZN6eQ4bKwHtWUaRTBUG45DStAuFArkM-U-o5tT5l_2PGHJKMeBn_mcHl57ZlE3wnFW6IQVzJxWf6jyYe25VOqxQmmV_Vn8Gc5G62RyNbUxqOE7IBSKCQpHtBKuNt-VOqnJrfwC9OjHZpBHgOY6zTm2Zzk8lRLadB3P-lickhjzvdO1nPoVwW_MTtClJ_S9q4yRsJ_RfNgf-aFeSfdeuxChwXnbyRMlmqLdYRqAN6Gi64sPJ9bU4jKKMnNT_dqWv7zhU3hTkW3y9TBA1gGYs4JH0BwEjQAQGw26tGT__BtvWnaVjLWbpaN18euqGJ_FwwWnLcqRk0AABw--k1QmSw1cmi7aFN_AlXptjEKE52DXKzJ4caAZG5GpVgs6-icIxOgNINd3mTlRv4YZBp-v3oYgW0C5dLqe4t3n1UD9OnnqwOs3cLkCrlPVpEhtoASDbojzxBQB2Ismj8w9p_pl4oP0XLWve312brFdq-6pg9br34KL7B4yfnEF9A-E2o`,
	},
	cache: new InMemoryCache()
})