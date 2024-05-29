import ApiKey from "../../../apikey.json";

const key = ApiKey.key;

export default function api() {
  return (
    <div>{key}</div>
  )
}

