'use client'

import { experimental_useFormStatus as useFormStatus } from 'react-dom'

export function ComposePostButton () {
    const { pending, } = useFormStatus()

    return (
        <button 
            disabled={pending}
            type='submit' 
            className='bg-sky-500 text-sm font-bold rounded-full px-5 py-2 self-end m-2'>
        {pending ? 'posteando' : 'postear'}
    </button>

    )
}