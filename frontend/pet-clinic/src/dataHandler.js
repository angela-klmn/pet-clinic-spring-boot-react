
export async function apiGet(url) {
    let response = await fetch(url, {
        method: "GET",
    });
    if (response.status === 200) {
        let data = response.json();
        return await data;
    }
}


export async function apiPost(url, payload) {
    let response = await fetch(url, {
        method: "POST",
        headers: {"Content-type": "application/json"},
        body: JSON.stringify(payload)
    });
}

export async function apiDelete(url) {
    let response = await fetch(url, {
        method: "DELETE",
        headers: {'Content-type': 'application/json'}
    });
}

export async function apiPut(url, payload) {
    let response = await fetch(url, {
        method: "PUT",
        headers: {"Content-type": "application/json"},
        body: JSON.stringify(payload)
    })
}

