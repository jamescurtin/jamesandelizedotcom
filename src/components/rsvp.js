import React, { useState } from 'react'
import Modal from 'react-modal'
import { PropTypes } from 'prop-types'
import Button from 'react-bootstrap/Button'

import Layout from './layout'
import {
    actions,
    attendeeCounts,
    content,
    entreeExplainer,
    foodChoices,
    formContainer,
    modal,
} from './rsvp.module.css'

import './rsvp.style.css'

const rsvpUrl =
    'https://script.google.com/macros/s/AKfycbx4kuXKNesFQy0bw10lgy8rtZZcTE-kRK1sIioUFYD-0M7Akp08ZRaOFeOl79jKa2a8/exec'

async function postData(url = '', data = {}) {
    const encodedData = new URLSearchParams(data)
    const response = await fetch(url, {
        method: 'POST',
        mode: 'cors',
        cache: 'no-cache',
        credentials: 'omit',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        },
        redirect: 'follow',
        referrerPolicy: 'no-referrer',
        body: encodedData,
    })
    return response.json()
}

function submitRsvp(payload, setModalIsOpenToTrue) {
    postData(rsvpUrl, payload).then((data) => {
        if (data.code === 200) {
            setModalIsOpenToTrue(
                'Thank you!',
                'Your RSVP has been recorded',
                `${data.code}`
            )
        } else {
            setModalIsOpenToTrue('Error!', `${data.status}`, `${data.code}`)
        }
    })
}

const ResponseModal = function ({ modalInfo, setModalIsOpenToFalse }) {
    return (
        <Modal isOpen={modalInfo.isOpen} ariaHideApp={false} className={modal}>
            <h2>{modalInfo.header}</h2>
            <div className={content}>{modalInfo.message}</div>
            <div className={actions}>
                {modalInfo.status === '200' ? (
                    <Button variant="success" href="/">
                        Done
                    </Button>
                ) : (
                    <Button variant="warning" onClick={setModalIsOpenToFalse}>
                        Try again
                    </Button>
                )}
            </div>
        </Modal>
    )
}

const MandatoryQuestions = function ({ formData, handleInputChange }) {
    return (
        <div>
            <label>
                <span>Access code from invitation</span>
                <input
                    type="text"
                    name="secretKey"
                    placeholder="The code will be printed on your invitation"
                    value={formData.secretKey}
                    onChange={handleInputChange}
                    required
                />
            </label>
            <h3>Attendee Information</h3>
            <label>
                <span>Name(s) of attendees</span>
                <input
                    type="text"
                    name="attendees"
                    autoComplete="name"
                    placeholder="Full names of those attending"
                    value={formData.attendees}
                    onChange={handleInputChange}
                    required
                />
            </label>
            <label>
                <span>Will you be in attendance?</span>
                <p>
                    Please mark “Accept” only if you will be fully vaccinated by
                    April 9.
                </p>
                <select
                    name="attendance"
                    value={formData.attendance}
                    onChange={handleInputChange}
                >
                    <option value="true">Accept with Pleasure</option>
                    <option value="false">Regretfully Decline</option>
                </select>
            </label>
        </div>
    )
}

const AttendeeQuestions = function ({ formData, handleInputChange }) {
    return (
        <div>
            <label>
                <span>Contact email/phone number</span>
                <input
                    type="text"
                    name="email"
                    autoComplete="email"
                    placeholder="Best way to reach you if we need to send updates"
                    value={formData.email}
                    onChange={handleInputChange}
                />
            </label>
            <div className={attendeeCounts}>
                <label>
                    <span>Total # attendees</span>
                    <input
                        type="text"
                        name="total_attendee_count"
                        pattern="[0-9]*"
                        title="Please enter a number"
                        maxLength="2"
                        placeholder="Total number of attendees"
                        size="sm"
                        value={formData.total_attendee_count}
                        onChange={handleInputChange}
                    />
                </label>
                <label>
                    <span># attendees under 21</span>
                    <input
                        type="text"
                        name="number_under_21"
                        pattern="[0-9]*"
                        title="Please enter a number"
                        maxLength="2"
                        placeholder="Total number of attendees under 21"
                        value={formData.number_under_21}
                        onChange={handleInputChange}
                    />
                </label>
            </div>
            <h3>Entrée Choice</h3>
            <div className={entreeExplainer}>
                <ul>
                    <li>
                        <b>Chicken</b>: Tuscan Crusted Chicken
                    </li>
                    <li>
                        <b>Beef</b>: Slow Roasted Prime Rib
                    </li>
                    <li>
                        <b>Vegetarian</b>: Butternut Squash Ravioli
                    </li>
                    <li>
                        <b>Children</b>: Chicken Fingers and Fries
                    </li>
                </ul>
                Please indicate the entrée preference of each attendee by adding
                their initials under the corresponding meal:
            </div>
            <div className={foodChoices}>
                <label>
                    <span>Chicken</span>
                    <input
                        type="text"
                        name="chicken_count"
                        value={formData.chicken_count}
                        onChange={handleInputChange}
                    />
                </label>
                <label>
                    <span>Beef</span>
                    <input
                        type="text"
                        name="beef_count"
                        value={formData.beef_count}
                        onChange={handleInputChange}
                    />
                </label>
                <label>
                    <span>Vegetarian</span>
                    <input
                        type="text"
                        name="vegetarian_count"
                        value={formData.vegetarian_count}
                        onChange={handleInputChange}
                    />
                </label>
                <label>
                    <span>Child (under 13)</span>
                    <input
                        type="text"
                        name="children_count"
                        value={formData.children_count}
                        onChange={handleInputChange}
                    />
                </label>
            </div>
            <h3>Additional Information</h3>
            <label>
                <span>Dietary Restrictions</span>
                <textarea
                    type="text"
                    name="dietary_restrictions"
                    placeholder="Please let us know if you have any dietary restrictions we should pass along to the venue"
                    value={formData.dietary_restrictions}
                    onChange={handleInputChange}
                />
            </label>
            <label>
                <span>Song Requests</span>
                <textarea
                    type="text"
                    name="song_requests"
                    placeholder="If there's a song that will get you up on the dance floor, let us know!"
                    value={formData.song_requests}
                    onChange={handleInputChange}
                />
            </label>
        </div>
    )
}

const MyForm = function () {
    const [formData, setFormData] = useState({
        secretKey: '',
        attendees: '',
        email: '',
        attendance: 'true',
        total_attendee_count: '',
        chicken_count: '',
        beef_count: '',
        vegetarian_count: '',
        children_count: '',
        number_under_21: '',
        dietary_restrictions: '',
        song_requests: '',
    })

    const handleInputChange = (event) => {
        const { target } = event
        const { name } = target
        setFormData({
            ...formData,
            [name]: target.value,
        })
    }

    const [modalInfo, setModalInfo] = useState({
        isOpen: false,
        header: '',
        message: '',
        status: 0,
    })

    const setModalIsOpenToTrue = (header, message, status) => {
        setModalInfo({
            ...modalInfo,
            isOpen: true,
            header,
            message,
            status,
        })
    }

    const setModalIsOpenToFalse = () => {
        setModalInfo({
            ...modalInfo,
            isOpen: false,
            header: '',
            message: '',
        })
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        const attendeeCount = +formData.total_attendee_count
        if (formData.attendance === 'true' && attendeeCount === 0) {
            setModalIsOpenToTrue(
                'Error!',
                'Must provide the number of attendees',
                0
            )
        } else {
            submitRsvp(formData, setModalIsOpenToTrue)
        }
    }

    return (
        <div className={{ formContainer }}>
            <ResponseModal
                modalInfo={modalInfo}
                setModalIsOpenToFalse={setModalIsOpenToFalse}
            />
            <form onSubmit={handleSubmit} onChange={handleInputChange}>
                <MandatoryQuestions
                    formData={formData}
                    handleInputChange={handleInputChange}
                />
                {formData.attendance === 'true' ? (
                    <AttendeeQuestions
                        formData={formData}
                        handleInputChange={handleInputChange}
                    />
                ) : null}

                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default function Rsvp() {
    return (
        <Layout pageTitle="RSVP">
            <MyForm />
        </Layout>
    )
}

MandatoryQuestions.propTypes = {
    formData: PropTypes.objectOf(PropTypes.string).isRequired,
    handleInputChange: PropTypes.func.isRequired,
}

AttendeeQuestions.propTypes = {
    formData: PropTypes.objectOf(PropTypes.string).isRequired,
    handleInputChange: PropTypes.func.isRequired,
}

ResponseModal.propTypes = {
    modalInfo: PropTypes.objectOf(
        PropTypes.oneOfType([
            PropTypes.string,
            PropTypes.bool,
            PropTypes.number,
        ])
    ).isRequired,
    setModalIsOpenToFalse: PropTypes.func.isRequired,
}
