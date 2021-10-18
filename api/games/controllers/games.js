'use strict';

/**
 * Read the documentation (https://strapi.io/documentation/developer-docs/latest/development/backend-customization.html#core-controllers)
 * to customize this controller
 */

module.exports = {
  populate: async (ctx) =>{
    console.log("starting populate");

    await strapi.services.games.populate()

    ctx.send({ok: true});
  }
};
