import Alert from '../components/alert'
import Footer from '../components/footer'
import Nav from './navbar'
import Meta from '../components/meta'

export default function Layout({ preview, color, bgColor, children }) {
  return (
    <>
      <Meta />
      
      <Nav color={color} bgColor={bgColor}/>
      <div >
        <main>{children}</main>
      </div>
      <Footer />
    </>
  )
}
