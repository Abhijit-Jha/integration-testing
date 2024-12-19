docker-compose up -d
echo "😎 Waiting for Database to be ready ..."
./scripts/wait-for-it.sh "postgres://postgres:mysercretpassword@localhost:5432/postgres" -- echo "😘 Connected to the Database"
npx prisma migrate dev --name "init"
npm run test
docker-compose down