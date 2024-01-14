const development = {
  api: 'https://localhost:7269'
}

const config = process.env.REACT_APP_STAGE === 'development'
    ? development
    : ''

export default {
  ...config
}