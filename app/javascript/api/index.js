let getApartments = () => {
    return fetch("/apartments")
    .then(resp => {
      return resp.json()
    })
}

export {
    getApartments
}