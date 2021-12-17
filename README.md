# ecommerce-replication-sdk

Biblioteca para replicação de ecommerces entre serviços @aftersale.

## Instalação

Você pode instalar como uma dependência

```
npm i https://github.com/Send4BR/ecommerce-replication-sdk/
```

## Uso

```typescript
import { ServiceBusClient } from "@azure/service-bus";
import { EcommerceReplicator } from "@aftersale/ecommerce-replication-sdk";

const sbClient = new ServiceBusClient(serviceBusConnectionString);
const client = sbClient.createSender(queueName);

await EcommerceReplicator(client).send(ecommercePayload);
```

### Testes

```
npm test
```

### Desenvolvimento

Caso modifique algo no projeto, não se esqueça de rodar o build antes de subir para o github para atualizar a `dist`
