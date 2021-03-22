import axios from "axios";

async function fetchGraphQL(query: string, url?: string) {
  if (url && query) {
    return axios({
      method: "post",
      url: url,
      data: query,
    });
  }
}

export default fetchGraphQL;
