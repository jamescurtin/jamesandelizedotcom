const brideName = 'Elize'
const groomName = 'James'

const Config = {
    site: {
        title: `${brideName} & ${groomName}'s Wedding`,
        description: `${brideName} and ${groomName} wedding website`,
        keywords: `${brideName}, ${groomName}, wedding website`,
    },
    github_url: 'https://github.com/jamescurtin/jamesandelizedotcom',
    welcomeParty: {
        date: 'April 8, 2022',
        time: '6:00PM - ...',
        location: 'Residence Inn Bridgewater',
    },
    wedding: {
        date: 'April 9, 2022',
        time: '5:00-10:00pm',
        location: 'The Villa at Ridder Country Club',
        room: 'Madera Ballroom',
        address: '390 Oak Street',
        town: 'East Bridgewater, MA',
    },
    personalInfo: {
        bride: brideName,
        groom: groomName,
    },
    navBarLinks: [
        {
            link: '/home',
            title: 'HOME',
        },
        {
            link: '/details',
            title: 'DETAILS',
        },
        {
            link: '/story',
            title: 'OUR STORY',
        },
        {
            link: '/gallery',
            title: 'PHOTO GALLERY',
        },
        {
            link: '/travel_accommodations',
            title: 'TRAVEL & ACCOMMODATIONS',
        },
        {
            link: '/rsvp',
            title: 'RSVP',
        },
        {
            link: '/faq',
            title: 'FAQ',
        },
    ],
}

export default Config
