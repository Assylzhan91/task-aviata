import Vue from 'vue'
import Vuex from 'vuex'
import { airlines, flights } from '@/data/results.json'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    airlines,
    flights: [],
    uniqueFlights: []
  },
  getters: {
    getListAirlines() {
      return airlines
    },

    getAllAirlinesDates(state) {
      return state.flights.filter(item => item.isChecked)
    },
    getUniqueAirlines(state) {
      return state.flights
    },
  },
  mutations: {
    setFlights (state) {
      state.flights = flights.map(item => {
        let { itineraries } = item
        let {carrier_name} = itineraries[0][0]
        let obj = {}
        obj.price = item.price
        obj.refundable = item.refundable
        obj.id = item.id
        obj.titleAirline = carrier_name
        obj.validating_carrier = item.validating_carrier
        Vue.set(obj, 'isChecked', true)
        return obj
      })
    },
    setFilteredFlights (state, key) {
      state.uniqueFlights = state.flights.map(item => {
        if(item.validating_carrier === key) {
          item.isChecked = !item.isChecked
        }
        return item
      })

    },
  },
  actions: {
    setFlightsAction({commit}){
      commit('setFlights')
    },
    setFilteredFlightsAction ({commit}, key) {
      commit('setFilteredFlights', key)
    },
  },
  modules: {
  }
})
