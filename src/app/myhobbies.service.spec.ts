import { TestBed } from '@angular/core/testing';

import { MyhobbiesService } from './myhobbies.service';

describe('MyhobbiesService', () => {
  let service: MyhobbiesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MyhobbiesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
