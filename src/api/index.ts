import axios from "axios";

const TIMEOUT_IN_MILLISECONDS = 1000 * 10;

export default axios.create({
  timeout: TIMEOUT_IN_MILLISECONDS,
});
