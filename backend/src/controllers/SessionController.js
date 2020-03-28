const connection = require('../database/connection');

module.exports = {
  async create(request, response) {
    const { id } = request.body;

    try {
      const ngo = await connection('ngos')
        .where('id', id)
        .select('name')
        .first();

      if (!ngo) {
        return response.status(401);
      }
      return response.json(ngo);
    } catch (err) {
      console.error('ERROR', err);
      return response.status(500);
    }
  },

  async delete(request, response) {},
};
