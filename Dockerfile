# Stage 1: Создаем builder образ для сборки приложения
FROM node:18 as builder

WORKDIR /app

# Копируем package.json и package-lock.json для установки зависимостей
COPY package*.json ./

RUN npm install

# Копируем все файлы проекта в builder образ
COPY . .

# Выполняем сборку приложения
RUN npm run build

# Проверяем содержимое директории /app после сборки
RUN ls /app

# Stage 2: Создаем конечный образ, содержащий только необходимое для выполнения приложения
FROM node:18-alpine

WORKDIR /app

# Копируем только необходимые файлы из builder образа
COPY --from=builder /app/.next /app/.next
COPY --from=builder /app/package*.json /app/

# Устанавливаем только необходимые зависимости
RUN npm install --production

EXPOSE 3000

# Определяем команду для запуска приложения
CMD ["npm", "start"]