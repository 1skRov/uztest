import { defineStore } from 'pinia'

export const useAuthStore = defineStore('auth', {
    state: () => {
        const storedState = localStorage.getItem('authState')
        return storedState ? JSON.parse(storedState) : {
            user: null,
            isAuthenticated: false
        }
    },
    actions: {
        async setCsrfToken() {
            try {
                const response = await fetch('https://39a6-37-150-163-252.ngrok-free.app/set-csrf-token', {
                    method: 'GET',
                    credentials: 'include'
                })
                if (!response.ok) {
                    console.error('Failed to set CSRF token', response.statusText)
                }
            } catch (error) {
                console.error('Error setting CSRF token:', error)
            }
        },

        async login(name, iin, date_birth, phone_number) {
            const response = await fetch('https://39a6-37-150-163-252.ngrok-free.app/jointogroups', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'X-CSRFToken': getCSRFToken()
                },
                body: JSON.stringify({ name, iin, date_birth, phone_number }),
                credentials: 'include'
            })
            if (!response.ok) {
                console.error('Login failed', response.statusText)
                return
            }
            const data = await response.json()
        },

        saveState() {
            /*
            We save state to local storage to keep the
            state when the user reloads the page.

            This is a simple way to persist state. For a more robust solution,
            use pinia-persistent-state.
             */
            localStorage.setItem('authState', JSON.stringify({
                user: this.user,
                isAuthenticated: this.isAuthenticated
            }))
        }
    }
})

export function getCSRFToken() {
    const name = 'csrftoken';
    let cookieValue = null;
    if (document.cookie && document.cookie !== '') {
        const cookies = document.cookie.split(';');
        for (let i = 0; i < cookies.length; i++) {
            const cookie = cookies[i].trim();
            if (cookie.substring(0, name.length + 1) === (name + '=')) {
                cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                break;
            }
        }
    }
    if (cookieValue === null) {
        throw 'Missing CSRF cookie.'
    }
    return cookieValue;
}

