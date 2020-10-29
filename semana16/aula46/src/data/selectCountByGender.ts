import {connection} from '../index'

export const selectCountByGender = async (gender: string): Promise<any> => {
    const result = await connection.raw(`
        SELECT COUNT(*) as count FROM Actor WHERE gender LIKE "${gender}"
    `);
   
    const count: string = `"${result[0][0].count}"`
  
    return count
}