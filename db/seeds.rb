# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)



puts"🌱seeding"

puts "seeding request table.."
10.times do 
  RequestedItem.create(
  clerk_name:Faker::Name.name,
  quantity:Faker::Number.number(digits: 3),
  item_name:Faker::Device.model_name,
  date:Faker::Date.between(from: '2020-09-23', to: '2021-09-25'),
  clerk_id:Faker::Number.number(digits: 2),
)
end

puts "seeding item table..."
15.times do 
  Item.create(
    name:Faker::Device.model_name,
    quantity:Faker::Number.number(digits: 3),
    inStock:Faker::Number.number(digits: 2),
    spoilt:Faker::Number.non_zero_digit,
    clerk_id:Faker::Number.number(digits: 2),
  )
end

Clerk.create(
  full_name:"James",
  email:"james@gmail.com",
  password_digest:"james",
  admin_id:1
)

puts "done seeding.!"


 
