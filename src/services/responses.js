async function catalogResponse(setStateFunction) {
  const URL = "https://modnikky-api.herokuapp.com/api/catalog";
  return await fetch(URL).then((res) => res.json()).then((result) => setStateFunction(result))
}

export default catalogResponse