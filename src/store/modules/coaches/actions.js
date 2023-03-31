export default {
    registerCoach(context, data){
        const coachData = {
            id: context.rootGetters.userId,
            firstName: data.first,
            lastName: data.last,
            description: data.descr,
            hourlyRate: data.rate,
            areas: data.areas
        }

        context.commit('registerCoach', coachData)
    }
}