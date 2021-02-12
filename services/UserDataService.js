import $axios from "axios"

class UserDataService {

  async getAll(params) {
    try{

      const response = await $axios.get('/api/users', { params })
      return response.data

    }catch(error){
      console.log(error)
    }
  }
}

export default new UserDataService();
