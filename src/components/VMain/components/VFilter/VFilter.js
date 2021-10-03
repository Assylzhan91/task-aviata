import {mapGetters, mapActions} from "vuex";
export default {
  name: "VFilter",
  props: {
    title: String
  },
  computed: {
    ...mapGetters([
      'getListAirlines',
      'getUniqueAirlines'
    ]),
  },
  methods: {
    ...mapActions([
      'setFilteredFlightsAction'
    ]),
    checkedHandler(key) {
      console.log(key)
      // this.$forceUpdate()
      this.setFilteredFlightsAction(key)
    }
  },

}
