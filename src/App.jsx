import Menubar from './components/Menubar'
import SignInForm from './components/SignUpAndJoinInSlide'
import CardsSection from './components/CardsSection'
import AddYourOwnCardSection from './components/AddYourOwnCardSection'
import TestimonialSection from './components/Testimonial'
import SubFooter from './components/SubFooter'
import Footer from './components/Footer'
import AboutSection from './components/About'
import GoToTop from './components/GoToTop'

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
		<div className='container-fluid mt-5 pt-5' style={{ backgroundColor: '#F7F5F9', minHeight: '100vh' }}>
			<div className="container h-100">
				<div className="row row-cols-1 row-cols-md-2 row gx-5 h-100" style={{ gap: '4rem' }}>
					<AboutSection />
					<SignInForm />
				</div>
			</div>
		</div>
	)
}

export default App
