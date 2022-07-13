const STAGING_URL = "";
const TEST_URL = "https://carrierjobsboard.azurewebsites.net/api";
const LIVE_URL = "";

export const BASE_URL = TEST_URL;

const PREFIX_URL = BASE_URL + "v1";

export const API = {
  GetInventory: `${BASE_URL}/`,
  GetPriceEstimation: `${BASE_URL}/`,
};

export const RESPONSE = {
  success: 200,
  unAuthorized: 401,
};
