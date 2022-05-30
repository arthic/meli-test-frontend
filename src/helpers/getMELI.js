export const getMeliSearch = async (category) => {
    let busqueda = encodeURI(category)
    console.log(busqueda);
    const url = `https://meli-test-backend.herokuapp.com/api/items?q=​${busqueda}`

    const resp = await fetch(url)
    console.log(resp);
    return resp
}

export const getItemDescription = async (item) => {
    let busqueda = encodeURI(item)
    const url = `https://meli-test-backend.herokuapp.com/api/items/${busqueda}`

    const resp = await fetch(url)
    return resp
}
