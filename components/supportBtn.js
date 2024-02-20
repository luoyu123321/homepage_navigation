'use client'
import { Button, Tooltip } from '@douyinfe/semi-ui'
import Link from "next/link";
import { ThumbsUp } from "@icon-park/react";

export default function (){
  return (
    <Tooltip content='觉得不错？点个赞支持一下！' position='left'>
      <Link href='https://gitee.com/robin901118/homepage_navigation' target={'_blank'}>
        <Button icon={<ThumbsUp theme='outline' />} type='tertiary' size='large' />
      </Link>
    </Tooltip>
  )
}