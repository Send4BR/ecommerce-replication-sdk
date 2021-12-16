import { SendReplication } from "./types";

export async function send({ client, ecommerce }: SendReplication) {
  await client.sendMessages({
    body: ecommerce,
    contentType: "application/json",
  });
}
