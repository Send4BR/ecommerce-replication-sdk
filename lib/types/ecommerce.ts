export type Ecommerce = {
  uuid: string;
  enabled: boolean;
  name: string;
  storeUrl: string;
  trackingUrl: string;
  logoUrl: string;
  email: string;
  confirmationType: string;
  channels: { id: string; primary: boolean; data: any }[];
  integration: Record<string, unknown>;
  features: string[];
  featureSettings: { loyalty: { enabled: boolean } };
  utm: Record<string, string>;
  createdAt: string;
  updatedAt: string;
  coupons: {
    isActive: boolean;
    name: string;
    rules: string;
    expirationDate: string | number;
  }[];
};
