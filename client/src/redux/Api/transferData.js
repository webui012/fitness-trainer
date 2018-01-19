
class TransferData {
//Getting page data for the Contacts page
static dataLocalContacts() {
    return fetch('http://localhost:6289/contacts', {
        method: 'GET',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        }
    })
    .then(response => {
        if (response.status !== 200) {
            console.log(`Oops, problem. Status Code: ${response.status}`);
            return;
        }
        //console.log(response);
        return response.json();
    })
    .then(data => {
        //console.log(data.title);
        return data;
    })
    .catch(error => console.log('error', error.message));
    }
}

export default TransferData