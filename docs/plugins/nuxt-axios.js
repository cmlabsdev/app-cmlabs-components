export default async function ({ $axios, redirect }) {
  const loginResponse = await $axios.post(
    'https://kv3.cmlabs.dev/api/auth/login',
    {
      email: 'amrilazhar@gmail.com',
      password: 'Share123',
      type: 'email',
    }
  )

  const {
    data: {
      data: { token },
    },
  } = loginResponse
  const HARD_CODE_TOKEN = token.value

  $axios.onRequest((config) => {
    config.headers.Authorization = `Bearer ${HARD_CODE_TOKEN}`
  })
}
