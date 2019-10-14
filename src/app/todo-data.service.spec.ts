import { TestBed, async, inject } from '@angular/core/testing';
import { Todo } from './todo';
import { TodoDataService } from './todo-data.service';

describe('TodoDataService', () => {
  beforeEach(() =>
    TestBed.configureTestingModule({ providers: [TodoDataService] })
  );

  // orig
  //  it('should be created', () => {
  //    const service: TodoDataService = TestBed.get(TodoDataService);
  ///    expect(service).toBeTruthy();
  //  });

  it('should ...', inject([TodoDataService], (service: TodoDataService) => {
    expect(service).toBeTruthy();
  }));
});
