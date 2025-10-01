import { AuthConfig } from 'angular-oauth2-oidc'

export const auth: AuthConfig = {
  issuer: 'https://accounts.google.com',
  redirectUri: window.location.origin,
  clientId: '584080344353-6u6ogc6d6d6tk058sk3diefml9vvc26k.apps.googleusercontent.com',
  scope: 'openid profile email',
  strictDiscoveryDocumentValidation: false
}
