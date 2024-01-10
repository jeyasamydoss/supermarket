/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { SnackbarServiceService } from './snackbarService.service';

describe('Service: SnackbarService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SnackbarServiceService]
    });
  });

  it('should ...', inject([SnackbarServiceService], (service: SnackbarServiceService) => {
    expect(service).toBeTruthy();
  }));
});
