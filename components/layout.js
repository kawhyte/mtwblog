import Alert from '../components/alert'
import Footer from '../components/footer'
import Nav from '../components/navbar'
import Meta from '../components/meta'

export default function Layout({ preview, children }) {
  return (
    <>
      <Meta />
      <Nav />
      <div className="min-h-screen">
        <main>{children}</main>
      </div>
      <Footer />
    </>
  )
}
