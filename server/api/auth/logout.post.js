import { removeRefreshToken } from "~/server/db/refreshTokens"
import { sendRefreshToken } from "~/server/utils/jwt"


// logout api
export default defineEventHandler(async (event) => {
    try {
        const cookies = getCookie( event, 'refresh_token' );
        const refreshToken = cookies.refresh_token
        await removeRefreshToken(refreshToken)
    } catch (error) { }

    sendRefreshToken(event.res, null)

    return { message: 'Done' }
})
