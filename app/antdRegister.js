'use client'
import { AntdRegistry } from '@ant-design/nextjs-registry'

export default function ({ children }) {
	return <AntdRegistry>{children}</AntdRegistry>
}