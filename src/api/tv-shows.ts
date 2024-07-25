// import axios from "axios";
import { FAKE_POP_TV } from "./fake_data";

export class TVShowAPI {
    static async fetchPopulars() {
        return FAKE_POP_TV
    }
}