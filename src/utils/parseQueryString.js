import queryString from "query-string";

export default function paseQueryString(string) {
  return queryString.parse(string);
}
