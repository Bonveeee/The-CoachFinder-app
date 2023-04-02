export default {
        requests(state, getters, rootState, rootGetters) {
            const coachId = rootGetters.userId
            return state.requests.filter(request => request.coachId === coachId);
        
        },
        hasRequests(_, getters) {
            return getters.requests && getters.requests.length > 0;
        }
}