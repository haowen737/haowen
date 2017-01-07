/**
 * Created by laoya on 15/9/2.
 */

"use strict";

var Knex = require('knex');

module.exports = function (opts) {
    var conn = opts.connection || {};
    var env = process.env;
    global.__knex = Knex({
        client: opts.client,
        connection: {
            host: conn.host || env.KOA_KNEX_HOST,
            port: conn.port || env.KOA_KNEX_PORT,
            user: conn.user || env.KOA_KNEX_USER,
            password: conn.password || env.KOA_KNEX_PASSWORD,
            database: conn.database || env.KOA_KNEX_DATABASE,
            charset: conn.charset || env.KOA_KNEX_CHARSET,
            ssl: conn.ssl || env.KOA_KNEX_SSL,
            debug: conn.debug || env.KOA_KNEX_DEBUG,

            /** For SQLite 3: http://knexjs.org/#Initialize */
            filename: conn.filename || env.KOA_KNEX_FILENAME
        },
        debug: opts.debug || env.KOA_KNEX_DEBUG
    });

    return function *knex(next) {
        this.knex = global.__knex;
        yield next;
    };
};
