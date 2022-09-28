import { schema } from './schema';
import { send } from './send';
import { Ecommerce } from './types';
import { ServiceBusSender } from '@azure/service-bus';
import Ajv from 'ajv';

const ajv = new Ajv({ allErrors: true });
const validator = ajv.compile(schema.valueOf());

const EcommerceValidator = () => ({
  validate: (ecommerce: Ecommerce) => {
    const isValid = validator(ecommerce);
    return [isValid, validator.errors];
  },
});

export function EcommerceReplicator(client: ServiceBusSender, sendEcommerce = send) {
  return {
    async send(ecommerce: Ecommerce) {
      const [isValid, errors] = EcommerceValidator().validate(ecommerce);

      if (!isValid) throw new Error(`Ecommerce validation fails, ${JSON.stringify(errors)}`);

      if (process.env.NODE_ENV !== 'test') {
        console.info(`[Replication SDK] Replicating ecommerce ${ecommerce.uuid}`);
      }

      await sendEcommerce({ client, ecommerce });
    },
  };
}
