<template>
  <div>
    <nav class="bg-gray-300 py-5 px-5">
      <div class="sm:px-6">
        <div class="flex justify-between">
          <div class="flex items-center h-16 w-full">
            <div class="flex-shrink-0">
              <NuxtLink to="/">
                <img
                  class="h-32 w-32"
                  src="~/assets/logo.svg"
                  alt="Workflow logo"
                >
              </NuxtLink>
            </div>
            <div class="w-full hidden md:block flex px-10">
              <div class="relative">
                <input
                  class="px-6 w-full rounded-full py-3 text-md leading-none text-gray-700 font-medium focus:outline-none focus:text-blue focus:text-gray-800 focus:shadow-xs"
                  v-model="searchQuery"
                  placeholder="Buscar aqui"
                >
                <button type="submit" class="absolute right-0 top-0 mt-3 mr-4 focus:outline-none">
                  <svg
                    id="Capa_1"
                    class="h-4 w-4 fill-current text-gray-700"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlns:xlink="http://www.w3.org/1999/xlink"
                    version="1.1"
                    x="0px"
                    y="0px"
                    viewBox="0 0 56.966 56.966"
                    style="enable-background:new 0 0 56.966 56.966;"
                    xml:space="preserve"
                    width="512px"
                    height="512px"
                  >
                  <path d="M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23  s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92  c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17  s-17-7.626-17-17S14.61,6,23.984,6z" />
                </svg>
                </button>
              </div>
            </div>
          </div>
          <div class="hidden md:block flex-shrink-0 h-16">
            <div class="ml-4 flex items-center md:ml-6 h-16">
              <span class="animate-ping  -mt-5 absolute inline-flex h-3 w-3 rounded-full bg-red-400 opacity-75"></span>
              <span class="-mr-8 -mt-5 relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
              <button
                class="p-1 border-2 border-transparent text-gray-600 rounded-full hover:text-gray-500 focus:outline-none hover:animate-ping "
                aria-label="Notifications"
              >
                <svg
                  class="h-6 w-6"
                  stroke="currentColor"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                  />
                </svg>
              </button>

              <!-- Profile dropdown -->
              <div class="ml-3 relative">
                <div>
                  <button
                    id="user-menu"
                    class=" border border-gray-400 rounded-full max-w-xs flex items-center text-sm rounded-full text-white focus:outline-none focus:shadow-solid focus:border-gray-700"
                    aria-label="User menu"
                    aria-haspopup="true"
                    @click="toggle"
                  >
                    <img
                      class="h-12 w-12 rounded-full"
                      src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                      alt
                    >
                  </button>
                </div>
                <div
                  v-show="isOpen"
                  class="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg"
                >
                  <div
                    class="py-1 rounded-md bg-white shadow-xs"
                    role="menu"
                    aria-orientation="vertical"
                    aria-labelledby="user-menu"
                  >
                    <a
                      href="#"
                      class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      role="menuitem"
                    >Meu Perfil</a>
                    <a
                      href="#"
                      class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      role="menuitem"
                    >Sair</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="-mr-2 flex md:hidden">
            <!-- Mobile menu button -->
            <button
              class=" h-10 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-600 focus:outline-none focus:bg-gray-600 focus:text-white"
              @click="toggle"
            >
              <svg
                :class="[isOpen ? 'hidden' : 'block', 'h-6 w-6']"
                stroke="currentColor"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
              <svg
                :class="[isOpen ? 'block' : 'hidden', 'h-6 w-6']"
                stroke="currentColor"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      <div :class="[isOpen ? '' : 'hidden', 'md:hidden']">
        <div class="flex relative">
          <input
            class="px-6 w-full mx-20 rounded-full py-2 text-md leading-none text-gray-700 font-medium focus:outline-none focus:text-blue focus:text-gray-800 focus:shadow-xs"
            v-model="searchQuery"
            placeholder="Buscar aqui"
          >
          <button type="submit" class="absolute top-0 mt-3 right-0 focus:outline-none">
            <svg
              id="Capa_1"
              class="h-4 w-4 fill-current"
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              version="1.1"
              x="0px"
              y="0px"
              viewBox="0 0 56.966 56.966"
              style="enable-background:new 0 0 56.966 56.966;"
              xml:space="preserve"
              width="512px"
              height="512px"
            >
            <path d="M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23  s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92  c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17  s-17-7.626-17-17S14.61,6,23.984,6z" />
          </svg>
          </button>
        </div>

        <div class="px-2 pt-2 pb-3 sm:px-3">
          <a
            href="#"
            class="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-white hover:bg-gray-500 focus:outline-none focus:text-white focus:bg-gray-700"
          >Home</a>
        </div>
        <div class="pt-4 pb-3 border-t border-gray-700">
          <div class="flex items-center px-5">
            <div class="flex-shrink-0">
              <img
                class="h-10 w-10 rounded-full"
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                alt
              >
            </div>
            <div class="ml-3">
              <div class="text-base font-medium leading-none text-gray-700">
                Richard Montier
              </div>
              <div class="mt-1 text-sm font-medium leading-none text-gray-600">
                montier@example.com
              </div>
            </div>
          </div>
          <div class="mt-3 px-2">
            <a
              href="#"
              class="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-white hover:bg-gray-500 focus:outline-none focus:text-white focus:bg-gray-700"
            >Profile</a>
            <a
              href="#"
              class="mt-1 block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-white hover:bg-gray-500 focus:outline-none focus:text-white focus:bg-gray-700"
            >Sign out</a>
          </div>
        </div>
      </div>
    </nav>
    <div class="flex flex-col bg-white px-5 md:flex-row bg-gray-100">
      <div class="flex flex-row w-full py-6 md:w-2/12 md:flex-col md:px-6 md:px-8">
        <span class="select-none rounded-md font-semibold mb-2 text-gray-900 mr-4">Filtrar por região</span>
        <div class="inline-flex items-center" v-for="(item, index) in regions" :key="index">
          <input class="h-4 w-4 text-red-900" type="checkbox" :id="item.name"
                 v-model="item.checked" @change="updateSelectedRegions">
          <label class="capitalize mx-2 text-md text-gray-900" :for="item.name">{{ item.name }}</label>
        </div>
      </div>
      <main class="w-full sm:w-10/12 mb-16">
        <Head/>

        <div class="flex flex-wrap items-stretch justify-center md:justify-start">
          <div v-for="(user, index) in results" v-if="results.length > 0"
               class="max-w-xs px-5 py-3 mx-5 my-8 bg-white rounded-lg shadow-xl sm:w-1/2 lg:w-1/3"
               :key="`user-${index}`">
            <div class="p-2 photo-wrapper">
              <NuxtLink :to="`users?email=${user.email}`">
                <img class="w-32 h-32 mx-auto border-4 border-gray-500 border-opacity-25 rounded-full"
                     :src="`${user.picture.large}`" alt="`${user.name.first} ${user.name.last}`">
              </NuxtLink>
            </div>
            <div class="p-2">
              <h3 class="text-xl font-medium leading-8 text-center text-gray-900">
                <NuxtLink class="capitalize" :to="`users?email=${user.email}`">{{ user.name.title }} {{ user.name.first }} {{
                    user.name.last
                  }}
                </NuxtLink>
              </h3>
              <div class="text-xs font-semibold text-center text-gray-400">
                <p>{{ user.name.jobTitle }}</p>
              </div>
              <div class="my-3 text-xs py-3 ">
                <div>
                  <div class="pt-2 font-semibold text-gray-500 tracking-wide select-none">E-mail</div>
                  <span class="tracking-wider break-words">{{ user.email }}</span>
                  <div class="pt-2 font-semibold text-gray-500 select-none">Endereço</div>
                  <span class="capitalize tracking-wider break-words">
                     {{ user.location.street }}, {{
                      user.location.city
                    }} - {{ user.location.state }} - CEP: {{ user.location.postcode }}
                        <div class="hidden">latitude: {{ user.location.coordinates.latitude }}
                        longitude: {{ user.location.coordinates.longitude }}</div>
                  </span>
                </div>
              </div>
              <div class="my-3 text-center">
                <NuxtLink
                  class="px-3 py-2 text-sm font-medium text-gray-700 bg-gray-300 hover:border hover:border-transparent rounded-md p-1 hover:bg-gray-500 hover:text-white font-semibold hover:border-gray-300 focus:outline-none"
                  :to="`users?email=${user.email}`">Ver mais
                </NuxtLink>
              </div>
            </div>

          </div>

        </div>
        <section id="prev-next" class="" @click="$nuxt.refresh" v-if="pageCount > 1">
          <div class="mb-10 sm:flex-1 sm:flex sm:items-center sm:justify-between pt-10">
            <p class="text-sm text-gray-700">
              Página
              <span class="font-semibold">{{ page }}</span>
              |
              <span class="font-medium">{{ pageCount }}</span>
              Resultados
            </p>
          </div>
          <div class="flex justify-center">
            <nuxt-link
              class="mx-2 md:inline-flex items-center border bg-gray-300 hover:border hover:bg-gray-400 p-2 rounded-md"
              :to="`/?page=${page - 1}&searchQuery=${searchQuery}&regions=${selectedRegions}`" v-if="page > 1">
              <svg class="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
                   aria-hidden="true">
                <path fill-rule="evenodd"
                      d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                      clip-rule="evenodd"/>
              </svg>
            </nuxt-link>
            <div class="flex items-stretch">
            <span
              class="mx-1 md:inline-flex items-center px-4 py-2 font-semibold rounded border border-gray-300 bg-gray-300 text-sm font-medium text-gray-800">{{
                page
              }}</span>
              <nuxt-link
                class="mx-2 md:inline-flex items-center px-4 py-2 rounded hover:border hover:border-gray-300 hover:bg-gray-300 text-sm font-medium text-gray-800"
                :to="`/?page=${page + 1}&searchQuery=${searchQuery}&regions=${selectedRegions}`" v-if="page+1 != pageCount && pageCount > 1"> {{ page + 1 }}
              </nuxt-link>
            </div>
            <nuxt-link
              class="md:inline-flex items-center border bg-gray-300 hover:border hover:bg-gray-400 p-2 rounded-md"
              :to="`/?page=${page + 1}&searchQuery=${searchQuery}&regions=${selectedRegions}`" v-if="page+1 != pageCount && pageCount > 1">
              <svg class="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"
                   fill="currentColor" aria-hidden="true">
                <path fill-rule="evenodd"
                      d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                      clip-rule="evenodd"/>
              </svg>
            </nuxt-link>

          </div>
        </section>

      </main>
    </div>
  </div>
</template>

<script>
import UserDataService from "../services/UserDataService"

export default {
  watch: {
    '$route.query': '$fetch',
    'selectedRegions': '$fetch',
    'searchQuery': '$fetch',
  },
  mounted(){
    this.searchQuery = this.$route.query.searchQuery || ''
  },
  async fetch() {
    try {
      const page = parseInt(this.$route.query.page || '1') || 1
      if(this.$route.query.regions){
        this.regions = this.regions.map(region => {
          region.checked = (this.$route.query.regions || '').split(',').includes(region.name)
          return region
        })
      }

      const {results, meta} = await UserDataService.getAll({
        page,
        searchQuery: this.searchQuery,
        regions: this.selectedRegions
      })

      this.results = results
      this.page = page
      this.pageCount = meta.pageCount

    } catch (error) {
      console.log(error)
    }
  },
  data() {
    return {
      results: [],
      pageCount: 0,
      renderedOn: 0,
      selectedRegions: "",
      regions: [{
        name: 'especial',
        checked: true
      },
        {
          name: 'normal',
          checked: true
        },
        {
          name: 'trabalhoso',
          checked: false
        }],
      isOpen: false,
      searchQuery: ''
    }
  },
  created() {
    this.$fetch()
  },
  methods: {
    updateSelectedRegions() {
      this.selectedRegions = this.regions.filter(item => item.checked).map(region => region.name).join()
    },
    toggle () {
      this.isOpen = !this.isOpen
    }
  },
  // computed: {
  //   selectedRegions() {
  //     return this.regions.filter(item => item.checked).map(region => region.name)
  //   }
  // }
  // computed: {
  //   especial: {
  //     get() {
  //       return this.$store.state.especial
  //     },
  //     set(value) {
  //       this.$store.commit('updateEspecial', value)
  //     }
  //   },
  //   normal: {
  //     get() {
  //       return this.$store.state.normal
  //     },
  //     set(value) {
  //       this.$store.commit('updateNormal', value)
  //     }
  //   },
  //   trabalhoso: {
  //     get() {
  //       return this.$store.state.trabalhoso
  //     },
  //     set(value) {
  //       this.$store.commit('updateTrabalhoso', value)
  //     }
  //   },
  // }
}
</script>
