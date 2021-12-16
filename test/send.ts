import type { ServiceBusMessage, ServiceBusSender } from "@azure/service-bus";
import tap from "tap";
import { send } from "../lib/send";
import ecommerceMock from "../lib/__mocks__/ecommerce-mock";

tap.test("should send ecommerce", async (t) => {
  let message;
  const client = {
    sendMessages: ({ body, contentType }: ServiceBusMessage) => {
      message = body;
    },
  } as ServiceBusSender;

  t.resolves(send({ client, ecommerce: ecommerceMock }));
  t.equal(message, ecommerceMock);
});
