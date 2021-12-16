export default {
  uuid: "33e671bc-d17f-42b4-9aad-3f32260f4685",
  enabled: true,
  name: "Mock Ecomm",
  storeUrl: "https://mockecomm.test",
  trackingUrl: "mockecomm.delivery.after.sale",
  email: "ti@after.sale",
  confirmationType: "email",
  channels: [{ id: "sms", primary: true, data: {} }],
  integration: {
    platform: "vtex",
    origin_domain: "mockecomm.test",
    connectorUrl: "https://mockecomm.test",
    connectorFields: {
      Url: "https://mockecomm.test",
      "Any-Key": "fake-key",
      "Any-Token": "fake-token",
    },
  },
  features: ["feature"],
  logoUrl:
    "https://send4.blob.core.windows.net/send4sprint/ecommerces/aftersale.png",

  createdAt: "2021-12-16T14:11:36.320Z",
  updatedAt: "2021-12-16T14:11:36.320Z",
  featureSettings: { loyalty: { enabled: true } },
  coupons: [
    {
      name: "10OFF",
      expirationDate: "2021-12-16T14:11:36.320Z",
      rules: "CONFIA",
      isActive: true,
    },
  ],
  utm: {},
};
