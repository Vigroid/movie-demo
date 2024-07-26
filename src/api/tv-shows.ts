// import axios from "axios";
import axios from "axios";
// import { FAKE_POP_TV, FAKE_RECOMMENDATIONS } from "./fake_data";
import { BASE_URL } from "../config";
// import { API_KEY_PARAMS, BASE_URL } from "../config";

export class TVShowAPI {

    static fetchAPIKey() {
        return process.env.REACT_APP_API_KEY_PARAMS
    }

    static async fetchPopulars() {
        const response = await axios.get(`${BASE_URL}tv/popular?api_key=${TVShowAPI.fetchAPIKey()}`)
        return response.data.results
        // return FAKE_POP_TV
    }

    static async fetchRecommendations(tvShowId: string) {
        const response = await axios.get(`${BASE_URL}tv/${tvShowId}/recommendations?api_key=${TVShowAPI.fetchAPIKey()}`)
        return response.data.results
        // return FAKE_RECOMMENDATIONS
    }

    static async fetchByTitle(title: string) {
        const response = await axios.get(
            `${BASE_URL}search/tv?api_key=${TVShowAPI.fetchAPIKey()}&query=${title}`
        )
        return response.data.results
    }
}