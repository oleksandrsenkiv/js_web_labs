const BASE_URL = "http://localhost:8080/api";
const RESOURSE_URL = `${BASE_URL}/printer`;

const baseRequest = async ({pathUrl = "/printer", method = "GET", body = null,}) => {
  try {
    const reqParams = {
      method,
      headers: {
        "Content-Type": "application/json",
      },
    };

    if (body) {
      reqParams.body = JSON.stringify(body);
    }
    return await fetch(`${BASE_URL}${pathUrl}`, reqParams);
  } catch (error) {
    console.error("HTTP ERROR: ", error);
  }
};
const getAllPrinter = async () => {
  const rawResponse = await baseRequest({ method: "GET" });
  return rawResponse.json();
};

const getSortedPrinter = async () => {
  const rawResponse = await baseRequest({
    pathUrl: `/printersort`,
    method: "GET",
  });
  return rawResponse.json();
};

const postPrinter = (body) => baseRequest({ method: "POST", body });

const updatePrinter = (body) => baseRequest({ method: "PUT", body });

const deletePrinter = (id) =>
  baseRequest({ pathUrl: `/printer/${id}`, method: "DELETE" });