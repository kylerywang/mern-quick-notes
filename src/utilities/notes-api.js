import sendRequest from './send-request'
const BASE_URL = '/api/notes'

export function getNotes() {
    return sendRequest(BASE_URL)
}

export function addNote(data) {
    return sendRequest(`${BASE_URL}`, 'POST', data)
}

