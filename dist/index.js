var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __markAsModule = (target) => __defProp(target, "__esModule", { value: true });
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __reExport = (target, module2, copyDefault, desc) => {
  if (module2 && typeof module2 === "object" || typeof module2 === "function") {
    for (let key of __getOwnPropNames(module2))
      if (!__hasOwnProp.call(target, key) && (copyDefault || key !== "default"))
        __defProp(target, key, { get: () => module2[key], enumerable: !(desc = __getOwnPropDesc(module2, key)) || desc.enumerable });
  }
  return target;
};
var __toESM = (module2, isNodeMode) => {
  return __reExport(__markAsModule(__defProp(module2 != null ? __create(__getProtoOf(module2)) : {}, "default", !isNodeMode && module2 && module2.__esModule ? { get: () => module2.default, enumerable: true } : { value: module2, enumerable: true })), module2);
};
var __toCommonJS = /* @__PURE__ */ ((cache) => {
  return (module2, temp) => {
    return cache && cache.get(module2) || (temp = __reExport(__markAsModule({}), module2, 1), cache && cache.set(module2, temp), temp);
  };
})(typeof WeakMap !== "undefined" ? /* @__PURE__ */ new WeakMap() : 0);

// lib/index.ts
var lib_exports = {};
__export(lib_exports, {
  EcommerceReplicator: () => EcommerceReplicator,
  schema: () => schema,
  send: () => send
});

// lib/schema.ts
var import_fluent_json_schema = __toESM(require("fluent-json-schema"));
var schema = import_fluent_json_schema.default.object().prop("uuid", import_fluent_json_schema.default.string().required()).prop("enabled", import_fluent_json_schema.default.boolean().required()).prop("name", import_fluent_json_schema.default.string().required()).prop("storeUrl", import_fluent_json_schema.default.string().required()).prop("trackingUrl", import_fluent_json_schema.default.string().required()).prop("logoUrl", import_fluent_json_schema.default.string().required()).prop("email", import_fluent_json_schema.default.string().required()).prop("confirmationType", import_fluent_json_schema.default.string().required()).prop("integrations", import_fluent_json_schema.default.object().prop("platform", import_fluent_json_schema.default.string().required()).prop("store_id", import_fluent_json_schema.default.string().required()).prop("origin_domain", import_fluent_json_schema.default.string().required()).prop("connectorUrl", import_fluent_json_schema.default.string().required()).prop("connectorFields", import_fluent_json_schema.default.object().required())).prop("channels", import_fluent_json_schema.default.array().items(import_fluent_json_schema.default.object().prop("id", import_fluent_json_schema.default.string()).prop("data", import_fluent_json_schema.default.object()))).prop("features", import_fluent_json_schema.default.array().items(import_fluent_json_schema.default.string())).prop("featureSettings", import_fluent_json_schema.default.object().prop("loyalty", import_fluent_json_schema.default.object().prop("enabled", import_fluent_json_schema.default.boolean().required()))).prop("utm", import_fluent_json_schema.default.object().required()).prop("createdAt", import_fluent_json_schema.default.string().required()).prop("updatedAt", import_fluent_json_schema.default.string().required()).prop("coupons", import_fluent_json_schema.default.array().items(import_fluent_json_schema.default.object().prop("isActive", import_fluent_json_schema.default.boolean().required()).prop("name", import_fluent_json_schema.default.string().required()).prop("rules", import_fluent_json_schema.default.string().required()).prop("expirationDate", import_fluent_json_schema.default.mixed(["string", "number"]).required())));

// lib/send.ts
async function send({ client, ecommerce }) {
  await client.sendMessages({
    body: ecommerce,
    contentType: "application/json"
  });
}

// lib/main.ts
var import_ajv = __toESM(require("ajv"));
var ajv = new import_ajv.default({ allErrors: true });
var validator = ajv.compile(schema.valueOf());
var EcommerceValidator = () => ({
  validate: (ecommerce) => {
    const isValid = validator(ecommerce);
    return [isValid, validator.errors];
  }
});
function EcommerceReplicator(client, sendEcommerce = send) {
  return {
    async send(ecommerce) {
      const [isValid, errors] = EcommerceValidator().validate(ecommerce);
      if (!isValid)
        throw new Error(`Ecommerce validation fails, ${JSON.stringify(errors)}`);
      await sendEcommerce({ client, ecommerce });
    }
  };
}
module.exports = __toCommonJS(lib_exports);
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  EcommerceReplicator,
  schema,
  send
});
