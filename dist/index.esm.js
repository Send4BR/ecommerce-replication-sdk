// lib/schema.ts
import S from "fluent-json-schema";
var schema = S.object().prop("uuid", S.string().required()).prop("enabled", S.boolean().required()).prop("name", S.string().required()).prop("storeUrl", S.string().required()).prop("trackingUrl", S.string().required()).prop("logoUrl", S.string().required()).prop("email", S.string().required()).prop("confirmationType", S.string().required()).prop("integrations", S.object().prop("platform", S.string().required()).prop("store_id", S.string().required()).prop("origin_domain", S.string().required()).prop("connectorUrl", S.string().required()).prop("connectorFields", S.object().required())).prop("channels", S.array().items(S.object().prop("id", S.string()).prop("data", S.object()))).prop("features", S.array().items(S.string())).prop("featureSettings", S.object().prop("loyalty", S.object().prop("enabled", S.boolean().required()))).prop("utm", S.object().required()).prop("createdAt", S.string().required()).prop("updatedAt", S.string().required()).prop("coupons", S.array().items(S.object().prop("isActive", S.boolean().required()).prop("name", S.string().required()).prop("rules", S.string().required()).prop("expirationDate", S.mixed(["string", "number"]).required())));

// lib/send.ts
async function send({ client, ecommerce }) {
  await client.sendMessages({
    body: ecommerce,
    contentType: "application/json"
  });
}

// lib/main.ts
import Ajv from "ajv";
var ajv = new Ajv({ allErrors: true });
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
export {
  EcommerceReplicator,
  schema,
  send
};
