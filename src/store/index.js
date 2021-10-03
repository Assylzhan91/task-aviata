import Vue from 'vue'
import Vuex from 'vuex'
import { airlines, flights } from '@/data/results.json'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    airlines,
    flights: [],
    uniqueFlights: [],
    checkedAllAirlines: true,
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
    getCheckedAllAirlines(state) {
      return state.checkedAllAirlines
    },
    setFilteredFlights (state) {
      let key = 'titleAirline'
      state.uniqueFlights = [...new Map(state.flights.map(item => {
        return [item[key], item]
      })).values()];
      return state.uniqueFlights
    },
    getEveryIsChecked(state) {
      return state.uniqueFlights.every(item => {
        return item.isChecked
      })
    }
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
    checkAll(state, {getters: {setFilteredFlights}}) {
      let everyIsChecked = setFilteredFlights.every(item => item.isChecked)
      state.flights.map(item => {
        if(!everyIsChecked){
          item.isChecked = true
        } else {
          item.isChecked = false
        }
      })
      state.checkedAllAirlines = !state.checkedAllAirlines
    },
    setFilteredFlights(state, val_carrier ) {
      state.flights.map(item => {
        if(item.validating_carrier === val_carrier) {
          if(item.isChecked) {
            item.isChecked = false
            state.checkedAllAirlines = false
          } else {
            item.isChecked = true
          }
        }
        return item
      })
    }
  },
  actions: {
    setFlightsAction({commit}){
      commit('setFlights')
    },
    setFilteredFlightsAction (store, val_carrier) {
      store.commit('setFilteredFlights', val_carrier)
      let { getters, state } = store
      if(getters.getEveryIsChecked){
        state.checkedAllAirlines = true
      }
    },
    checkAllAction ({commit, getters}) {
      commit('checkAll', {getters})
    },
  },
  modules: {
  }
})
