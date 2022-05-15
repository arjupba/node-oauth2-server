import request from 'supertest';
import { createExpressApp } from '../../app';
import routes from '.';

const app = () => createExpressApp(routes);

test('POST /users 400 (user)', async () => {
  const { status, body } = await request(app()).post(`/`).send({});
  expect(status).toBe(400);
});

test('POST /users 400 (user)', async () => {
  const { status, body } = await request(app()).post(`/`).send({
    userName: 'ar',
    password: 'arj',
    name: 'arj',
  });
  expect(status).toBe(400);
});

test('POST /users 200 (user)', async () => {
  const { status, body } = await request(app()).post(`/`).send({
    userName: 'arj',
    password: 'arj',
    name: 'arj',
  });
  expect(status).toBe(200);
  expect(body.ok).toBe(true);
});

test('GET /users 401 (user)', async () => {
  const { status, body } = await request(app()).get(`/`);
  expect(status).toBe(401);
});
