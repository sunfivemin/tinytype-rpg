import { Character } from './Character';

export class Enemy extends Character {
  // Enemy가 공격할 때 확률로 특수공격 포함
  attackPlayer(target: Character): string {
    const rand = Math.random();

    if (rand < 0.5) {
      // 50% 확률 방어무시 특수공격
      const damage = this.attack + 10;
      target.hp = Math.max(0, target.hp - damage);
      return `${this.name}이 ${target.name}에게 방어무시 특수공격! ${damage}의 데미지를 입혔습니다.`;
    } else {
      // 일반 공격 (방어력 적용)
      const damage = target.takeDamage(this.attack);
      return `${this.name}이 ${target.name}에게 ${damage}의 데미지를 입혔습니다.`;
    }
  }
}
