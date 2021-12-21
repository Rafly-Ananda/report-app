"use strict";
import axios from "axios";

const added_by = "rafly";

const sendGetRequest = async () => {
  try {
    const resp = await axios.get(`/view/${added_by}`);
    console.log(resp.data);
  } catch (err) {
    console.error(err);
  }
};

sendGetRequest();
