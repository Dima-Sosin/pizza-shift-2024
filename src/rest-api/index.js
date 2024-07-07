export const BASE_URL = "https://shift-backend.onrender.com"

export async function GET(path, params = {},  token = null) {
    try{
        const urlWithParams = new URL(BASE_URL + path);
        Object.keys(params).forEach(key => urlWithParams.searchParams.append(key, params[key]));

        const headers = {'Content-Type': 'application/json'};
        if (token) {headers['authorization'] = `Bearer ${token}`}

        const response = await fetch(urlWithParams, {
            method: 'GET',
            headers: headers
        })

        return await response.json();
    }
    catch(error) {
        console.error("Fetch error: ", error)
        throw error;
    }
}

export async function POST(path, element= {}, token = null) {
    try{
        const newUrl = new URL(BASE_URL + path);

        const headers = {'Content-Type': 'application/json'};
        if (token) {headers['authorization'] = `Bearer ${token}`}

        const response = await fetch(newUrl, {
            method: 'POST',
            headers: headers,
            body: JSON.stringify(element)
        })

        return await response.json();
    }
    catch(error) {
        console.error("Fetch error: ", error)
        throw error;
    }
}

export async function PUT(path, element = {}, token = null) {
    try{
        const newUrl = new URL(BASE_URL + path);

        const headers = {'Content-Type': 'application/json'};
        if (token) {headers['authorization'] = `Bearer ${token}`}

        const response = await fetch(newUrl, {
            method: 'PUT',
            headers: headers,
            body: JSON.stringify(element)
        })

        return await response.json();
    }
    catch(error) {
        console.error("Fetch error: ", error)
        throw error;
    }
}

export async function PATCH(path, element = {}, token = null) {
    try{
        const newUrl = new URL(BASE_URL + path);

        const headers = {'Content-Type': 'application/json'};
        if (token) {headers['authorization'] = `Bearer ${token}`}

        const response = await fetch(newUrl, {
            method: 'PATCH',
            headers: headers,
            body: JSON.stringify(element)
        })

        return await response.json();
    }
    catch(error) {
        console.error("Fetch error: ", error)
        throw error;
    }
}

export async function DELETE (path, token = null) {
    try{
        const newUrl = new URL(BASE_URL + path);

        const headers = {'Content-Type': 'application/json'};
        if (token) {headers['authorization'] = `Bearer ${token}`}

        const response = await fetch(newUrl, {
            method: 'DELETE',
            headers: headers,
        })

        return await response.json();
    }
    catch(error) {
        console.error("Fetch error: ", error)
        throw error;
    }
}