import {mapGetters, mapActions} from "vuex";
export default {
  name: "VFilter",
  props: {
    title: String
  },
  computed: {
    ...mapGetters([
      'setFilteredFlights',
      'getUniqueAirlines',
      'getCheckedAllAirlines',
    ])
  },
  methods: {
    ...mapActions([
      'setFilteredFlightsAction',
      'checkAllAction'
    ]),
    checkedHandler(val_carrier) {
      this.setFilteredFlightsAction(val_carrier)
    }
  },

}
