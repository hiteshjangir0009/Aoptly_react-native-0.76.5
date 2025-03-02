import { Alerts } from "./constants/constants";


export const Live_url = `http://15.207.246.123:9000/api/v1/`;
// export const Img_url = `${url}api/image/`;


// api names
export const API_url = {
    Register: `${Live_url}user/register`,
    Login: `${Live_url}user/login`,
    Address: `${Live_url}user/address`,
    Adopted_pet: `${Live_url}user/adopted_pet`,

    Request_form: `${Live_url}request/adoption_req`,
    Add_pets: `${Live_url}pets/add_pets`,
    Get_pets: `${Live_url}pets/get_pets`,

};



export const postApi = async (Url, formdata, token) => {

    const myHeaders = new Headers();
    myHeaders.append("Authorization", `Bearer ${token}`);

    const requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: formdata,
        redirect: "follow"
      };

    const response = await fetch(Url, requestOptions);
    return response.json();

};


export const getApi = async (Url, token) => {
    var myHeaders = new Headers();
    // myHeaders.append("token", token);
    myHeaders.append("Authorization", `Bearer ${token}`);

    var requestOptions = {
        method: "GET",
        headers: myHeaders,
        redirect: 'follow',
    };

    const response = await fetch(Url, requestOptions);
    return await response.json();
};