import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed, inject } from '@angular/core/testing';
import { environment } from '../environments/environment';
import { AppConfigService } from './app-config.service';

describe('AppConfigService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
      ],
      providers: [
        AppConfigService,
      ],
    });
  });

  it('should be created', inject([AppConfigService], (service: AppConfigService) => {
    expect(service).toBeTruthy();
  }));

  it('should read from local file when run locally', inject([AppConfigService], (service: AppConfigService) => {
    environment.isLocal = true;
    spyOn(service, 'loadAppConfig');
    service.load();
    expect(service.loadAppConfig).toHaveBeenCalledWith('./appConfig.json');
  }));

  it('should read from local file when run not locally', inject([AppConfigService], (service: AppConfigService) => {
    environment.isLocal = false;
    spyOn(service, 'loadAppConfig');
    service.load();
    expect(service.loadAppConfig).toHaveBeenCalledWith('../appConfig.json');
  }));

  it('should load config data', inject([AppConfigService], (service: AppConfigService) => {
    service.load().then(data => {
      expect(data).toBeDefined();
      expect(service.loaded).toEqual(true);
      expect(service.get('setting')).toEqual('setting');
    });
  }));
});
