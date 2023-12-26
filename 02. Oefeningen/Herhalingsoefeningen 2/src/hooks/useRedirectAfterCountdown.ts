import {useNavigate} from 'react-router-dom'
import {useEffect} from 'react'

const useRedirectAfterCountdown = (url: string, enabled: boolean, interval: number = 1500) => {
    const navigate = useNavigate()

    useEffect(() => {
        if (enabled) {
            const timeoutId = setTimeout(() => navigate(url),interval)
            return () => clearTimeout(timeoutId)
        }
    }, [enabled])
}

export default useRedirectAfterCountdown