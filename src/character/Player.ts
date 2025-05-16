// maxHp를 넘지 않는 범위로 체력 회복.
// 실제 회복된 양을 반환.

import { Character } from './Character';

export class Player extends Character {
  heal(amount: number): number {
    const healed = Math.min(this.maxHp - this.hp, amount); // 회복량을 계산하는데, 체력이 maxHp를 넘지 않게 제한
    this.hp += healed; // 실제 체력에 회복된 양을 더함
    return healed; // 실제로 회복된 양을 반환 (ex: 15만 회복했으면 15 반환)
  }
}
