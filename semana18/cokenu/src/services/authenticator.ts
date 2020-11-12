import * as jwt from 'jsonwebtoken'
import { AuthenticationData } from '../types';
import dotenv from 'dotenv'

dotenv.config()

export function generateToken(
    payload: AuthenticationData
): string {
    return jwt.sign(
        payload,
        process.env.JWT_KEY as string,
        {
            expiresIn: process.env.EXPIRE_IN as string
        }
    )
}

export function getTokenData(
    token: string
): AuthenticationData {
    return jwt.verify(
        token, 
        process.env.JWT_KEY as string
    ) as AuthenticationData
}