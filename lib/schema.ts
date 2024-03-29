import S from 'fluent-json-schema';

const ecommerceMessageSchema = S.object()
  .prop('id', S.number())
  .prop('isCustomizable', S.boolean())
  .prop('title', S.string())
  .prop('customDetail', S.anyOf([S.string(), S.null()]))
  .prop('description', S.anyOf([S.string(), S.null()]))
  .prop('actionIds', S.array().items(S.number()))
  .prop('tags', S.array().items(S.string()));

export const schema = S.object()
  .prop('uuid', S.string().required())
  .prop('enabled', S.boolean().required())
  .prop('name', S.string().required())
  .prop('storeUrl', S.string().required())
  .prop('trackingUrl', S.string().required())
  .prop('logoUrl', S.string().required())
  .prop('email', S.string().required())
  .prop('confirmationType', S.string().required())
  .prop(
    'integration',
    S.object()
      .prop('platform', S.string().required())
      .prop('store_id', S.anyOf([S.string(), S.null()]))
      .prop('origin_domain', S.anyOf([S.string(), S.null()]))
      .prop('connectorUrl', S.string().required())
      .prop('connectorFields', S.object().required())
  )
  .prop(
    'channels',
    S.array().items(
      S.object().prop('id', S.string()).prop('primary', S.boolean()).prop('data', S.object())
    )
  )
  .prop('features', S.array().items(S.string()))
  .prop(
    'featureSettings',
    S.object().prop('loyalty', S.object().prop('enabled', S.boolean().required()))
  )
  .prop('utm', S.object().required())
  .prop('createdAt', S.string().required())
  .prop('updatedAt', S.string().required())
  .prop(
    'coupons',
    S.object()
      .prop('selected', S.anyOf([S.string(), S.null()]))
      .prop('rules', S.anyOf([S.string(), S.null()]))
      .prop('isActive', S.boolean().required())
      .prop(
        'items',
        S.array().items(
          S.object()
            .prop('name', S.anyOf([S.string(), S.null()]))
            .prop('expirationDate', S.anyOf([S.string(), S.null()]))
            .prop('discount', S.anyOf([S.number(), S.null()]))
        )
      )
  )
  .prop(
    'notifications',
    S.object()
      .prop('default', S.array().items(S.number()))
      .prop('custom', S.array().items(S.number()))
  )
  .prop('demo', S.boolean())
  .prop('picking', S.number())
  .prop('handling', S.number())
  .prop(
    'couriers',
    S.array().items(
      S.object()
        .prop('customNames', S.array().items(S.string()))
        .prop('sacMail', S.anyOf([S.string(), S.null()]))
        .prop('enabled', S.boolean().required())
        .prop('id', S.string().required())
        .prop('courierUrl', S.anyOf([S.string(), S.null()]))
        .prop('connectorUrl', S.anyOf([S.string(), S.null()]))
        .prop('authFields', S.object())
    )
  )
  .prop('mappedEcommerceStatuses', S.object().required())
  .prop(
    'messsages',
    S.object()
      .prop('courier', S.array().items(ecommerceMessageSchema).required())
      .prop('platform', S.array().items(ecommerceMessageSchema).required())
      .prop('system', S.array().items(ecommerceMessageSchema).required())
  );
