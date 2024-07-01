export const baseUrl = "https://shift-backend.onrender.com"

//Метод GET берёт массив элементов
export async function GET(path, params = {},  token = null) {
    try{
        // Создание URL с параметрами
        const urlWithParams = new URL(baseUrl + path);
        Object.keys(params).forEach(key => urlWithParams.searchParams.append(key, params[key]));

        //Создание токена зарегистрированного пользователя
        const headers = {'Content-Type': 'application/json'};
        if (token) {headers['authorization'] = `Bearer ${token}`}

        // Выполнение GET-запроса
        const response = await fetch(urlWithParams, {
            method: 'GET',
            headers: headers
        })

        // Преобразование ответа в JSON
        return await response.json();
    }
    catch(error) {
        console.error("Fetch error: ", error)
        throw error;
    }
}

//Метод POST добавляет элемент в конец массива
export async function POST(path, element= {}, token = null) {
    try{
        // Создание URL с параметрами
        const newUrl = new URL(baseUrl + path);

        //Создание токена зарегистрированного пользователя
        const headers = {'Content-Type': 'application/json'};
        if (token) {headers['authorization'] = `Bearer ${token}`}

        // Выполнение POST-запроса
        const response = await fetch(newUrl, {
            method: 'POST',
            headers: headers,
            body: JSON.stringify(element)
        })

        // Преобразование ответа в JSON
        return await response.json();
    }
    catch(error) {
        console.error("Fetch error: ", error)
        throw error;
    }
}

// Метод PUT обновляет элемент целиком
export async function PUT(path, element = {}, token = null) {
    try{
        // Создание URL с параметрами
        const newUrl = new URL(baseUrl + path);

        //Создание токена зарегистрированного пользователя
        const headers = {'Content-Type': 'application/json'};
        if (token) {headers['authorization'] = `Bearer ${token}`}

        // Выполнение PUT-запроса
        const response = await fetch(newUrl, {
            method: 'PUT',
            headers: headers,
            body: JSON.stringify(element)
        })

        // Преобразование ответа в JSON
        return await response.json();
    }
    catch(error) {
        console.error("Fetch error: ", error)
        throw error;
    }
}

//Метод PATCH обновляет конкретное поле элемента
export async function PATCH(path, element = {}, token = null) {
    try{
        // Создание URL с параметрами
        const newUrl = new URL(baseUrl + path);

        //Создание токена зарегистрированного пользователя
        const headers = {'Content-Type': 'application/json'};
        if (token) {headers['authorization'] = `Bearer ${token}`}

        // Выполнение PATCH-запроса
        const response = await fetch(newUrl, {
            method: 'PATCH',
            headers: headers,
            body: JSON.stringify(element)
        })

        // Преобразование ответа в JSON
        return await response.json();
    }
    catch(error) {
        console.error("Fetch error: ", error)
        throw error;
    }
}

//Метод DELETE удаляет конкретный элемент из массива
export async function DELETE (path, token = null) {
    try{
        // Создание URL с параметрами
        const newUrl = new URL(baseUrl + path);

        //Создание токена зарегистрированного пользователя
        const headers = {'Content-Type': 'application/json'};
        if (token) {headers['authorization'] = `Bearer ${token}`}

        // Выполнение DELETE-запроса
        const response = await fetch(newUrl, {
            method: 'DELETE',
            headers: headers,
        })

        // Преобразование ответа в JSON
        return await response.json();
    }
    catch(error) {
        console.error("Fetch error: ", error)
        throw error;
    }
}