# İlk aşamada bağımlılıkları yüklemek için Node.js kullanın
FROM node:latest as build-stage

# Çalışma dizinini /app olarak ayarlayın
WORKDIR /app

# package.json ve yarn.lock dosyalarını kopyalayın ve bağımlılıkları yükleyin
COPY package.json yarn.lock ./
RUN yarn install --frozen-lockfile

# Uygulamanın kaynak dosyalarını kopyalayın
COPY . .

# Uygulamayı derleyin
RUN yarn build

# İkinci aşamada sadece üretilen dosyaları çalıştırın
FROM node:latest as production-stage

# Çalışma dizinini /app olarak ayarlayın
WORKDIR /app

# Üretim aşamasından dosyaları kopyalayın
COPY --from=build-stage /app/package.json /app/yarn.lock ./
COPY --from=build-stage /app/.next ./.next
COPY --from=build-stage /app/public ./public

# Bağımlılıkları yükleyin
RUN yarn install --production --frozen-lockfile

# Başlangıç komutunu ayarlayın
CMD ["npm", "run", "dev"]
