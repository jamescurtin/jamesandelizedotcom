const brideName = 'Elize'
const groomName = 'James'

const config = {
    site: {
        backgroundColor: '#f8f8f8',
        navColor: '#D95E39',
        textColor: '#001f3f',
        title: `${brideName} & ${groomName}'s Wedding`,
        description: `${brideName} and ${groomName} wedding website`,
        keywords: `${brideName}, ${groomName}, wedding website`,
    },
    wedding: {
        date: '4/9/2022',
        location: 'The Villa; East Bridgewater, MA',
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
            link: '/schedule',
            title: 'SCHEDULE',
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

export default config
