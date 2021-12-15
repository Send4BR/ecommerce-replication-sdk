import Ajv from "ajv";
import S from "fluent-json-schema";

const ajv = new Ajv({ allErrors: true });

const schema = S.object()
  .prop("uuid", S.string().required())
  .prop("enabled", S.boolean().required())
  .prop("name", S.string().required())
  .prop("storeUrl", S.string().required())
  .prop("trackingUrl", S.string().required())
  .prop("logoUrl", S.string().required())
  .prop("email", S.string().required())
  .prop("confirmationType", S.string().required())
  .prop(
    "integrations",
    S.object()
      .prop("platform", S.string().required())
      .prop("store_id", S.string().required())
      .prop("origin_domain", S.string().required())
      .prop("connectorUrl", S.string().required())
      .prop("connectorFields", S.object().required())
  )
  .prop("features", S.array().items(S.string()))
  .prop(
    "featureSettings",
    S.object().prop(
      "loyalty",
      S.object().prop("enabled", S.boolean().required())
    )
  )
  .prop("createdAt", S.string().required())
  .prop("updatedAt", S.string().required())
  .prop(
    "coupons",
    S.array().items(
      S.object()
        .prop("isActive", S.boolean().required())
        .prop("name", S.string().required())
        .prop("rules", S.string().required())
        .prop("expirationDate", S.mixed(["string", "number"]).required())
    )
  );

export const validate = ajv.compile(schema.valueOf());
