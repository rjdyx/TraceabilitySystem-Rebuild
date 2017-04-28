export default {
    switch_theme: ({commit}, param) => commit('SWITCHTHEME', {theme: param}),
    switch_font: ({commit}, param) => commit('SWITCHFONT', {font: param})
}
