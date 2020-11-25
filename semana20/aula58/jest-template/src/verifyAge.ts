// entrada

import { verify } from "crypto"

export enum LOCATION {
    EUA = "EUA",
    BRAZIL = "BRAZIL",
}

export enum NACIONALITY {
  BRAZILIAN = "BRAZILIAN",
  AMERICAN = "AMERICAN",
}

export interface User {
  name: string;
  age: number;
  nacionality: NACIONALITY;
}

export interface Casino {
  name: string;
  location: LOCATION;
}

// saida

interface Result {
    brazilians: ResultItem;
    americans: ResultItem;
}
  
interface ResultItem {
  allowed: string[];
  unallowed: string[];
}

// function

export function verifyAge(casino: Casino, users: User[]): Result {
    let resultBrazilians: ResultItem = {
        allowed: [],
        unallowed: []
    }

    let resultAmericans: ResultItem = {
        allowed: [],
        unallowed: []
    }

    users.map((user => {
        if(casino.location === LOCATION.BRAZIL){

            if(user.nacionality === NACIONALITY.BRAZILIAN){
    
                if(user.age >= 18 ){
                    resultBrazilians.allowed.push(user.name)
                } else {
                    resultBrazilians.unallowed.push(user.name)
                }

            } else if (user.nacionality === NACIONALITY.AMERICAN){

                if(user.age >= 18){
                    resultAmericans.allowed.push(user.name)
                } else {
                   resultAmericans.unallowed.push(user.name)
                }
    
            }
        }

        if(casino.location === LOCATION.EUA){

            if(user.nacionality === NACIONALITY.BRAZILIAN){
    
                if(user.age >= 21 ){
                    resultBrazilians.allowed.push(user.name)
                } else {
                    resultBrazilians.unallowed.push(user.name)
                }

            } else if (user.nacionality === NACIONALITY.AMERICAN){

                if(user.age >= 21){
                    resultAmericans.allowed.push(user.name)
                } else {
                   resultAmericans.unallowed.push(user.name)
                }
    
            }
        }
        
    }))

    let Result: Result = {
        brazilians: resultBrazilians,
        americans: resultAmericans
    }

    return Result;
}



