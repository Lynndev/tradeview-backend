const { sanitizeEntity } = require('strapi-utils');

module.exports = {
  /**
   * Retrieve a record.
   *
   * @return {Object}
   */

  async findOne(ctx) {
    const { slug } = ctx.params;

    const entity = await strapi.services.article.findOne({ slug });
    return sanitizeEntity(entity, { model: strapi.models.article });
  },

  async getHomeData() {
    let entities
    entities = await strapi.services.article.search({ slug });
    return sanitizeEntity(entities, { model: strapi.models.article })
  }

};
