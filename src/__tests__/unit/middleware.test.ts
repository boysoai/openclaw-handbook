import { detectLocale } from '@/middleware'
import { NextRequest } from 'next/server'

describe('i18n middleware', () => {
  it('detects locale from cookie', () => {
    const request = {
      cookies: { get: () => ({ value: 'zh' }) },
      headers: { get: () => null },
      nextUrl: { pathname: '/' },
    } as unknown as NextRequest
    
    expect(detectLocale(request)).toBe('zh')
  })
  
  it('detects locale from accept-language header', () => {
    const request = {
      cookies: { get: () => null },
      headers: { get: () => 'zh-CN,zh;q=0.9,en;q=0.8' },
      nextUrl: { pathname: '/' },
    } as unknown as NextRequest
    
    expect(detectLocale(request)).toBe('zh')
  })
  
  it('defaults to en when no locale detected', () => {
    const request = {
      cookies: { get: () => null },
      headers: { get: () => null },
      nextUrl: { pathname: '/' },
    } as unknown as NextRequest
    
    expect(detectLocale(request)).toBe('en')
  })
})
