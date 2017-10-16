import { TestBed, inject } from '@angular/core/testing';

import { TaskViewerService } from './task-viewer.service';

describe('TaskViewerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TaskViewerService]
    });
  });

  it('should be created', inject([TaskViewerService], (service: TaskViewerService) => {
    expect(service).toBeTruthy();
  }));
});
