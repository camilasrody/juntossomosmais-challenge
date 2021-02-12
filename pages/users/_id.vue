<template>
  <div class="bg-gray-100">
    <div class="px-5 py-4">
    <NuxtLink class="absolute border-1 border-gray-400 rounded-md bg-gray-400 text-gray-800 p-3 hover:bg-gray-500 hover:text-white" to="/"><svg class="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
                                                                                                                                                aria-hidden="true">
      <path fill-rule="evenodd"
            class="text-gray-800"
            d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
            clip-rule="evenodd"/>
    </svg>
    </NuxtLink>
    </div>
    <div class="pb-10 ">
    <div class="container flex flex-col shadow-lg bg-white border-1 borde-gray-300 rounded-md max-w-md ">
    <a class="subtitle capitalize font-semibold -mt-64"
       :href="user.picture.large"
       target="_blank">
      {{ user.name.first }} {{user.name.last}}
    </a>
    <img class="flex justify-center rounded-full border-4 border-gray-300 h-40 w-40 mb-10"
         :src="user.picture.large"
         :alt="user.name.first"/>
    <div class="text-left -py-5 px-10 -mb-64">
      <div class="text-gray-800"><span class="p-2 text-gray-500 font-semibold select-none sm:break-words">Email:</span> {{ user.email }}</div>
    <div class="text-gray-800"><span class="p-2 text-gray-500 font-semibold select-none sm:break-words">Endereço:</span>{{ user.location.street }},{{user.location.city }} - {{ user.location.state }}</div>
      <div class="text-gray-800"><span class="p-2 text-gray-500 font-semibold select-none">CEP:</span> {{ user.location.postcode }}</div>
      <div class="text-gray-800"><span class="p-2 text-gray-500 font-semibold select-none">latitude:</span> {{ user.location.coordinates.latitude }} <br/>
      <span class="p-2 text-gray-500 font-semibold select-none">longitude:</span>{{ user.location.coordinates.longitude }}</div>
    </div>
    </div>
    </div>
  </div>
</template>

<script>
import UserDataService from "~/services/UserDataService";

export default {
  async asyncData({query}) {
    try {
      const email = query.email
      const {user} = await UserDataService.getAll({
        email
      })

      return {
        user
      }
    } catch (error) {
      console.log(error)
    }
  },
}
</script>

<style>
/* Sample `apply` at-rules with Tailwind CSS
.container {
@apply min-h-screen flex justify-center items-center text-center mx-auto;
}
*/
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
  'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
