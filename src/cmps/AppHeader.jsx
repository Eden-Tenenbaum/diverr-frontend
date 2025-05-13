import { Link, NavLink } from 'react-router-dom'
import { useLocation, useNavigate } from 'react-router'
import { useSelector } from 'react-redux'
import { showErrorMsg, showSuccessMsg } from '../services/event-bus.service'
import { logout } from '../store/actions/user.actions'
import { useEffect, useState } from 'react'
import { Categories } from './Categories'

export function AppHeader({ isSticky }) { //get logged in status from home page
	const location = useLocation()
	const user = useSelector(storeState => storeState.userModule.user)
	const navigate = useNavigate()
	const [showSearchBar, SetShowSearchBar] = useState(true)
	const [isLoggedIn, setIsLoggedIn] = useState(true) // band aid function, 
	// should get logged in state from another cmp

	async function onLogout() {
		try {
			await logout()
			navigate('/')
			showSuccessMsg(`Bye now`)
		} catch (err) {
			showErrorMsg('Cannot logout')
		}
	}

	function toggleLoggedIn(status) { //another band-aid function until log in status is set up
		if (status === true) {
			setIsLoggedIn(false)
			SetShowSearchBar(false)
			return
		}
		if (status === false) {
			setIsLoggedIn(true)
			SetShowSearchBar(true)
			return
		}
	}

	return (
		<>
			<div className='header-row-wrapper full '>
				<div className="app-header ">
					<NavLink to="/" className="logo">
						Diverr<span>.</span>
					</NavLink>

					<div className='header-search-bar'>
						{showSearchBar &&
							<>
								<input
									type='text'
									placeholder='What service are you looking for today?'
								/>
								<button>
									<i className="fa-solid fa-magnifying-glass"></i>
								</button>
							</>}
					</div>
					<nav className='header-nav'>
						<ul>
							<li>
								<button className='upgrade-to-pro'>Upgrade to Pro</button>
							</li>
							<li>
								<button className='header-btn'><i className="far fa-bell"></i><span></span></button>
							</li>
							<li>
								<button className='header-btn'><i className="far fa-envelope"></i></button>
							</li>
							<li>
								<button className='header-btn'><i className="far fa-heart"></i></button>
							</li>
							<li>
								<div className='header-orders'>Orders</div>
							</li>
							<li>
								<div className='header-try-diverr-go'>Try Diverr Go</div>
							</li>
							<li>
								<div className='login-bandaid'>
									{isLoggedIn ? (
										<button className='header-user-options-btn'>U</button>
									) : (
										<button className='header-join-btn' onClick={() => toggleLoggedIn(isLoggedIn)}>Join</button>
									)}
								</div>
							</li>
						</ul>
					</nav>
				</div>
			</div>
			{/* <div className='categories-row-wrapper'>
				<Categories />
			</div> */}
		</>
	)
}
