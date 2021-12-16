import tap from "tap";
import type { ServiceBusSender } from "@azure/service-bus";
import { EcommerceReplicator } from "../lib/main";
import ecommerceMock from "../lib/__mocks__/ecommerce-mock";

const client = {} as ServiceBusSender;

tap.test("should replicate ecommerce successfully", async (t) => {
  let called = false;
  const send = async () => {
    called = true;
  };

  t.resolves(EcommerceReplicator(client, send).send(ecommerceMock));

  t.equal(called, true);
});

tap.test("should not replicate ecommerce", async (t) => {
  let called = false;
  const send = async () => {
    called = true;
  };

  t.rejects(
    EcommerceReplicator(client, send).send({
      ...ecommerceMock,
      // @ts-ignore
      logoUrl: undefined,
    })
  );
  t.equal(called, false);
});

tap.test("should not replicate ecommerce with default send", async (t) => {
  t.rejects(
    EcommerceReplicator(client).send({
      ...ecommerceMock,
      // @ts-ignore
      logoUrl: undefined,
    })
  );
});
