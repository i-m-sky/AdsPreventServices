const axios = require("axios");

const test = async (req, res) => {

    const data = await axios.get('http://localhost:4000/alluser', {
        headers: { "auth-token": 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxY2E5NGQwYzcxMTZmNDFkOWZjYjllZCIsIm5hbWUiOiJBZG1pbiIsInJvbGUiOiJBZG1pbiIsImlhdCI6MTY0MTQ2OTE0NCwiZXhwIjoxNjczMDI2NzQ0fQ.nxTmyU8bxKsvnto_O0yBuESuxa3uT0LxSQ-XHPbsMeY' }
    })
    const userdata = data.data
    return res.json(userdata)

}

module.exports = test;
