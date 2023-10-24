// https://hono.dev/getting-started/nodejs
import { serve } from '@hono/node-server'
import { Hono } from 'hono'

const app = new Hono()

app.get('/', (c) => c.text('Hello Hono in Nodejs!'))

serve({
    fetch: app.fetch,
    port: 3000,
})