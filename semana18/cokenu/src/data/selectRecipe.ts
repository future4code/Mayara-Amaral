import { connection } from "..";
import { Recipe } from "../types";

export const selectRecipe = async (id: string): Promise<Recipe | undefined> => {
    try {
        const result = await connection("recipe_cokenu")
        .select("*")
        .where("id", id)

        return result[0]
    } catch (error) {
        return error
    }
}