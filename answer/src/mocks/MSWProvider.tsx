import { PropsWithChildren, useState, useEffect } from 'react';

const isMockingEnabled = Boolean(process.env.NEXT_PUBLIC_API_MOCKING) 
    && process.env.NODE_ENV !== 'production';

export const MSWProvider = ({ children }: PropsWithChildren) => {
    const [isLoaaded, setIsLoaded] = useState(!isMockingEnabled)

    useEffect(() => {
        const init = async () => {
            if (isMockingEnabled) {
                const fn = await import('./index').then((res) => res.initMocks)
                await fn()
                setIsLoaded(true)
            }
        }
        !isLoaaded && init()
    }, [isLoaaded])

    if (!isLoaaded) {
        return null
    }

    return (
        <>
            {children}
        </>
    )
}