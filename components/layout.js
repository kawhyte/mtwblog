import Alert from '../components/alert'
import Footer from '../components/footer'
import Nav from './navbar'
import Meta from '../components/meta'

export default function Layout({ preview, color, children }) {
  return (
    <>
      <Meta />
      <Nav color={color}/>
      <div className="min-h-screen bg-rootBG">
        <main>{children}</main>
      </div>
      <Footer />
    </>
  )
}
