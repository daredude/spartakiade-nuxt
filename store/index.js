export const state = () => ({
    breadcrumbLinks: []
})

export const mutations = {
    SET_BREADCRUMB_LINKS(state, breadcrumbLinks) {  
        state.breadcrumbLinks = breadcrumbLinks
    }
}