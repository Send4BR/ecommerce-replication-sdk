declare module '@aftersale/ecommerce-replication-sdk/lib/__mocks__/ecommerce-mock' {
  const _default: {
      uuid: string;
      enabled: boolean;
      name: string;
      storeUrl: string;
      trackingUrl: string;
      email: string;
      confirmationType: string;
      channels: {
          id: string;
          primary: boolean;
          data: {};
      }[];
      integration: {
          platform: string;
          origin_domain: string;
          connectorUrl: string;
          connectorFields: {
              Url: string;
              'Any-Key': string;
              'Any-Token': string;
          };
      };
      features: string[];
      logoUrl: string;
      createdAt: string;
      updatedAt: string;
      featureSettings: {
          loyalty: {
              enabled: boolean;
          };
      };
      coupons: {
          name: string;
          expirationDate: string;
          rules: string;
          isActive: boolean;
      }[];
      utm: {};
      notifications: number[];
      demo: boolean;
      couriers: {
          id: string;
          enabled: boolean;
          customNames: string[];
          courierUrl: null;
          connectorUrl: string;
      }[];
      mappedEcommerceStatuses: {
          'payment-pending': string;
          'payment-approved': string;
          'window-to-cancel': string;
          handling: string;
          'payment-denied': string;
          invoiced: string;
          invoice: string;
          canceled: string;
          cancel: string;
      };
      messages: {
          courier: {
              id: number;
              isCustomizable: boolean;
              title: string;
              detail: string;
              customDetail: null;
              description: null;
              actionIds: number[];
              tags: never[];
          }[];
          platform: {
              id: number;
              isCustomizable: boolean;
              title: string;
              detail: string;
              customDetail: null;
              description: null;
              actionIds: never[];
              tags: never[];
          }[];
          system: {
              id: number;
              isCustomizable: boolean;
              title: string;
              detail: null;
              customDetail: null;
              description: null;
              actionIds: number[];
              tags: never[];
          }[];
      };
  };
  export default _default;

}
declare module '@aftersale/ecommerce-replication-sdk/lib/index' {
  export * from "@aftersale/ecommerce-replication-sdk/lib/main";
  export * from "@aftersale/ecommerce-replication-sdk/lib/schema";
  export * from "@aftersale/ecommerce-replication-sdk/lib/send";
  export * from "@aftersale/ecommerce-replication-sdk/lib/types/index";

}
declare module '@aftersale/ecommerce-replication-sdk/lib/main' {
  import { send } from "@aftersale/ecommerce-replication-sdk/lib/send";
  import { Ecommerce } from "@aftersale/ecommerce-replication-sdk/lib/types/index";
  import { ServiceBusSender } from "@azure/service-bus";
  export function EcommerceReplicator(client: ServiceBusSender, sendEcommerce?: typeof send): {
      send(ecommerce: Ecommerce): Promise<void>;
  };

}
declare module '@aftersale/ecommerce-replication-sdk/lib/schema' {
  export const schema: import("fluent-json-schema").ObjectSchema;

}
declare module '@aftersale/ecommerce-replication-sdk/lib/send' {
  import { SendReplication } from "@aftersale/ecommerce-replication-sdk/lib/types/index";
  export function send({ client, ecommerce }: SendReplication): Promise<void>;

}
declare module '@aftersale/ecommerce-replication-sdk/lib/types/ecommerce' {
  export type Ecommerce = {
      uuid: string;
      enabled: boolean;
      name: string;
      storeUrl: string;
      trackingUrl: string;
      logoUrl: string;
      email: string;
      confirmationType: string;
      channels: {
          id: string;
          data: Record<string, unknown>;
      }[];
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
      messages: Record<'courier' | 'system' | 'platform', {
          id: number;
          isCustomizable: boolean;
          title: string;
          customDetail: string | null;
          description: string | null;
          actionIds: number[];
          tags: string[];
      }[]>;
  };

}
declare module '@aftersale/ecommerce-replication-sdk/lib/types/index' {
  export * from "@aftersale/ecommerce-replication-sdk/lib/types/send-replication";
  export * from "@aftersale/ecommerce-replication-sdk/lib/types/ecommerce";

}
declare module '@aftersale/ecommerce-replication-sdk/lib/types/send-replication' {
  import { ServiceBusSender } from "@azure/service-bus";
  import { Ecommerce } from "@aftersale/ecommerce-replication-sdk/lib/types/ecommerce";
  export interface SendReplication {
      client: ServiceBusSender;
      ecommerce: Ecommerce;
  }

}
declare module '@aftersale/ecommerce-replication-sdk/test/ecommerce-replication' {
  export {};

}
declare module '@aftersale/ecommerce-replication-sdk/test/send' {
  export {};

}
declare module '@aftersale/ecommerce-replication-sdk' {
  import main = require('@aftersale/ecommerce-replication-sdk/lib/index');
  export = main;
}