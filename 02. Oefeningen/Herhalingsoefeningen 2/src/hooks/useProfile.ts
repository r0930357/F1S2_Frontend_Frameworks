import {useGetProfile} from '../api/users.ts'
import {IProfile} from '../models/IProfile.ts'

const useProfile = (): {profile: IProfile | null, isAuthenticaded: boolean, isNotAuthenticated: boolean} => {
    const {data: profile} = useGetProfile()

    return {
        profile: profile ?? null,
        isAuthenticaded: !!profile?.id,
        isNotAuthenticated: !profile?.id,
    }
}

export default useProfile
