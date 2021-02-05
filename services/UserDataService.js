import $axios from "axios";
import * as geolib from 'geolib';

class UserDataService {
  async getAll(params) {
    
    const response = await $axios.get('/.netlify/functions/users', { params })
    return response.data.results
  }

  inside(point, vs) {
      // ray-casting algorithm based on
      // https://wrf.ecse.rpi.edu/Research/Short_Notes/pnpoly.html/pnpoly.html
      
      var x = point[0], y = point[1];
      
      var inside = false;
      for (var i = 0, j = vs.length - 1; i < vs.length; j = i++) {
          var xi = vs[i][0], yi = vs[i][1];
          var xj = vs[j][0], yj = vs[j][1];
          
          var intersect = ((yi > y) != (yj > y))
              && (x < (xj - xi) * (y - yi) / (yj - yi) + xi);
          if (intersect) inside = !inside;
      }
      
      return inside;
  }

  async getEspecial(params) {
    
    const response = await $axios.get('/.netlify/functions/users', { params })
    const users = response.data.results;

    return  users.filter(user => {
      // console.log(parseFloat(user.location.coordinates.latitude)+ ","+parseFloat(user.location.coordinates.longitude))
      let isFound = false

      if( user.location.coordinates.latitude > -15.411580 && user.location.coordinates.longitude > -46.361899 &&
          user.location.coordinates.latitude < -2.196998 && user.location.coordinates.longitude < -34.276938 ){
        isFound = true
      }

      // const isFound = this.inside([ 
      //   parseFloat(user.location.coordinates.latitude), 
      //   parseFloat(user.location.coordinates.longitude) 
      // ],[
      // [ -15.411580, -46.361899 ],
      // [ -2.196998, -34.276938 ],
      // ])
      // const isFound2 = this.inside([ 
      //   parseFloat(user.location.coordinates.latitude), 
      //   parseFloat(user.location.coordinates.longitude) 
      // ],[
      // [ -20.000000, -52.997614 ],
      // [ -19.766959, -44.428305 ],
      // ])

      // if(isFound){
      //   console.log('encontradoooooooooooooooooooooooooooooooooooooooooo')
      // }else{
      //   console.log('não encontrado no -34.016466,-54.777426 ou -26.155681, -46.603598')
      // }

      // if(isFound2){
      //   console.log('encontradoooooooooooooooooooooooooooooooooooooooooo')
      // }else{
      //   console.log('não encontrado no -20.000000,-52.997614 ou -19.766959, -44.428305')
      // }

      return isFound
    })
  }
}

export default new UserDataService();