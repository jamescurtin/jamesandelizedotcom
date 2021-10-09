import React from 'react'

import {
    mainBody,
    mainHeader,
    mainSubItalic,
    mainSubtext,
    thingsToDoLeft,
    thingsToDoLi,
    thingsToDoUl,
    thingsToDoRight,
} from './travel.module.css'
import Layout from './layout'

function genThingsToDoListItems(thingsToDo) {
    return thingsToDo.map((d) => (
        <li className={thingsToDoLi} key={d}>
            <a href={d.site} target="blank">
                {d.name}
            </a>
        </li>
    ))
}
export default function Travel() {
    const foodAndDrink = [
        {
            name: "Emma's Pub and Pizza",
            site: 'https://emmaspubandpizza.com',
        },
        { name: 'Good Days', site: 'https://www.gooddaysrestaurant.com' },
        {
            name: 'Black Hat Brew Works',
            site: 'https://www.blackhatbrewworks.com',
        },
        { name: 'Peaceful Meadows', site: 'http://www.peacefulmeadows.com' },
        { name: 'The Chatta Box', site: 'https://www.thechattabox.com' },
        {
            name: 'Cape Cod Pizza',
            site: 'https://capecodcafepizza.com/bridgewater-menu',
        },
    ]
    const activities = [
        {
            name: 'Ames Nowell State Park',
            site: 'https://www.mass.gov/locations/ames-nowell-state-park',
        },
        {
            name: '"The Nip" (Lake Nippenicket)',
            site: 'https://goo.gl/maps/bAHQvmgiADcfyc6o7',
        },
        {
            name: 'Ridder Farm Golf Course',
            site: 'https://www.ridderfarm.com/',
        },
        {
            name: 'Olde Scotland Links',
            site: 'https://www.oldescotlandlinks.com/',
        },
        { name: 'Fuller Craft Museum', site: 'https://fullercraft.org/' },
        { name: 'Raynham Flea Market', site: 'http://raynhamflea.com/' },
        {
            name: 'Plymouth, MA',
            site: 'https://www.tripadvisor.com/Attractions-g41773-Activities-Plymouth_Massachusetts.html',
        },
        {
            name: "World's End",
            site: 'https://thetrustees.org/place/worlds-end-hingham/',
        },
    ]
    const hotels = [
        {
            name: 'Residence Inn Brockton/Easton',
            site: 'https://www.marriott.com/hotels/travel/bosbc-residence-inn-boston-brockton-easton/',
        },
        {
            name: 'Doubletree Rockland',
            site: 'https://www.hilton.com/en/hotels/bosrodt-doubletree-boston-rockland/',
        },
        {
            name: 'Sonesta Select Boston Stoughton',
            site: 'https://www.sonesta.com/us/massachusetts/stoughton/sonesta-select-boston-stoughton',
        },
        {
            name: 'Holiday Inn Express Randolph',
            site: 'https://www.ihg.com/holidayinnexpress/hotels/us/en/randolph/bosmd/hoteldetail',
        },
    ]
    return (
        <Layout pageTitle="Travel Details">
            <br />
            <div className={mainBody}>
                <h3 className={mainHeader}>Accommodations</h3>
                <p className={mainSubItalic}>
                    We have reserved a room block at the Residence Inn
                    Bridgewater and plan on providing a round trip shuttle from
                    this hotel to the venue on the night of the reception.
                </p>
                <p className={mainBody}>
                    <b>Residence Inn Bridgewater</b>
                </p>
                <p className={mainSubtext}>
                    2020 Pleasant St, Bridgewater, MA
                    <br />
                    508-697-1412 |{' '}
                    <a
                        href="https://nam10.safelinks.protection.outlook.com/?url=https%3A%2F%2Fwww.marriott.com%2Fevents%2Fstart.mi%3Fid%3D1631732683461%26key%3DGRP&data=04%7C01%7Ckfarrell%40claremontcorp.com%7C6263a6f69aa64396dc7708d9787bb7a1%7C672ff2a675b44d12b7598f35af91f492%7C1%7C0%7C637673295039458860%7CUnknown%7CTWFpbGZsb3d8eyJWIjoiMC4wLjAwMDAiLCJQIjoiV2luMzIiLCJBTiI6Ik1haWwiLCJXVCI6Mn0%3D%7C1000&sdata=%2FPw%2BO3HgrIa70AZOAr42LJxTmJ0gQngPNrqxNhwDono%3D&reserved=0"
                        target="blank"
                    >
                        Hotel Site
                    </a>
                </p>
                <p className={mainSubtext}>
                    <b>
                        You must use{' '}
                        <a
                            href="https://nam10.safelinks.protection.outlook.com/?url=https%3A%2F%2Fwww.marriott.com%2Fevents%2Fstart.mi%3Fid%3D1631732683461%26key%3DGRP&data=04%7C01%7Ckfarrell%40claremontcorp.com%7C6263a6f69aa64396dc7708d9787bb7a1%7C672ff2a675b44d12b7598f35af91f492%7C1%7C0%7C637673295039458860%7CUnknown%7CTWFpbGZsb3d8eyJWIjoiMC4wLjAwMDAiLCJQIjoiV2luMzIiLCJBTiI6Ik1haWwiLCJXVCI6Mn0%3D%7C1000&sdata=%2FPw%2BO3HgrIa70AZOAr42LJxTmJ0gQngPNrqxNhwDono%3D&reserved=0"
                            target="blank"
                        >
                            this link
                        </a>{' '}
                        to receive a discounted rate
                    </b>{' '}
                    ($169/night) for the Huang-Curtin room block by{' '}
                    <b>March 4, 2022</b>. Reservations can also be made by
                    calling the hotel and mentioning the Huang/Curtin block.
                </p>
            </div>
            <br />
            <div className={mainBody}>
                <b>Other hotels in the area:</b>
                <div className={mainSubtext}>
                    <ul className={thingsToDoUl}>
                        {genThingsToDoListItems(hotels)}
                    </ul>
                </div>
            </div>
            <br />
            <br />
            <div className={mainBody}>
                <h3 className={mainHeader}>Things To Do</h3>
                <div className={thingsToDoLeft}>
                    <b>Food and Drink</b>
                    <ul className={thingsToDoUl}>
                        {genThingsToDoListItems(foodAndDrink)}
                    </ul>
                </div>
                <div className={thingsToDoRight}>
                    <b>Activities</b>
                    <ul className={thingsToDoUl}>
                        {genThingsToDoListItems(activities)}
                    </ul>
                </div>
            </div>
        </Layout>
    )
}
