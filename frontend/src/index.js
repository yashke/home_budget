import { createClient } from 'service-mocker/client';
import startUp from './startup';

const client = createClient('/assets/server_mock.js');
client.ready.then(startUp);
