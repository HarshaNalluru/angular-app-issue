import { Component } from '@angular/core';
import { AppConfigurationClient } from '@azure/app-configuration';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'angular-app-issue';
}

async function listSettings() {
  const connectionString = '<connection-string>';
  const client = new AppConfigurationClient(connectionString);
  const sampleKeys = client.listConfigurationSettings({});
  for await (const setting of sampleKeys) {
    console.log(`  Found key: ${setting.key}, label: ${setting.label}`);
  }
}

listSettings().catch((err) => {
  console.log(err);
});
