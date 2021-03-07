import React from 'react'
import {useRouter} from 'next/router'
import en from './../translations/en'
import ar from './../translations/ar'

const TranslateHelper = () => {
  const router = useRouter()
  const {locale} = router
  const t = locale === 'en' ? en : ar
  return (t)
}

export default TranslateHelper
