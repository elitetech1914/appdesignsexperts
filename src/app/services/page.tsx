import LetsTalkSection from '@/components/LetsTalkSection'
import ServicesSection from '@/components/ServicesSection'
import { Service } from '@/types/services';

const servicesData: Service[] = [
  {
    id: 1,
    title: "Android App Development",
    description: "Looking to build a successful Android application for your business? Need a scalable and high-performing solution? Look no further! Meta App Coders guarantees unique and fully capable Android app development services that not only digitally transform your business but also let you stay ahead of your competition.",
    technologies: [{name:"Android", logo:"androidstudio.svg"}, {name:"Google Fit",logo:"googlefit.svg"}, {name:"Auto",logo:"androidauto.svg"}, {name:"ARCore",logo:"arcore.svg"}],
    category: "Mobile"
  },
  {
    id: 2,
    title: "iOS App Development",
    description: "We are the go-to iOS app development company for businesses belonging to multiple business sizes and across the globe. We engineer feature-rich and appealing iPhone apps for both established enterprises and startups.",
    technologies: [{name:"Swift", logo:"swift.svg"}, {name:"Objective-C",logo:"objective.svg"}, {name:"XCode",logo:"xcode.svg"}, {name:"Flutter",logo:"flutter.svg"}],
    category: "Mobile"
  },
  {
    id: 3,
    title: "React Native App Development",
    description: "Build an app that delights users with a feature-rich and branded-looking mobile app for both iOS and Android platforms. Meta App Coders, a React Native app development company, gives perfect app development solutions that not only save time and cost of app development but also tune your business into a successful app faster.",
    technologies: [{name:"Redux", logo:"redux.svg"}, {name:"JavaScript",logo:"javaScript.svg"}, {name:"Firebase",logo:"firebase.svg"}, {name:"XCode",logo:"xcode.svg"}],
    category: "Cross-Platform"
  },
  {
    id: 4,
    title: "Website Development",
    description: "Website development has become the greatest boon for businesses across globe. Following the latest trend to meet user's expectations is something our company excel in. We help you complete your digital presence.",
    technologies: [{name:"Frontend", logo:"frontend.svg"}, {name:"Backend",logo:"backend.svg"}, {name:"FullStack",logo:"fullStack.svg"}, {name:"DevOps",logo:"devops.svg"}],
    category: "Web"
  },
];

const Services = () => {
  return (
    <section className='pt-12'>
        <ServicesSection services={servicesData}/>
        <LetsTalkSection/>
    </section>
  )
}

export default Services