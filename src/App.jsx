import { useEffect } from 'react'
import Nav from './components/Nav'
import Hero from './components/Hero'
import Benefits from './components/Benefits'
import Activities from './components/Activities'
import Awards from './components/Awards'
import Apply from './components/Apply'
import Footer from './components/Footer'

function useFadeUp() {
  useEffect(() => {
    const els = document.querySelectorAll('.fade-up')
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add('visible')
        }),
      { threshold: 0.12 }
    )
    els.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])
}

export default function App() {
  useFadeUp()

  return (
    <>
      <Nav />
      <Hero />
      <Benefits />
      <Activities />
      <Awards />
      <Apply />
      <Footer />
    </>
  )
}
