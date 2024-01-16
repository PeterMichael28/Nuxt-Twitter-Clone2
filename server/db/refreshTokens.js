import { prisma } from "."



// create a new refresh token
export const createRefreshToken = (refreshToken) => {
    return prisma.refreshToken.create({
        data: refreshToken
    })
}


// get the refresh token from the db by using the token
export const getRefreshTokenByToken = (token) => {
    return prisma.refreshToken.findUnique({
        where: {
            token
        }
    })
}


// remove teh refresh token from the db
export const removeRefreshToken = (token) => {
    return prisma.refreshToken.delete({
        where: {
            token: token
        }
    })
}