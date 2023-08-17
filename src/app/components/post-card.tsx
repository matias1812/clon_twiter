'use client'
import {Card, CardHeader, CardBody, CardFooter, Avatar, Link, Button} from "@nextui-org/react";
import { IconMessageCircle2, IconRepeat, IconHeart } from '@tabler/icons-react';

export default function PostCard ({
    userName,
    avatarUrl,
    userFullName,
    content,
}: {
    userName: string,
    avatarUrl: string,
    userFullName: string,
    content: string
}) {

  return (
    <Card className='shadow-none bg-transparent hover:bg-slate-800 transition border-b rounded-none cursor-pointer border-white/20'>
      <CardHeader className="justify-between">
        <div className="flex gap-2">
          <Link href={`/${userName}`}>
           <Avatar  radius="full" size="md" src={avatarUrl} />
          </Link>
          <div className="flex flex-col gap-1 items-start justify-center">
            <h4 className="text-small font-semibold leading-none text-default-600">{userFullName}</h4>
            <h5 className="text-small tracking-tight text-default-400">@{userName}</h5>
          </div>
        </div>
      </CardHeader>
      <CardBody className="px-2.5 py-0 text-xs text-wiht">
        <p>
          {content}
        </p>
        <span className="pt-2">
          #FrontendWithZoey 
          <span className="py-2" aria-label="computer" role="img">
            💻
          </span>
        </span>
      </CardBody>
      <CardFooter className="gap-3">
        <button className="flex gap-1">
         < IconMessageCircle2 className="w-5 h-5" />
        </button>
        <button>
          <IconHeart className="w-5 h-5" />
        </button>
        <button className="flex gap-1">
          <IconRepeat className="w-5 h-5" />
        </button>
      </CardFooter>
    </Card>
  );
}
