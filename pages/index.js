import LanguageSwitcher from '../components/LanguageSwitcher'
import TranslateHelper from '../components/TranslateHelper'

export default function Home () {
  return (
    <main className='bg-white container m-auto mt-24 p-6 shadow'>
      <LanguageSwitcher/>
      <h1 className='border-b border-red-500 mb-6 pb-3 text-2xl text-center text-red-900 transition uppercase'>
        Welcome to <a href="https://nextjs.org">Next.js!</a>
      </h1>
      <p>
        Get started by editing{' '}
        <code>pages/index.js</code>
      </p>

      <div>
        <a href="https://nextjs.org/docs">
          <h3>{TranslateHelper().Home} &rarr;</h3>
          <p>Find in-depth information about Next.js features and API.</p>
        </a>

        <a href="https://nextjs.org/learn">
          <h3>Learn &rarr;</h3>
          <p>Learn about Next.js in an interactive course with quizzes!</p>
        </a>

        <a href="https://github.com/vercel/next.js/tree/master/examples">
          <h3>Examples &rarr;</h3>
          <p>Discover and deploy boilerplate example Next.js projects.</p>
        </a>

        <a href="https://vercel.com/new">
          <h3>Deploy &rarr;</h3>
          <p> Instantly deploy your Next.js site to a public URL with Vercel. </p>
        </a>
      </div>
    </main>
  )
}
