import { connection } from '..'
import {Recipe} from '../types'

export const insertRecipe = async (recipe: Recipe): Promise<any> => {
    try {
        await connection
        .insert({
            id: recipe.id,
            title: recipe.title,
            description: recipe.description,
            creation_date: recipe.creation_date,
            posted_by: recipe.posted_by
        })
        .into("recipe_cokenu")

    } catch (error) {
        return error.message
    }
}