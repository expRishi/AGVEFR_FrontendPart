


export async function postData(url) {

    console.log("url", url);

    var myHeaders = new Headers();
    myHeaders.append("Accept", "application/json");
    
    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      redirect: 'follow'
    };
    
    const res = await fetch(url, requestOptions)
      .then(response => response.json())
      .then(result => {
        console.log("result", result);
        return(result);
    }).catch(error => console.log('error1', error));

    console.log("res", res)
    return(res);

    // Default options are marked with *
    // console.log(url);
    // const response = await fetch(url, {
    //   method: 'POST', // *GET, POST, PUT, DELETE, etc.
    //    headers: {
    //      'Accept': 'application/json',
    //      'Content-Type': 'application/json',
    //    },
    //    body: JSON.stringify(data),
    // });
    // if (!response.ok) {
    //     throw new Error('Network response was not ok');
    // }
    // console.log(response);
    // return response.json() // parses JSON response into native JavaScript objects
  }
  
  // name is very misleading have to change it
  export async function postHeaderData(url, data) {
    // Default options are marked with *
    const response = await fetch(url, {
      method: 'GET', // *GET, POST, PUT, DELETE, etc.
      headers: {
        'Content-Type': 'application/json',
        Authorization: data,
      },
      body: '', // body data type must match "Content-Type" header
    })
    return response.json() // parses JSON response into native JavaScript objects
  }
  
  export async function postBHD(url, token, data) {
    const response = await fetch(url, {
      method: 'POST', // *GET, POST, PUT, DELETE, etc.
      headers: {
        'Content-Type': 'application/json',
        Authorization: token,
      },
      body: JSON.stringify(data), // body data type must match "Content-Type" header
    })
    return response.json() // parses JSON response into native JavaScript objects
  }
  
  export async function postBHDFormData(url, token, data) {
    const response = await fetch(url, {
      method: 'POST', // *GET, POST, PUT, DELETE, etc.
      headers: {
        //   'Content-Type': 'multipart/form-data',
        //   'Accept': "application/json",
        Authorization: token,
      },
      body: data, // body data type must match "Content-Type" header
    })
    return response.json() // parses JSON response into native JavaScript objects
  }
  
  export async function putBHD(url, token, data) {
    // Default options are marked with *
    const response = await fetch(url, {
      method: 'PUT', // *GET, POST, PUT, DELETE, etc.
      headers: {
        'Content-Type': 'application/json',
        Authorization: token,
      },
      body: JSON.stringify(data), // body data type must match "Content-Type" header
    })
    return response.json() // parses JSON response into native JavaScript objects
  }
  
  export async function checkToken(url, data) {
    // Default options are marked with *
    const response = await fetch(url, {
      method: 'OPTIONS', // *GET, POST, PUT, DELETE, etc.
      headers: {
        'Content-Type': 'application/json',
        Authorization: data,
      },
      body: '', // body data type must match "Content-Type" header
    })
    return response.json() // parses JSON response into native JavaScript objects
  }
  
  export const makeRequest = async (url, method, token, data = '') => {
    const response = await fetch(url, {
      method,
      headers: {
        'Content-Type': 'application/json',
        Authorization: token,
      },
      body: method === 'GET' ? null : JSON.stringify(data),
    })
    if (response.ok === false) {
      throw new Error('something went wrong')
    }
    return response.json()
  }
  