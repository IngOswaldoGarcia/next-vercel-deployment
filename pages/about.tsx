import Link from 'next/link'
import { DarkLayout } from '../components/layouts/DarkLayout'
import { MainLayout } from '../components/layouts/MainLayout'

export default function AboutPage() {
  return (
    <>
      <h1>About Page</h1>
      <h1>IR a <Link href="/"> Home </Link></h1>
      
        <div className="description">
          <p>
            Hello. This is my page
          </p>
        </div>
    </>   
  )
}

AboutPage.getLayout = function getLayout ( page: JSX.Element ){
  return (
    <MainLayout>
      <DarkLayout>
        { page }
      </DarkLayout>
    </MainLayout>   
  )
}