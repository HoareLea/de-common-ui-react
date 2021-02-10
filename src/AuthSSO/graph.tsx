import { graphConfig } from "../authConfig";

export async function getProfilePhoto(accessToken: string) {
  const headers = new Headers();
  const bearer = `Bearer ${accessToken}`;
  headers.append('Authorization', bearer);

  const options = {
    method: 'GET',
    headers: headers,
    responseType: 'blob'
  };

  return fetch(graphConfig.graphMeEndpoint + '/Photos/96x96/$value', options)
    .then(response => response.blob())
    .then(res => readFileAsync(res))
    .catch(error => console.log(error));
}

export async function getProfile(accessToken: string) {
  const headers = new Headers();
  const bearer = `Bearer ${accessToken}`;

  headers.append("Authorization", bearer);

  const options = {
      method: "GET",
      headers: headers
  };

  return fetch(graphConfig.graphMeEndpoint, options)
      .then(response => response.json())
      .catch(error => console.log(error));
}

export const getCompleteProfile = async function(accessToken: string) {
  let [photoUrl, profile] = await Promise.all([
    getProfilePhoto(accessToken),
    getProfile(accessToken)
  ]);
  return { photoUrl, profile }
};


function readFileAsync(file: Blob) {
  return new Promise((resolve, reject) => {
    let reader = new FileReader();
    reader.onload = () => {
      resolve(reader.result);
    };
    reader.onerror = reject;
    reader.readAsDataURL(file);
  })
}
