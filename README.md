## SDK for public api

https://apidocs.aoncover.com

## Authentification

```ts
import { Api } from 'cw-public-api';

const cwApi = new Api();
cwApi.instance.defaults.baseURL = 'https://public-api.aoncover.com';

async function run() {
  const {
    data: { access_token },
  } = await cwApi.oauth.getAccessToken({
    grant_type: 'client_credentials',
    client_id: '<CLIENT_ID>',
    client_secret: '<CLIENT_SECRET>',
    scope: 'admin:account admin:policy',
  });
  cwApi.instance.defaults.headers = { authorization: `Bearer ${access_token}` };
  const { data } = await cwApi.accounts.getAccount('<ACCOUNT_ID>');
  console.log(data);
}

run();
```
