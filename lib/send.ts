import { ServiceBusClient } from "@azure/service-bus";
import { SendReplication } from "./types";

export async function send({ url, topic, ecommerce }: SendReplication) {
  const sbClient = new ServiceBusClient(url);

  const sender = sbClient.createSender(topic);

  try {
    await sender.sendMessages({
      body: ecommerce,
      contentType: "application/json",
    });

    await sender.close();
  } catch (err) {
    throw err;
  } finally {
    await sbClient.close();
  }
}
