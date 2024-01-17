import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { EquipmentModel } from 'src/app/models/equipment-model';

@Component({
  selector: 'app-add-equip',
  templateUrl: './add-equip.component.html',
  styleUrls: ['./add-equip.component.scss'],
})
export class AddEquipComponent {
  @Output() cancel: EventEmitter<boolean> = new EventEmitter();
  @Output() newEquipment: EventEmitter<EquipmentModel> = new EventEmitter();
  equip: EquipmentModel = {
    name: '',
    type: '',
    description: '',
    price: '',
    damage: '',
    fn: 0,
    effects: ''
  }

  cancelEquipment() {
    this.cancel.emit(true);
  }

  addEquipment() {
    if (
      this.equip.name.length < 0 ||
      this.equip.type.length < 0 ||
      this.equip.description.length < 0 ||
      this.equip.price.length < 0 ||
      this.equip.damage.length < 0
    ) {
      console.log('Erro na função');
      return;
    }
    console.log('Emitiu');
    this.newEquipment.emit(this.equip);
  }
}
