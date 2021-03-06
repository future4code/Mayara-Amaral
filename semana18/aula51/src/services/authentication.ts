import * as jwt from 'jsonwebtoken'
import dotenv from 'dotenv'
import { authenticationData } from '../types'

dotenv.config()

export const generateToken = (payload: authenticationData): string => {
    return jwt.sign(
        payload,
        process.env.JWT_KEY as string,
        {
            expiresIn: "30min"
        }
    )
}

export const getTokenData = (token: string): authenticationData => {
    return jwt.verify(
        token,
        process.env.JWT_KEY  as string
    ) as authenticationData
}