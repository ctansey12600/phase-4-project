puts "Seeding..."

20.times do
  response = RestClient.get "www.thecocktaildb.com/api/json/v1/1/random.php"
  drinks_hash = JSON.parse(response)

  drink_hash = drinks_hash["drinks"][0]

  Drink.create(
    name: drink_hash["strDrink"],
    category: drink_hash["strCategory"],
    suggested_glass: drink_hash["strGlass"],
    image_url: drink_hash["strDrinkThumb"],
  )
end

puts "Done seeding!"
