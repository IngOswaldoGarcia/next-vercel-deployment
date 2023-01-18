import Link from 'next/link'
import { MainLayout } from '../../components/layouts/MainLayout'

export default function ContactPage() {
  return (
    <MainLayout>
      <h1>Contact Page</h1>
      <h1>IR a <Link href="/"> Home </Link></h1>
      
        <div className="description">
          <p>
            Hello. This is my page
          </p>
        </div>
    </MainLayout>
  )
}
