
## Issue [#19267](https://github.com/azure/azure-sdk-for-js/issues/19267)
This repo intends to repro the user issue at [#19267](https://github.com/azure/azure-sdk-for-js/issues/19267). So, far the issue has not been repro-ed

## How to use this sample
- `app.component.ts` has the code to list the configuration settings.
- Make sure to provide the connection string or use the AAD credential while creating the client.
- Run `ng serve` for a dev server. Navigate to http://localhost:4200/. The app will automatically reload if you change any of the source files. 
- If you already have any configuration settings in the app-config resource, you should see the logs in the browser listing the keys and values.
