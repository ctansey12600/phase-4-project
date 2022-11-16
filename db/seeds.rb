puts "Seeding data..."

drinks = []

10.times do
  response = RestClient.get "www.thecocktaildb.com/api/json/v1/1/random.php"
  drinks_hash = JSON.parse(response)
  drink_hash = drinks_hash["drinks"][0]
  drinks << drink_hash.compact!
end

drinks.each do |d|
  drink =
    Drink.create(
      name: d["strDrink"],
      category: d["strCategory"],
      suggested_glass: d["strGlass"],
      image_url: d["strDrinkThumb"],
    )
  recipe =
    Recipe.create(
      title: "How to make #{d["strDrink"]}s",
      instructions: d["strInstructions"],
      time_required: rand(1..10),
      drink_id: drink.id,
    )
  (1..15).each do |n|
    if d.has_key?("strIngredient#{n}")
      ingredient = Ingredient.create(name: d["strIngredient#{n}"])
      if d.has_key?("strMeasure#{n}")
        RecipeIngredient.create(
          step_number: n,
          measurement: d["strMeasure#{n}"],
          ingredient_id: ingredient.id,
          recipe_id: recipe.id,
        )
      end
    end
  end

  10.times do
    user =
      User.create(
        username: Faker::Internet.username,
        password: "sup3r-secret",
        password_confirmation: "sup3r-secret",
        first_name: Faker::Name.first_name,
        last_name: Faker::Name.last_name,
      )

    review =
      Review.create(
        rating: rand(1..5),
        favorite: Faker::Boolean.boolean,
        drink_id: drink.id,
        user_id: user.id,
      )
  end
end

puts "✅ Done seeding!"
