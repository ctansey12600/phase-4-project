puts "Seeding data..."

drinks = []

15.times do
  response = RestClient.get "www.thecocktaildb.com/api/json/v1/1/random.php"
  drinks_hash = JSON.parse(response)

  drink_hash = drinks_hash["drinks"][0]
  drinks << drink_hash
end

drinks.each do |d|
  drink =
    Drink.create(
      name: d["strDrink"],
      category: d["strCategory"],
      suggested_glass: d["strGlass"],
      image_url: d["strDrinkThumb"],
    )

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

  recipe =
    Recipe.create(
      title: "How to make #{d["strDrink"]}s",
      time_required: rand(1..10),
      drink_id: drink.id,
    )

  (1..15).each do |n|
    if d["strIngredient#{n}"] != nil
      ingredient = Ingredient.create(name: d["strIngredient#{n}"])
      if d["strMeasure#{n}"] != nil
        RecipeIngredient.create(
          step_number: n,
          measurement: d["strMeasure#{n}"],
          ingredient_id: ingredient.id,
          recipe_id: recipe.id,
        )
      end
    end
  end

  RecipeIngredient.all.each do |r|
    random = Faker::Boolean.boolean
    if random
      UserIngredient.create(
        amount_owned: r.measurement,
        user_id: user.id,
        ingredient_id: r.ingredient_id,
      )
    else
      UserIngredient.create(
        amount_owned: "0",
        user_id: user.id,
        ingredient_id: r.ingredient_id,
      )
    end
  end
end

puts "✅ Done seeding!"
