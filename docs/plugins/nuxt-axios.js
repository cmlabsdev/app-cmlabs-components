export default async function ({ $axios, redirect }) {
  const loginResponse = await $axios.post("https://kv3.cmlabs.dev/api/auth/login", {
    email: "dev@cmlabs.co",
    password: "12345678",
  });
  
  const { data: { data: { token } } } = loginResponse;
  const HARD_CODE_TOKEN = token.value;
  
  $axios.onRequest((config) => {
    config.headers.Authorization = `Bearer ${HARD_CODE_TOKEN}`
  })
}