export const SignInSaveData = data =>
  fetch('http://localhost:1312/users/signup', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-type': 'application/json; charset=UTF-8',
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



export const logInSearchData = data =>
 fetch('http://localhost:1312/users/login', {
      method: 'post',
      mode: 'cors',
      credentials: 'include',
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
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


export const logoutUser = () =>
 fetch('http://localhost:1312/users/logout', {
      method: 'post',
      mode: 'cors',
      credentials: 'include',
    })
    .then(response => {
      if (response.status !== 200) {
        console.log(`Oops, problem. Status Code: ${response.status}`);
        return;
      }
      return response.json();
    });
