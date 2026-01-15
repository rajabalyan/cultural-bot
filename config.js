// Fallback Configuration
// This is used when GitHub Secrets are not available

const CONFIG = {
    OPENWEATHER_API_KEY: '',  // Add your API key if needed
    HUGGINGFACE_TOKEN: '',     // Add your token if needed
    NEWS_API_KEY: '',          // Add your API key if needed
    ENVIRONMENT: 'production',
    BUILD_NUMBER: 'local',
    DEPLOY_TIME: new Date().toISOString()
};

// Make config available globally
if (typeof window !== 'undefined') {
    window.CONFIG = CONFIG;
}
