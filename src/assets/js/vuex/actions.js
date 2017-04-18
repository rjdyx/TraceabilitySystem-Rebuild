
// export const addToCart = ({ commit }, product) => {
//   if (product.inventory > 0) {
//     commit(types.ADD_TO_CART, {
//       id: product.id
//     })
//   }
// }
export const increment = ({commit}) => {
    commit('INCREMENT')
}
export const decrement = ({commit}) => {
    commit('DECREMENT')
}
