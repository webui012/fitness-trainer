export const SignInSaveData = data =>
  // new Promise((resolve, reject) => {
  //   setTimeout(() => {
  //     resolve(data);
  //   }, 3000);
  // });
  fetch('http://localhost:1312/users/signup', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ ...data }),
    })
    .then(response => {
      if (response.status !== 200) {
        console.log(`Oops, problem. Status Code: ${response.status}`);
        return;
      }
      return response.json();
    });

    

export const logInSearchData = (data) =>
  // new Promise((resolve, reject) => {
  //   setTimeout(() => {
  //     resolve(data);
  //   }, 3000);
  // });
 fetch('http://localhost:1312/users/login', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ ...data }),
    })
    .then(response => {
      if (response.status !== 200) {
        console.log(`Oops, problem. Status Code: ${response.status}`);
        return;
      }
      //console.log(response);
      return response.json();
    });


    export const logoutUser = () =>
  // new Promise((resolve, reject) => {
  //   setTimeout(() => {
  //     resolve(data);
  //   }, 3000);
  // });
 fetch('http://localhost:1312/users/logout', {
      method: 'POST',
     
      // headers: {
      //   Accept: 'application/json',
      //   'Content-Type': 'application/json',
      // }
    })
    .then(response => {
      if (response.status !== 200) {
        console.log(`Oops, problem. Status Code: ${response.status}`);
        return;
      }
      //console.log(response);
      return response.json();
    });