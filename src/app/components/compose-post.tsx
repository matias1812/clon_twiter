'use client'
import { ComposePostTextArea } from '../components/compose-post-textarea'
import { ComposePostButton } from '../components/compose-post-buttom'
import { addpost } from '../acctions/add-post-action'
import { useRef } from 'react'
export function ComposePost ({
    userAvatarUrl
}: {
    userAvatarUrl: string
}) {
    const formRef = useRef<HTMLFormElement>(null)
    return ( 
        <form ref={formRef} action={async (FormData) => {
            await addpost(FormData)
            formRef.current?.reset()
        }} className='flex flex-row space-x-4 border-b border-white/20'>
            <img className='rounded-full w-10 h-10 object-contain' src={userAvatarUrl} />
            <div className='flex flex-1 flex-col gap-y-4'>
                <ComposePostTextArea />
                <ComposePostButton />
            </div>

        </form>
    )
}