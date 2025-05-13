import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

import { showSuccessMsg, showErrorMsg } from '../services/event-bus.service'
import { loadGig, addGigMsg } from '../store/actions/gig.actions'

import { AppHeader } from '../cmps/AppHeader'
import { ReviewList } from '../cmps/ReviewList'
import { AppFooter } from '../cmps/AppFooter'

export function GigDetails() {

  const { gigId } = useParams()
  const gig = useSelector(storeState => storeState.gigModule.gig)

  useEffect(() => {
    loadGig(gigId)
  }, [gigId])

  async function onAddGigMsg(gigId) {
    try {
      await addGigMsg(gigId, 'bla bla ' + parseInt(Math.random() * 10))
      showSuccessMsg(`Gig msg added`)
    } catch (err) {
      showErrorMsg('Cannot add gig msg')
    }

  }

  return (
    <section className="gig-details grid">
      <aside className="user-interaction grid">
        <article className="interaction-bar">
          ♥
        </article>
        <article className="purchase-modal">
          <section className="flex space-between">
            <p className="caps">offer</p>
            <p className="caps">70$</p>
          </section>
          <section className="content">
            1 logo design option with Jpeg, PNG files and 3 revisions (No mascot or complex work)
            <section className="way-of-work flex">
              <section className="delivary-time">2-day delivery</section>
              <section className="revisions">3 Revisions</section>
            </section>
            <ul className="checklist">
              <li>1 concept included</li>
              <li>Logo transparency</li>
              <li>Vector file</li>
              <li>Printable file</li>
              <li>Include 3D mockup</li>
              <li>Include source file</li>
            </ul>
            Continue
          </section>
        </article>
      </aside>
      <section className="gig-info grid">
        <nav className="breadcrumbs flex">
          <Link to="/">Home</Link>
          <Link to="/gig">Back to list</Link>
        </nav>
        <h1>Gig Title</h1>
        <article className="mini-user">mini user</article>
        <article className="img-carousel">img</article>
        <article className="about-section">about</article>
        <article className="about-user">user</article>
        <section className="reviews grid">
          <article className="review-statistics">stats</article>
          <ReviewList />
        </section>
      </section>
    </section>
  )
}