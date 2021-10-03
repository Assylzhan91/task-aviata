import VFlightWay from "./components/VFlightWay";
import VFilter from "./components/VFilter";
import VDetailsTravel from "./components/VFlightWay/components/VDetailsTravel";
import VBuyTicket from "./components/VFlightWay/components/VBuyTicket";
import VSchedule from "./components/VFlightWay/components/VSchedule";
import {mapGetters, mapActions} from "vuex";

export default {
  name: "VMain",
  components: {
    VDetailsTravel,
    VBuyTicket,
    VFlightWay,
    VSchedule,
    VFilter
  },
  computed: {
    ...mapGetters([
      'getListAirlines',
      'getAllAirlinesDates',
    ])
  },
  methods: {
    ...mapActions([
      'setFlightsAction'
    ])
  },
  mounted() {
    this.setFlightsAction()
  }
}
