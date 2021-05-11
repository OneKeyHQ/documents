export const loggerReducer = (prev, action) => {
    return `${JSON.stringify(action)}\n${prev}`
}
