import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ModalsService {

  $createUserModal = new EventEmitter<any>()
  $updateUserModal = new EventEmitter<any>()
  $subscribeUserModal = new EventEmitter<any>()

  $createInstanceModal = new EventEmitter<any>()
  $updateInstanceModal = new EventEmitter<any>()

  $optionsInstance = new EventEmitter<any>()

  constructor() { }
}
