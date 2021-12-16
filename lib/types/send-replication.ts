import { ServiceBusSender } from "@azure/service-bus";
import { Ecommerce } from "./ecommerce";

export interface SendReplication {
  client: ServiceBusSender;
  ecommerce: Ecommerce;
}
