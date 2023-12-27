import ReactDOM from 'react-dom/client'
import {StrictMode, Suspense} from 'react'
import './index.css'
import App from './app.jsx'
import LoadingPage from './utils/loadingPage.jsx'
import {QueryClient, QueryClientProvider} from '@tanstack/react-query'

const root = ReactDOM.createRoot(document.getElementById('root'))

const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            refetchOnWindowFocus: import.meta.env.PROD,
            suspense: true,
            useErrorBoundary: false
        }
    }
})


root.render(
    <StrictMode>
        <QueryClientProvider client={queryClient}>
            <Suspense fallback={<LoadingPage/>}>
                <App/>
            </Suspense>
        </QueryClientProvider>
    </StrictMode>,
)
