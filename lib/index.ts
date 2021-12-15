import { validate } from "./validateSchema";
import { EcommerceReplication } from "./types";
import { send } from "./send";

export function EcommerceReplication({ url, topic }: EcommerceReplication) {
  return {
    async sender(ecommerce) {
      const isValid = validate(ecommerce);

      if (!isValid)
        throw new Error(
          `Ecommerce validation fails, ${JSON.stringify(validate.errors)}`
        );

      await send({ url, topic, ecommerce });
    },
  };
}
