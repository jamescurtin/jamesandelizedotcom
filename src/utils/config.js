const brideName = 'Elize'
const groomName = 'James'

const Config = {
    site: {
        title: `${brideName} & ${groomName}'s Wedding`,
        description: `${brideName} and ${groomName} wedding website`,
        keywords: `${brideName}, ${groomName}, wedding website`,
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
            link: '/about',
            title: 'ABOUT US',
        },
        {
            link: '/details',
            title: 'DETAILS',
        },
        {
            link: '/travel_accommodations',
            title: 'TRAVEL & ACCOMMODATIONS',
        },
        {
            link: '/venue',
            title: 'VENUE',
        },
        {
            link: '/registry',
            title: 'REGISTRY',
        },
        {
            link: '/rsvp',
            title: 'RSVP',
        },
    ],
}

export default Config
