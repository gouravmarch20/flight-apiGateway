
<!-- sequelite -->
 npx sequelize-cli db:migrate

sequelize init 
npx sequelize db:seed
<!-- db  -->
show databases;
use Flights;
show tables;
desc users;

npx sequelize-cli db:seed --seed 20251002063721-seed-booking.js


UPDATE flightgateway.User_Roles
SET roleId = 1,
    updatedAt = NOW()
WHERE id = 1;
