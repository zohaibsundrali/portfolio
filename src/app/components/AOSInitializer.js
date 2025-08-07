'use client'
import { useEffect } from 'react'
import { initAOS } from '../lib/aos-init'

export default function AOSInitializer() {
  useEffect(() => {
    initAOS()
  }, [])

  return null
}
