export default {
    async contactCoach(context, payload){
        const newRequest = {
    
            userEmail: payload.userEmail,
            message: payload.message
        }

       const response = await fetch(`https://coach-finder-c95e2-default-rtdb.firebaseio.com/requests/${payload.coachId}.json`, 
       {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(newRequest)
       } )

       const responseData = await response.json()
       
       if (!response.ok) {
        const error = new Error(responseData.message || 'Failed to send request!');
        throw error;
      }
  

       console.log(responseData)
       newRequest.id = responseData.name
       newRequest.coachId = payload.coachId

        context.commit('addRequest', newRequest)
    },

    async fetchRequests(context){
        const coachId = context.rootGetters.userId
       const response = await fetch(`https://coach-finder-c95e2-default-rtdb.firebaseio.com/requests/${coachId}.json`) 
        const responseData = await response.json()
        
        if (!response.ok) {
            const error = new Error(responseData.message || 'Failed to fetch requests!');
            throw error;
        }

        const request = []

        for(const  key in responseData) {
            const request = {
                id: key,
                coachId: coachId,
                userEmail: responseData[key].userEmail,
                message: responseData[key].message
            }
            request.push(request)
        }
        context.commit('setRequests', request)
    }
}