import { graphConfig } from "../authConfig";
import { PhotoSize } from "./AuthSSO.types";

export async function getProfilePhoto(accessToken: string, size: PhotoSize = 96) {
  const bearer = `Bearer ${accessToken}`;
  const headers = new Headers();
  headers.append('Authorization', bearer);

  const options = {
    method: 'GET',
    headers,
    responseType: 'blob'
  };

  return fetch(graphConfig.graphMeEndpoint + `/Photos/${size}x${size}/$value`, options)
    .then(response => response.blob())
    .then(res => readFileAsync(res))
    .catch(error => console.log(error));
}

export async function getProfile(accessToken: string) {
  const bearer = `Bearer ${accessToken}`;
  const headers = new Headers();
  headers.append("Authorization", bearer);

  const options = {
      method: "GET",
      headers
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
