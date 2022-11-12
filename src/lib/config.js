const env = process.env.NODE_ENV || 'development';
const envIsDev = env === 'development';

export const config = {
  urls: {
    apiWebClient: envIsDev ? 'http://localhost:10000' : 'https://diag-cll-webclient-api.azurewebsites.net',
    apiClientes: envIsDev ? 'http://localhost:10001' : 'https://diag-cll-clientes-api.azurewebsites.net',
    apiDiagnosticos: envIsDev ? 'http://localhost:10002' : 'https://diag-cll-diagnosticos-api.azurewebsites.net',
    apiIdentity: envIsDev ? 'http://localhost:10003' : 'https://diag-cll-identity-api.azurewebsites.net',
    apiPersonal: envIsDev ? 'http://localhost:10004' : 'https://diag-cll-personal-api.azurewebsites.net',
  },
}
