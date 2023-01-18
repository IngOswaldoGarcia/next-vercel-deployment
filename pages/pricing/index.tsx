import Link from 'next/link'
import { MainLayout } from '../../components/layouts/MainLayout'

export default function PricingPage() {
  return (
    <MainLayout>
      <h1>Pricing Page</h1>
      <h1>IR a <Link href="/"> Home </Link></h1>
      
        <div className="description">
          <p>
            Hello. This is my page
          </p>
        </div>
    </MainLayout>
  )
}
