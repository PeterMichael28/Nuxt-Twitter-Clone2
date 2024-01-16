import jwt from "jsonwebtoken"
import { jwtAccessSecret, jwtRefreshSecret } from "./util";


const generateAccessToken = (user) => {
    

    return jwt.sign({ userId: user.id }, jwtAccessSecret, {
        expiresIn: '10m'
    })
}

const generateRefreshToken = (user) => {
    

    return jwt.sign({ userId: user.id }, jwtRefreshSecret, {
        expiresIn: '4h'
    })
}

export const decodeRefreshToken = (token) => {
    

    try {
        return jwt.verify(token, jwtRefreshSecret)
    } catch (error) {
        return null
    }
}

export const decodeAccessToken = (token) => {
    // console.log({token})

    try {
        // console.log(jwt.verify(token, jwtAccessSecret))
        return jwt.verify(token, jwtAccessSecret)
    } catch (error) {
        return null
    }
}


export const generateTokens = (user) => {
    const accessToken = generateAccessToken(user)
    const refreshToken = generateRefreshToken(user)

    return {
        accessToken: accessToken,
        refreshToken: refreshToken
    }
}

export const sendRefreshToken = (event, token) => {
    setCookie(event, 'refresh_token', token, {
     httpOnly: true,
     sameSite: true,
    });
} 