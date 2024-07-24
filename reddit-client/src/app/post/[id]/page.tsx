import Head from 'next/head'

export default function Page() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col justify-center items-center">
      <Head>
        <title>Yet to be implemented</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          Yet to be implemented
        </h1>
        <p className="text-xl text-gray-600 mb-8">
          This feature is coming soon. Stay tuned!
        </p>
        <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-blue-500"></div>
      </main>

      <footer className="mt-8 text-center text-gray-500">
        <p>© 2023 Your Company Name. All rights reserved.</p>
      </footer>
    </div>
  )
}
