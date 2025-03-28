export const selectProductsCount = (rootReducer) => {
    return rootReducer.cartReducer.products.reduce((acc, current) => acc + current.quantity, 0)
}
// reduce é um for basicamente
// acumulador (acc): Armazena o valor acumulado durante as iterações.
// valorAtual (curr): O item atual que está sendo processado no array.
export const selectProductsTotalPrice = (rootReducer) => {
    return rootReducer.cartReducer.products.reduce((acc, curr) => acc + curr.price * curr.quantity,0)
}