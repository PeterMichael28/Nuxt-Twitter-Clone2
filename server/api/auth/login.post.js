import { sendError } from "h3"
import { getUserByUsername } from "~/server/db/users";
import bcrypt from "bcrypt"
import { generateTokens, sendRefreshToken } from "~/server/utils/jwt";
import { userTransformer } from "~/server/transformers/user";
import { createRefreshToken } from "~/server/db/refreshTokens";


export default defineEventHandler( async ( event ) => {

    const body = await useBody(event)

    const { username, password } = body



    // if there is no username or password
    if (!username || !password) {
        return sendError(event, createError({
            statusCode: 400,
            statusMessage: 'Invalid Username or password'
        }))
    }


    // get the user from the db
    const user = await getUserByUsername(username)


    // if no user was found
    if (!user) {
        return sendError(event, createError({
            statusCode: 400,
            statusMessage: 'Username or password is invalid'
        }))
    }

    // check if the password entered matches what we have in the db
    const doesThePasswordMatch = await bcrypt.compare(password, user.password)


    // if password doesnt match
    if (!doesThePasswordMatch) {
        return sendError(event, createError({
            statusCode: 400,
            statusMessage: 'Username or password is invalid'
        }))
    }

    const { accessToken, refreshToken } = generateTokens(user)

    await createRefreshToken({
        token: refreshToken,
        userId: user.id
    })

    sendRefreshToken(event, refreshToken)

    return {
        access_token: accessToken, user: userTransformer(user)
    }

} );

