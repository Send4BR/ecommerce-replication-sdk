export type Ecommerce = {
  uuid: string;
  enabled: boolean;
  name: string;
  storeUrl: string;
  trackingUrl: string;
  logoUrl: string;
  email: string;
  confirmationType: string;
  channels: { id: string; data: Record<string, unknown> }[];
  integration: Record<string, unknown>;
  features: string[];
  featureSettings: Record<string, unknown>;
  utm: Record<string, string>;
  createdAt: string;
  updatedAt: string;
  coupons: {
    isActive: boolean;
    name: string;
    rules: string;
    expirationDate: string | number | Date;
  }[];
};
