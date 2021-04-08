import { naxios } from "../../components/utilities/request";

export const emailContact = async (
  name,
  email,
  subject,
  message,
  fromwhere
) => {
  try {
    const { data } = await naxios.post(
      "/api/email/",
      // "https://rodriscerebro.herokuapp.com/api/email/",
      {
        name: name,
        email: email,
        subject: subject,
        message: message,
        fromwhere: fromwhere,
      }
    );
    return data;
  } catch (e) {
    throw e;
  }
};
