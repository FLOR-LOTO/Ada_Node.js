export const generateRandomNum = (): number => {
    const randomNum = Math.random() * 10
    const round = Math.round(randomNum)
    return round 
}

