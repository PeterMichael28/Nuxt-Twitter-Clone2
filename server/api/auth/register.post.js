import { sendError } from "h3"
import { createUser } from "~/server/db/users";
import { userTransformer } from "~/server/transformers/user";

export default defineEventHandler( async ( event ) => {

    const body = await readBody(event)

    const { username, email, password, repeatPassword, name } = body


    // if any of the fields is empty
    if (!username || !email || !password || !repeatPassword || !name) {
        return sendError(event, createError({ statusCode: 400, statusMessage: 'Invalid!, All fields are required' }))
    }


    // if password and confirm password doesnt match
    if (password !== repeatPassword) {
        return sendError(event, createError({ statusCode: 400, statusMessage: 'Passwords do not match' }))
    }


    const userData = {
        username,
        email,
        password,
        name,
        profileImage: 'https://picsum.photos/200/200'
    }


    // create a user in the db
    const user = await createUser(userData)

    return {
        body: userTransformer(user)
    }

} );
