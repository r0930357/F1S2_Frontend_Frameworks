import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './main.css'
import {QueryClient, QueryClientProvider} from '@tanstack/react-query'
import {BrowserRouter} from 'react-router-dom'

const queryClient = new QueryClient({
    defaultOptions: {
        queries:{
            refetchOnWindowFocus: import.meta.env.PROD,
            suspense: true,
            useErrorBoundary: false,
        },
    },
})

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <BrowserRouter>
            <QueryClientProvider client={queryClient}>
                <App/>
            </QueryClientProvider>
        </BrowserRouter>
    </React.StrictMode>,
)
