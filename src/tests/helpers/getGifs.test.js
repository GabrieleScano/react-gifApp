import { getGifs } from '../../helpers/getGifs'

describe('gestGifs tests', () => {
    test('should have 10 results', async() => {
        const gifs = await getGifs('javascript')

        expect(gifs.length).toBe(10)    
    })

    test('should have 0 results', async() => {
        const gifs = await getGifs('')

        expect(gifs.length).toBe(0)    
    })
    
})