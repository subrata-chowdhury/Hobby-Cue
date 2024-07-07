import Menubar from './components/Menubar'
import SignInForm from './components/SignUpAndJoinInSlide'
import CardsSection from './components/CardsSection'
import AddYourOwnCardSection from './components/AddYourOwnCardSection'
import TestimonialSection from './components/Testimonial'
import SubFooter from './components/SubFooter'
import Footer from './components/Footer'
import AboutSection from './components/About'
import GoToTop from './components/GoToTop'
import './App.css'

function App() {
	return (
		<div>
			<Menubar />
			<HomeSection />
			<CardsSection />
			<AddYourOwnCardSection />
			<TestimonialSection />
			<SubFooter />
			<Footer />
			<GoToTop />
		</div>
	)
}

function HomeSection() {
	return (
		<div className='container-fluid mt-5 pt-5 home-screen' style={{ backgroundColor: '#F7F5F9' }}>
			<div className="container h-100 flex-column justify-content-between align-items-between">
				<div className="d-flex justify-content-start flex-lg-row flex-column gx-5 h-100" style={{ gap: '4rem' }}>
					<AboutSection />
					<SignInForm />
				</div>
				<div className='row w-100 mx-0 mx-lg-auto d-flex'>
					<img src='Group.png' className='grp-img col col-lg-7'></img>
					<div className='col col-lg-4'></div>
				</div>
			</div>
		</div>
	)
}

export default App
