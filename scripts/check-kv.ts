import { kv } from '@vercel/kv';

async function checkKV() {
  const services = await kv.get('services');
  console.log('Stored services:', services);
}

checkKV(); 