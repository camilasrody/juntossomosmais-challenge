// const qs = require('querystring');
// const fetch = require('node-fetch');
const axios = require('axios')

// Docs on event and context https://www.netlify.com/docs/functions/#the-handler-method
const handler = async (event) => {
  try {
    // const { query } = qs.parse(event.body);
    // const subject = event.queryStringParameters.name || 'World'
   const response = await axios('https://gist.githubusercontent.com/camilasrody/3717909d904d9c3049441c2e004101ac/raw/6c2a514b671b48a49c28a34fa3f3ebae56e8b49b/users.json')

    return {
      statusCode: 200,
      body: JSON.stringify( response.data ),
      headers: { "content-type": "application/json" },
    }
  } catch (error) {
    return { statusCode: 500, body: error.toString() }
  }
}

module.exports = { handler }