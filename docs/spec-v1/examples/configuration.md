# Example Configuration Files

### ./examples/configuration-1.json

> Source Code: [./examples/configuration-1.json](https://github.com/SAP/open-resource-discovery/blob/main/examples/configuration-1.json)

```yaml
{
  "$schema": "https://sap.github.io/open-resource-discovery/spec-v1/interfaces/Configuration.schema.json",
  "openResourceDiscoveryV1": {
    "documents": [
      {
        "url": "/ord/documents/1.json",
        "accessStrategies": [
          {
            "type": "open"
          }
        ]
      },
      {
        "url": "/ord/documents/data-product.json",
        "accessStrategies": [
          {
            "type": "open"
          },
          {
            "type": "custom",
            "customType": "sap.foo:open-with-tenant-id:v1",
            "customDescription": "The metadata information is openly accessible but system instance aware.\nThe tenant is selected by providing a global or local tenant ID header."
          }
        ],
        "systemInstanceAware": true
      }
    ]
  }
}
```


