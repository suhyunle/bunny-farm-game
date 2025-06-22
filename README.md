🥕 Bunny Farm Game
귀여운 토끼와 함께 당근 농장을 운영하는 힐링형 시뮬레이션 게임!
직관적인 UI와 실시간 반응형 애니메이션을 기반으로, 유저가 몰입할 수 있는 키우기 게임을 React 기반으로 구현했습니다.
시간이 흐르면 배경이 바뀌고, 토끼는 열심히 움직이며, 유저는 상호작용을 통해 게임을 성장시킬 수 있습니다.

🎮 주요 기능
기능	설명
⏱️ 실시간 흐름 반영	게임 내 시간이 흐르며 배경이 아침 → 낮 → 저녁 → 밤으로 자연스럽게 변경됩니다.
🐰 토끼 애니메이션	밭 클릭 시 토끼가 해당 위치로 이동하며 작업 애니메이션이 적용됩니다.
🧢 악세서리 상점	당근 포인트로 리본, 모자 등 토끼를 꾸미는 아이템을 구매할 수 있습니다.
🛠️ 업그레이드 상점	자동 수확 기능 등 편의 기능을 해금하거나 강화할 수 있습니다.
🔔 알림 시스템	작업 상태에 따라 알림이 상단에 팝업으로 노출되어 피드백을 줍니다.
🎨 반응형 UI	모바일/데스크탑에서도 보기 좋도록 구성되었으며, 마우스 호버 시 인터랙션 효과를 제공합니다.
📦 LocalStorage 저장	당근 개수, 밭 상태 등 유저의 게임 진행 상황이 자동으로 저장됩니다.

⚙️ 기술 스택
Frontend: React (CRA), JavaScript

스타일링: CSS Modules + inline style (요구 사항에 따라 TailwindCSS 확장 가능)

상태관리: React Hooks (useState, useEffect)

애니메이션 & 사운드: CSS Animation, HTML5 Audio API

데이터 저장: LocalStorage

🗂️ 주요 폴더 구조
css
복사
편집
src/
├── components/
│   ├── BunnyDisplay.jsx
│   ├── CarrotCounter.jsx
│   ├── FarmGrid.jsx
│   ├── FarmTile.jsx
│   ├── Notification.jsx
│   ├── shop/
│   │   ├── AccessoryShop.jsx
│   │   └── UpgradeShop.jsx
│   └── Settings/
│       └── NicknameInput.jsx
├── data/
│   └── accessories.js
├── hooks/
│   └── useAutoHarvest.js
├── App.js
└── index.js
🖼️ 스크린샷
📷 필요하면 여기에 이미지 삽입:



💽 설치 및 실행
bash
복사
편집
git clone https://github.com/yourusername/bunny-farm-game.git
cd bunny-farm-game
npm install
npm start


```bash
git clone https://github.com/suhyunle/bunny-farm-game.git
cd bunny-farm-game
npm install
npm start
