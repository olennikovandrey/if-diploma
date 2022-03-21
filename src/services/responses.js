async function catalogResponse(setStateFunction, setLoading) {
  try {
  const URL = "https://modnikky-api.herokuapp.com/api/catalog";
  await fetch(URL).then((res) => res.json()).then((result) => setStateFunction(result));
  setLoading(false);
  } catch {
    (error) => console.log(error);
    setLoading(true);
  }
}

export default catalogResponse;
