import Hero from '../Hero/Hero'
import Banner from '../Banner/Banner'
import AboutMe from '../AboutMe/AboutMe'
import MySkills from '../MySkills/MySkills'
import HowIWork from '../HowIWork/HowIWork'
import ProjectsMade from '../ProjectsMade/ProjectsMade'
import ClientReviews from '../ClientReviews/ClientReviews'
import ContactUs from '../ContactUs/ContactUs'

function Main(){
    return(
        <main>
            <Hero></Hero>
            <Banner></Banner>
            <AboutMe></AboutMe>
            <MySkills></MySkills>
            {/* <HowIWork></HowIWork>
            <ProjectsMade></ProjectsMade>
            <ClientReviews></ClientReviews> */}
            <ContactUs></ContactUs>
        </main>
    )
}
export default Main