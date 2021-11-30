import { TestBed } from '@angular/core/testing';

import { AportadorInterceptor } from './aportador.interceptor';

describe('AportadorInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      AportadorInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: AportadorInterceptor = TestBed.inject(AportadorInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
