<template>
  <div class="flex flex-col sm:flex-row px-5">
    <div class="w-full sm:w-2/12 flex flex-row sm:flex-col py-6 sm:px-6 lg:px-8">
      <span>Filtrar por usuario:</span>
      <ul>
        <li><input type="checkbox" v-model="especial">Especial</li>
        <li><input type="checkbox" v-model="normal">Normal</li>
        <li><input type="checkbox" v-model="trabalhoso">Trabalhoso</li>
      </ul>
    </div>
    <main class="w-full sm:w-10/12">
      <Head />

      <div class="flex flex-wrap items-stretch justify-start">
          <div v-for="(user, index) in currentUsers" v-if="currentUsers.length"
               class="max-w-xs sm:w-1/2 lg:w-1/3 bg-white shadow-xl rounded-lg px-5 py-3 mx-5 my-3" 
               :key="`user-${index}`">
            <div class="photo-wrapper p-2">
                <NuxtLink :to="`users/${index}`">
                  <img class="w-32 h-32 mx-auto rounded-full border-4 border-gray-500 border-opacity-25" :src="`${user.picture.large}`" alt="`${user.name.first} ${user.name.last}`">
                </NuxtLink>
            </div>
            <div class="p-2">
                <h3 class="text-center text-xl text-gray-900 font-medium leading-8"><NuxtLink :to="`users/${index}`">{{ user.name.title }}. {{ user.name.first }} {{ user.name.last }}</NuxtLink></h3>
                <div class="hidden text-center text-gray-400 text-xs font-semibold">
                    <p>Web Developer</p>
                </div>
                <table class="text-xs my-3">
                    <tbody>
                    <tr>
                        <td class="px-2 py-2 text-gray-500 font-semibold">Email</td>
                        <td class="px-2 py-2">{{ user.email }}</td>
                    </tr>
                      <tr>
                        <td class="px-2 py-2 text-gray-500 font-semibold">Address</td>
                        <td class="px-2 py-2">{{ user.location.street }} {{ user.location.postcode }} {{ user.location.city }} / {{ user.location.state }} 
                              <div class="hidden"> latitude: {{ user.location.coordinates.latitude }}
                              longitude: {{ user.location.coordinates.longitude }}
                            </div>
                        </td>
                    </tr>
                </tbody></table>

                <div class="text-center my-3">
                    <NuxtLink class="rounded font-medium rounded-md shadow-md bg-gray-400 px-3 py-2 text-sm text-bold text-gray-800 hover:text-white bold hover:bg-gray-500 border-2 border-transparent hover:border-gray-300 focus:outline-none" :to="`users/${index}`">Ver Perfil</NuxtLink>
                </div>
            </div>

        </div>
      </div>

      <section id="prev-next" @click="$nuxt.refresh">
        <nuxt-link :to="`/?page=${page - 1}`" v-if="page > 1"> << </nuxt-link>
        <span>{{ page }}</span>
        <nuxt-link :to="`/?page=${page + 1}`" v-if="page+1 != pageCount"> {{ page + 1 }} </nuxt-link>
        <nuxt-link :to="`/?page=${page + 1}`" v-if="page+1 != pageCount"> >> </nuxt-link>
      </section>
    </main>
  </div>
</template>

<script>
import UserDataService from "../services/UserDataService"

  export default {
    async asyncData ({ $axios, $dayjs, query }) {
      const page = parseInt(query.page || '1') || 1
      const perPage = 12
      const skip = perPage * page


      const users = await UserDataService.getAll()
      // const users = await UserDataService.getEspecial()
      
      const currentUsers = users.slice(skip, (skip + perPage))
      const pageCount = Math.ceil(users.length / perPage)

      return {
        users,
        currentUsers,
        page,
        pageCount
      }
    },
    data () {
      return {
        renderedOn: 0,
        especial: true,
        normal: false,
        trabalhoso: false,
      }
    }
  }
</script>
