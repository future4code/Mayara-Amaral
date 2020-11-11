import axios from 'axios'

const URL_ADDRESS = "https://viacep.com.br/ws"

export type address = {
    logradouro: string, 
    bairro: string,
    cidade: string | undefined,
    estado: string
}

export const getAddressByCep = async (cep: number): Promise<address> => {
    
    const result = await axios.get(`${URL_ADDRESS}/${cep}/json`);

    return {
        logradouro: result.data.logradouro,
        bairro: result.data.bairro,
        cidade: result.data.cidade,
        estado: result.data.uf
    }
}