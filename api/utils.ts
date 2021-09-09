

export const repeat = (iterations: number, cb: Function) => {
    for (let i = 1; i <= iterations; i++) {
        cb()
    }
}