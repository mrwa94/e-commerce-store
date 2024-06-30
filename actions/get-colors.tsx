import {Color} from '@/type'

const URL = `${process.env.PUBLIC_NEXT_API_URL}/colors`

const getColors = async ():Promise<Color[]>=> {
    const res = await fetch(URL);
    return res.json();

}

export default getColors;