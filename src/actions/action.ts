'use server';

export async function serverActionA() {
  await new Promise((res) => setTimeout(res, 3000));
}

export async function serverActionB() {
  await new Promise((res) => setTimeout(res, 3000));
}
