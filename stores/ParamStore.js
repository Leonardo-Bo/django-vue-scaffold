import { defineStore } from 'pinia'

export const useParamStore = defineStore('ParamStore', {
    state: () => {
        return {
            isLoading: false,

            toastSuccess: {
                type: 'success',
                position: 'bottom-right',
                timeout: 3000,
                showIcon: true,
            },
            
            toastInfo: {
                type: 'info',
                position: 'bottom-right',
                timeout: 3000,
                showIcon: true,
            },
    
            toastDanger: {
                type: 'danger',
                position: 'bottom-right',
                timeout: 5000,
                showIcon: true,
            },
    
            toastDefault: {
                type: 'default',
                position: 'bottom-right',
                timeout: 3000,
                showIcon: true,
            },
    
            toastWarning: {
                type: 'warning',
                position: 'bottom-right',
                timeout: 3000,
                showIcon: true,
            },

            colors: {
                blue: 0x36648B,
                red: 0xEE2C2C,
                yellow: 0xFFFF00,
                green: 0x00FF00,
                orange: 0xFFA500,
                gray: 0x7F7F7F
            },
        }
    },
    getters: {},
    actions: {
        setIsLoading(status) {
            this.isLoading = status.isLoading
        }
    }
})
