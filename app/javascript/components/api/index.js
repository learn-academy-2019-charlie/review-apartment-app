let getApartments = () => {
    fetch("/apartments")
    .then(resp => {
      return resp.json()
    })
}

module.exports = {
    getApartments
}