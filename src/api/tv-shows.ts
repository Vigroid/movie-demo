// import axios from "axios";
// import axios from "axios";
import { FAKE_POP_TV, FAKE_RECOMMENDATIONS } from "./fake_data";
// import { API_KEY_PARAMS, BASE_URL } from "../config";

export class TVShowAPI {
    static async fetchPopulars() {
        // const response = await axios.get(`${BASE_URL}tv/popular${API_KEY_PARAMS}`)
        return FAKE_POP_TV
    }

    static async fetchRecommendations(tvShowId: string) {
        // const response = await axios.get(`${BASE_URL}tv/${tvShowId}/recommendations${API_KEY_PARAMS}`)
        // console.log(response.data.results)
        // return response.data.results
        return FAKE_RECOMMENDATIONS
    }
}