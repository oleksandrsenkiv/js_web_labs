import axios from "axios";

export const getPrintersList = (filterCondition) => {
    return axios.get("http://localhost:8080/api/printers", { params: filterCondition });
};

export const getDefaultPrintersList = () => {
    return axios.get("http://localhost:8080/api/printer");
};

export const getPrinterInfo = (printerId) => {
    return axios.get(`http://localhost:8080/api/printer/${printerId}`);
};