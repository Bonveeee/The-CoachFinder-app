import mutations from "../auth/mutations"
import actions from "../auth/actions"
import getters from "../auth/getters"

export default {
    state(){
        return {
          userId: 'null',
          token: 'null',
          tokenExpiration: 'null',
        }
      },
      mutations,
      actions,
      getters
}