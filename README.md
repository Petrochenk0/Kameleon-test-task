# Kameleon A/B Testing Dashboard

## 📝 Описание | Description

Тестовое задание для frontend-разработчиков: дашборд для отображения и управления A/B тестами.

Frontend developer test task: dashboard for displaying and managing A/B tests.

### 🎯 Основной функционал | Core Features

- Отображение списка A/B тестов в табличном формате
- Фильтрация тестов по названию
- Сортировка по всем колонкам (имя, тип, статус, сайт)
- Роутинг между страницами (dashboard, results, finalize)
- Форматирование URL сайтов (без http/https и www)
- Подсветка строк при наведении
- Адаптивный дизайн
- Поддержка клавиатурной навигации

### 🛠 Технологии | Technologies

- React 18
- TypeScript
- React Router v6
- Axios
- SCSS
- Classnames

## 🚀 Запуск проекта | Getting Started

### Предварительные требования | Prerequisites

- Node.js (версия 14 или выше)
- npm/yarn

### Установка | Installation

1. Клонируйте репозиторий | Clone the repository:

```bash
git clone https://github.com/Petrochenk0/Kameleon-test-task.git
```

2. Установите зависимости для фронтенда | Install frontend dependencies:

```bash
cd kameleon-dashboard
npm install
```

3. Установите зависимости для бэкенда | Install backend dependencies:

```bash
cd ../frontend-interview-task-api
npm install
```

### Запуск | Running

1. Запустите API сервер | Start the API server:

```bash
cd frontend-interview-task-api
npm start
```

Сервер запустится на порту 3100 | Server will run on port 3100

2. В новом терминале запустите фронтенд | In a new terminal, start the frontend:

```bash
cd kameleon-dashboard
npm start
```

Приложение будет доступно по адресу | Application will be available at: http://localhost:3000

## 📁 Структура проекта | Project Structure

```
kameleon-dashboard/                # React приложение
│   ├── src/
│   │   ├── components/     # React компоненты
│   │   ├── pages/         # Компоненты страниц
│   │   ├── services/      # API сервисы
│   │   ├── types/         # TypeScript типы
│   │   └── utils/         # Вспомогательные функции
│   └── package.json
│
frontend-interview-task-api/                # API сервер
    ├── db.json            # JSON база данных
    └── package.json
```

## 🔍 API Endpoints

- `GET /sites` - Получить список сайтов | Get list of sites
- `GET /sites/[id]` - Получить сайт по ID | Get site by ID
- `GET /tests` - Получить список тестов | Get list of tests
- `GET /tests/[id]` - Получить тест по ID | Get test by ID

## 💡 Особенности реализации | Implementation Details

### Сортировка | Sorting

- Имя, тип и сайт сортируются в алфавитном порядке
- Статусы сортируются в следующем порядке:
  - ASC: Online → Paused → Stopped → Draft
  - DESC: Draft → Stopped → Paused → Online

### Фильтрация | Filtering

- Поиск по имени теста (case-insensitive)
- Отображение количества найденных тестов
- Кнопка сброса фильтра

### Роутинг | Routing

- `/` - Главная страница с таблицей тестов
- `/results/:testId` - Страница результатов теста
- `/finalize/:testId` - Страница финализации теста

## 👨‍💻 Автор | Author

Nikita Petrochenko
