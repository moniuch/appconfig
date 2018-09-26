import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';

const APP_CONFIG_FILE_NAME = 'appConfig.json';

@Injectable({
  providedIn: 'root',
})
export class AppConfigService {
  private configData = {};

  constructor(
    private http: HttpClient,
  ) { }

  load() {
    const configUrl = environment.isLocal
      ? `./${APP_CONFIG_FILE_NAME}`
      : `../${APP_CONFIG_FILE_NAME}`;

    return this.loadAppConfig(configUrl);
  }

  get(setting: string): any {
    return this.configData[setting];
  }

  loadAppConfig(path: string): Promise<any> {
    return new Promise((resolve, reject) => {
      this.http.get(`${path}?v=${Date.now()}`)
        .toPromise()
        .then(data => {
          this.configData = data;
          resolve(data);
        })
        .catch(e => {
          reject(e);
        });
    });
  }
}
