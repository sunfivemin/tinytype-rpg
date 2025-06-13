# 🎮 TinyType RPG

> 타입스크립트 기반 OOP 실습 프로젝트  
> 버튼을 누르면 누군가 맞습니다.

---

## 📌 프로젝트 소개

**TinyType RPG**는 TypeScript의 클래스, 상속, 인터페이스, 모듈 시스템을 활용한  
초간단 **턴제 전투 시뮬레이터**입니다.  
플레이어가 버튼을 클릭하여 적을 공격하고, 전투 로그가 UI에 출력됩니다.

🎯 이 프로젝트는 OOP 설계와 시스템 분리를 실습하기 위한 학습용 프로젝트입니다.

---

## 📂 폴더 구조

<pre>
src/
├── ai/                  # E - AI 시스템
│   └── EnemyAI.ts
├── battle/              # B - 전투 시스템
│   └── BattleManager.ts
├── character/           # A - 캐릭터 시스템
│   ├── Character.ts
│   ├── Player.ts
│   └── Enemy.ts
├── skill/               # C - 스킬 시스템
│   ├── Skill.ts
│   └── Fireball.ts
├── item/                # C - 아이템 시스템
│   ├── Item.ts
│   └── HealthPotion.ts
├── ui/                  # D - UI 시스템
│   └── UIManager.ts
├── main.ts              # D - 게임 흐름 연결
├── index.html           # D - UI 뼈대
└── style.css            # D - 스타일
</pre>

---

## 🧠 시스템 역할 분담

| 담당자 | 시스템             | 역할 요약 |
|--------|--------------------|-----------|
| A      | 캐릭터 시스템      | 캐릭터 상태, 데미지/힐 관리 |
| B      | 전투 시스템        | 턴 게이지 기반 전투 흐름, 플레이어 액션 |
| C      | 스킬/아이템 시스템 | 인터페이스 정의, 파이어볼/포션 구현 |
| E      | AI 시스템          | 슬라임 랜덤 행동, 버프/분노 로직 구현 |
| D      | UI 시스템 (공통)   | 버튼/HP바/로그 출력, 게임 흐름 연결 |

---

## 🛠 기술 스택

- TypeScript (ES6 모듈)
- Parcel (번들링 및 개발 서버)
- HTML/CSS 기반 UI
- 클래스 기반 OOP 설계 및 모듈 구조화

---

## 🕹 실행 방법

```bash
npm install     # 의존성 설치
npm run dev     # 개발 서버 실행
```

## 🔗 더 자세한 내용은?

이 프로젝트의 **초기 세팅은 [sunfivemin/tinytype-rpg](https://github.com/sunfivemin/tinytype-rpg)** 저장소에서 시작되었으며,  
**본격적인 기능 구현과 시스템 개발은 [tslearners/typeScriptStudy](https://github.com/chan8919/typeScriptStudy)** 레포지토리에서 이어졌습니다.

👉 초기 저장소: [https://github.com/sunfivemin/tinytype-rpg](https://github.com/sunfivemin/tinytype-rpg)  
👉 전체 구현: [https://github.com/chan8919/typeScriptStudy](https://github.com/chan8919/typeScriptStudy)


