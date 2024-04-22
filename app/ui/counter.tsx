import { kv } from '@vercel/kv'
import { Suspense } from 'react'

export default async function IncrCounter({ name } : { name: string }) {
  const counter = await kv.incr(name)

  return (
    <Suspense>
        <small className='text-gray-500'>
            {counter}
        </small>
    </Suspense>
  )
}