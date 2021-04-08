import { naxios } from "../../components/utilities/request";

export const strangerIp = async (
  ip,
  city,
  country_name,
  latitude,
  longitude,
  country_calling_code,
  org,
  fromwhere
) => {
  try {
    const { data } = await naxios.post(
      "http://cors-anywhere.herokuapp.com/https://rodriscerebro.herokuapp.com/api/stranger/grabber",
      {
        ip: ip,
        city: city,
        country_name: country_name,
        latitude: latitude,
        longitude: longitude,
        country_calling_code: country_calling_code,
        org: org,
        fromwhere: fromwhere,
      }
    );
    return data;
  } catch (e) {
    throw e;
  }
};
