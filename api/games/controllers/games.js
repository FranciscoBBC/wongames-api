'use strict';

/**
 * Read the documentation (https://strapi.io/documentation/developer-docs/latest/development/backend-customization.html#core-controllers)
 * to customize this controller
 */

module.exports = {
  populate: async (ctx) =>{
    console.log("starting populate");

    const options = {
      sort:"popularity",
      page:"1",
      ...ctx
    }

    await strapi.services.games.populate(options)

    ctx.send({ok: true});
  }
};
