import { TestBed, inject } from '@angular/core/testing';

import { ListaPersonasService } from './lista-personas.service';

describe('ListaPersonasService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ListaPersonasService]
    });
  });

  it('should be created', inject([ListaPersonasService], (service: ListaPersonasService) => {
    expect(service).toBeTruthy();
  }));
});
