
class APIFeatures {
  constructor(req, res) {
    this.req = req;
    this.res = res;
  }

  limit() {
    if (this.res.data) {

    }
  }
}

const API = new APIFeatures();

module.exports = API;