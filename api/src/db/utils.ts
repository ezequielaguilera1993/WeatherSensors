export const randomMinMaxValue = () => {
    const randomMin = Math.round(Math.random() * 40 - 10)
    const randomMax = Math.round(randomMin + Math.random() * 24 + 10)
    return { randomMin, randomMax }
}

export const randomCoordinates = () => {
    const randomSign = Math.random() < 0.5 ? -1 : 1
    const lat = Math.round(Math.random() * 180 * randomSign)
    const long = Math.round(Math.random() * 90 * randomSign)
    return { lat, long }
}