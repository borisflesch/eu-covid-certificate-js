# EuCovidCertificateJS

JavaScript codebase to decode EU Covid Certificate following EU Digital COVID Certificates schemas and guidelines.

Given any covid certificate QR Code data, the script returns an object containing all data found within the certificate.


![Output example](https://github.com/borisflesch/eu-covid-certificate-js/screenshots/output-example.png "Output example")

## Installation

Requires Node.js ≥ v14.15.4

```
$> git clone <URL of this repository>
$> cd eu-covid-certificate-js
$> npm i
```

## Example usage

- In `index.js`, use any Covid Certificate QR Code data (starting with `HC1:...`). By default, an example from [EU Digital Green Certificates - DGC Test data](https://github.com/eu-digital-green-certificates/dgc-testdata) is used.
- Execute the script with `$> node index`.
- Expected output :
```
Certificate {
  version: '1.3.0',
  forename: 'Api',
  standardisedForename: 'API',
  surname: 'Test',
  standardisedSurname: 'TEST',
  dateOfBirth: '2009-02-28',
  vaccination: null,
  test: TestEntry {
    diseaseOrAgentTargeted: '840539006',
    typeOfTest: 'LP6464-4',
    naaTestName: 'Nom du test',
    ratTestNameAndManufacturer: undefined,
    dateOfSampleCollection: '2021-04-13T14:20:00Z',
    testResult: '260373001',
    testingCentre: 'Centre de test',
    countryOfTest: 'FR',
    certificateIssuer: 'Emetteur du certificat',
    uniqueCertificateIdentifier: 'URN:UVCI:01:FR:6P7F35VYGB99#D'
  },
  recovery: null,
  certificateId: undefined
}
```

## Roadmap

- [x] Decode EU Covid Certificates
- [ ] Verify Certificates (i.e. signature verification)
- [ ] Comprehensive user interface for certificates visualisation & verification
- [ ] To be determined 😄

## References

- [European Union - eHealth Network - Guidelines on verifiable vaccination certificates - Basic interoperability elements](https://ec.europa.eu/health/sites/default/files/ehealth/docs/vaccination-proof_interoperability-guidelines_en.pdf)
- [European Union - eHealth Network - Technical Specifications for EU Digital COVID Certificates - JSON Schema Specification (1.3.0)](https://ec.europa.eu/health/sites/default/files/ehealth/docs/covid-certificate_json_specification_en.pdf)
- [European eHealth network - digital covid certificate coordination](https://github.com/ehn-dcc-development)