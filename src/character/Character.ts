// 캐릭터 공통 로직 (HP, 데미지 계산, isAlive 체크)

// 캐릭터가 가질 기본 능력치를 설정.

export class Character {
  constructor(
    // 공통 속성: 이름, HP 현재 체력, 공격력, 방어력, 최대 체력 (기본값은 hp와 동일)
    public name: string,
    public hp: number,
    public attack: number,
    public defense: number,
    public maxHp: number = hp
  ) {}

  // 데미지 받기: 방어력을 고려해서 체력을 깎음
  takeDamage(amount: number): number {
    const damage = Math.max(0, amount - this.defense); //	받은 데미지 - 방어력 만큼 깎임.
    this.hp = Math.max(0, this.hp - damage); // 현재 HP에서 깎고, 0 밑으로 안 내려가게 처리.
    return damage; // 실제로 깎인 데미지를 반환.
  }

  // 살아있는지 확인: HP 0 초과면 살아있음
  isAlive(): boolean {
    return this.hp > 0;
  }
}
