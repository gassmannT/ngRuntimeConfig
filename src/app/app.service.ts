import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AppConfig {
  constructor(private http: HttpClient) {}

  load(): Promise<void> {
    const jsonFile = `config.json`;
    return new Promise<void>((resolve, reject) => {
      this.http
        .get(jsonFile)
        .toPromise()
        .then((env) => {
          if (env) {
            for (const key in env) {
              if (env.hasOwnProperty(key)) {
                const item = env[key];
                environment[key] = item;
              }
            }
          }
          resolve();
        })
        .catch((response: any) => {
          reject(
            `Could not load file '${jsonFile}': ${JSON.stringify(response)}`
          );
        });
    });
  }
}
