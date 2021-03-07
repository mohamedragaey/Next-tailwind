import React from 'react'
import {useRouter} from 'next/router'
import EnFlag from './flags/EnFlag'
import ArFlag from './flags/ArFlag'

const LanguageSwitcher = () => {
  const router = useRouter()

  const changeLanguage = (e) => {
    const locale = e
    router.push(router.pathname, router.asPath, {locale})
  }

  return (
    <>
      <button onClick={() => changeLanguage('ar')}><ArFlag/> ar</button>
      <button className={' ml-2'} onClick={() => changeLanguage('en')}><EnFlag/> en</button>
    </>
  )
}

export default LanguageSwitcher
