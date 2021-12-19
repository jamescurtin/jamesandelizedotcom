function doGet() {
    return HtmlService.createHtmlOutputFromFile('Index')
}

function validSecretKey(inputKey) {
    const documentProperties = PropertiesService.getScriptProperties()
    const secretKey = documentProperties.getProperty('secretKey')
    return secretKey.toLowerCase() === inputKey.toLowerCase()
}

function writeToSpreadsheet(data) {
    const documentProperties = PropertiesService.getScriptProperties()
    const id = documentProperties.getProperty('spreadsheetId')
    const ss = SpreadsheetApp.openById(id)
    const sheet = ss.getSheetByName('Sheet1')
    sheet.appendRow(data)
}

function postResponse(response) {
    return ContentService.createTextOutput(
        JSON.stringify(response)
    ).setMimeType(ContentService.MimeType.JAVASCRIPT)
}

function doPost(e) {
    const parameters = e.parameter
    if (!Object.prototype.hasOwnProperty.call(parameters, 'secretKey')) {
        return postResponse({ status: 'Invalid request', code: 400 })
    }
    if (!validSecretKey(parameters.secretKey)) {
        return postResponse({
            status: 'Invalid access code. Check to make sure it was entered correctly.',
            code: 400,
        })
    }

    const data = [
        parameters.attendees,
        parameters.email,
        parameters.attendance,
        parameters.total_attendee_count,
        parameters.chicken_count,
        parameters.beef_count,
        parameters.vegetarian_count,
        parameters.children_count,
        parameters.number_under_21,
        parameters.dietary_restrictions,
        parameters.song_requests,
    ]

    try {
        writeToSpreadsheet(data)
    } catch (error) {
        return postResponse({
            status: 'There was an error and your response could not be recorded!',
            code: 500,
        })
    }
    return postResponse({ status: 'success', code: 200 })
}
