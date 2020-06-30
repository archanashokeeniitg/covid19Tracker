import axios from "axios";
const url = "https://covid19.mathdro.id/api";

export const fetchData = async (country) => {
  let dynamicUrl = url;
  if (country) {
    dynamicUrl = `${url}/countries/${country}`;
    console.log("dynamicUrl", dynamicUrl);
  }

  try {
    const { data } = await axios.get(dynamicUrl);
    const modifiedData = {
      confirmed: data.confirmed,
      recovered: data.recovered,
      deaths: data.deaths,
      lastUpdate: data.lastUpdate,
    };
    console.log("modiified", modifiedData);
    return modifiedData;
  } catch (error) {
    console.log("errrororor");
  }
};

export const fetchDailyData = async () => {
  try {
    const { data } = await axios.get(`${url}/daily`);
    const modifiedDailyData = data.map((dailyData) => ({
      confirmed: dailyData.confirmed.total,
      deaths: dailyData.deaths.total,
      date: dailyData.reportDate,
    }));
    return modifiedDailyData;
  } catch (error) {
    console.log("error in Index.js");
  }
};

export const countries = async () => {
  try {
    const {
      data: { countries },
    } = await axios.get(`${url}/countries`);
    return countries.map((country) => country.name);
  } catch (error) {
    console.error();
  }
};
