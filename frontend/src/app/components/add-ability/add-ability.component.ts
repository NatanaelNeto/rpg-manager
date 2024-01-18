import { AbilityModel } from '../../models/ability-model';
import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-add-ability',
  templateUrl: './add-ability.component.html',
  styleUrls: ['./add-ability.component.scss'],
})
export class AddAbilityComponent {
  @Output() cancel: EventEmitter<boolean> = new EventEmitter();
  @Output() newAbility: EventEmitter<AbilityModel> = new EventEmitter();

  abili: AbilityModel = {
    name: '',
    type: 'Ação',
    cost: '',
    requisites: '',
    diff: 0,
    description: ''
  }

  cancelAbility() {
    this.cancel.emit(true);
  }

  addAbility() {
    if (
      this.abili.name.length < 0 ||
      this.abili.cost.length < 0 ||
      this.abili.requisites.length < 0 ||
      this.abili.description.length < 0
    ) {
      return;
    }

    this.newAbility.emit(this.abili);
  }
}
