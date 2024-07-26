export const BASE_URL = "https://shift-backend.onrender.com"

export const api = {
    get: async function (path, params = {}, token = null) {
        try {
            const urlWithParams = new URL(BASE_URL + path)
            Object.keys(params).forEach((key) =>
                urlWithParams.searchParams.append(key, params[key])
            )

            const headers = { "Content-Type": "application/json" }
            if (token) {
                headers["Authorization"] = `Bearer ${token}`
            }

            const response = await fetch(urlWithParams, {
                method: "GET",
                headers: headers
            })

            return await response.json()
        } catch (error) {
            console.error("Fetch error: ", error)
            throw error
        }
    },
    post: async function (path, element = {}, token = null) {
        try {
            const newUrl = new URL(BASE_URL + path)

            const headers = { "Content-Type": "application/json" }
            if (token) {
                headers["Authorization"] = `Bearer ${token}`
            }

            const response = await fetch(newUrl, {
                method: "POST",
                headers: headers,
                body: JSON.stringify(element)
            })

            return await response.json()
        } catch (error) {
            console.error("Fetch error: ", error)
            throw error
        }
    },
    put: async function (path, element = {}, token = null) {
        try {
            const newUrl = new URL(BASE_URL + path)

            const headers = { "Content-Type": "application/json" }
            if (token) {
                headers["Authorization"] = `Bearer ${token}`
            }

            const response = await fetch(newUrl, {
                method: "PUT",
                headers: headers,
                body: JSON.stringify(element)
            })

            return await response.json()
        } catch (error) {
            console.error("Fetch error: ", error)
            throw error
        }
    },
    patch: async function (path, element = {}, token = null) {
        try {
            const newUrl = new URL(BASE_URL + path)

            const headers = { "Content-Type": "application/json" }
            if (token) {
                headers["Authorization"] = `Bearer ${token}`
            }

            const response = await fetch(newUrl, {
                method: "PATCH",
                headers: headers,
                body: JSON.stringify(element)
            })

            return await response.json()
        } catch (error) {
            console.error("Fetch error: ", error)
            throw error
        }
    },
    delete: async function (path, params = {}, token = null) {
        try {
            const urlWithParams = new URL(BASE_URL + path)
            Object.keys(params).forEach((key) =>
                urlWithParams.searchParams.append(key, params[key])
            )

            const headers = { "Content-Type": "application/json" }
            if (token) {
                headers["Authorization"] = `Bearer ${token}`
            }

            const response = await fetch(urlWithParams, {
                method: "DELETE",
                headers: headers
            })

            return await response.json()
        } catch (error) {
            console.error("Fetch error: ", error)
            throw error
        }
    }
}
