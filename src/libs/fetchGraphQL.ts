import Cookies from 'js-cookie'
import Amplify, { Auth, API, graphqlOperation } from "aws-amplify";



// async function jwtToken() {
//   let jwtToken
//   Auth.currentSession().then((res) => {
//     console.log(res);
//     const accessToken = res.getAccessToken()
//     jwtToken = accessToken.getJwtToken()
//   }).catch(err => {
//     console.log(err)
//   });
//   return await jwtToken
// }

async function fetchGraphQL(text, variables) {

  // let api
  // if (process.env.NEXT_PUBLIC_BRANCH_NAME === "staging") {
  //   api = `${process.env.NEXT_PUBLIC_API_STAGING_HOST}/graphql`
  // } else {
  //   if (process.browser) {
  //     api = `${process.env.NEXT_PUBLIC_API_HOST}/graphql`
  //   } else {
  //     api = `${process.env.NEXT_PUBLIC_API_SSR_HOST}/graphql`
  //   }
  // }

  // console.log(jwtToken())
  // console.log(Cookies.get("jwtToken"))

  const response = await fetch(process.env.NEXT_PUBLIC_API_HOST, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      // 'X-Api-Key': process.env.NEXT_PUBLIC_AWS_API_KEY,
      // 'webToken': 'toyasoft',
      'Authorization': `${Cookies.get("jwtToken")}`
      // "publicWebsiteToken": process.env.NEXT_PUBLIC_WEBSITE_TOKEN
    },
    body: JSON.stringify({
      query: text,
      variables,
    }),
  });


  return await response.json();
}

export default fetchGraphQL;