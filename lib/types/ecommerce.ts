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
  notifications: number[];
  demo: boolean;
  couriers: {
    id: string;
    enabled: boolean;
    courierUrl: string | null;
    connectorUrl: string | null;
    customNames: string[];
    authFields?: Record<string, unknown>;
  }[];
  mappedEcommerceStatuses: Record<string, string>;
  messages: Record<
    'courier' | 'system' | 'platform',
    {
      id: number;
      isCustomizable: boolean;
      title: string;
      customDetail: string | null;
      description: string | null;
      actionIds: number[];
      tags: string[];
    }[]
  >;
};
