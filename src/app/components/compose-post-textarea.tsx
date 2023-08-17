'use client'
import { useRef, useEffect } from 'react'
import { experimental_useFormStatus as useFormStatus } from 'react-dom'

export function ComposePostTextArea () {
    const { pending, } = useFormStatus()
    const alreadysent = useRef(false)
    const textAreaRef = useRef<HTMLTextAreaElement>(null)

    useEffect(() => {
        if (textAreaRef.current === null) return

            if (pending && !alreadysent.current) {
            alreadysent.current = true
            textAreaRef.current.value = ''
            return
        }
        alreadysent.current = pending
    }, [pending])

    return (
        <textarea
        name='content'
        rows={4}
        className='w-full text-xl bg-black placeholder-gray-500 p-2'
        placeholder='¿Qué estás pensando?'
    ></textarea>

    )
}